import { Router, Request, Response, NextFunction } from 'express';

// import subroutes
import AuthRouter from './auth.route';
import UsersRouter from './users.route';
import ResidentsRouter from './residents.route';
import VitalSignsRouter from './vitalsigns.route';

// imports for user auth
import bcrypt from 'bcrypt';
import acl from 'express-acl';
import { Bearer, Basic } from 'permit';
import { BAD_REQUEST, OK, UNAUTHORIZED } from 'http-status-codes';
import { paramMissingError, loginFailedError, unauthorizedError } from '@shared/constants';
import UserDao from '@daos/user.dao';

const userDao = new UserDao();

// Init router and path
const router = Router();

//setup config for express-acl
acl.config({
  filename: 'nacl.json',
  path: 'src',
  decodedObjectName: 'user',
  baseUrl: 'api'
});

// WIP:if we implement lul
// Auth route - user login here and get session token
router.use('/auth', AuthRouter);

//check if user is logged in
router.use(async (req: Request, res: Response, next: NextFunction) => {
  //permit check for basic credentials
  const permit = new Basic({});
  const credentials = permit.check(req);

  //check credentials against user collection
  if (credentials) {
    //get user, password from credentials
    const [ username, password ] = credentials;

    // Fetch user
    const user = await userDao.getOneByUname(username);
    if (!user) {
      return res.status(UNAUTHORIZED).json({
        error: loginFailedError + "user not found",
      });
    }
    // Check password
    const pwdPassed = bcrypt.compareSync(password, user.pwdHash);
    if (!pwdPassed) {
      return res.status(UNAUTHORIZED).json({
        error: loginFailedError + "password is incorrect",
      });
    }
    //add the user object into request, to be used but express-acl to get the user role
    req.user = user;
    next();
  }
  else{
    return res.status(UNAUTHORIZED).json({
      error: unauthorizedError,
    });
  }
});

//use express-acl to check the roles and authorize routes accordingly
router.use(acl.authorize);

//temp: do not check admin for now
// routes that require admin (assumes user has already logged in)
router.use('/residents', ResidentsRouter);
router.use('/users', UsersRouter);
router.use('/vitalsigns', VitalSignsRouter);

// Export the base-router
export default router;
