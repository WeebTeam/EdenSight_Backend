import { Router, Request, Response, NextFunction } from 'express';
import UserRouter from './users.route';
import AuthRouter from './auth.route';

import bcrypt from 'bcrypt';
import { Bearer, Basic } from 'permit';
import { BAD_REQUEST, OK, UNAUTHORIZED } from 'http-status-codes';
import { paramMissingError, loginFailedError, unauthorizedError } from '@shared/constants';

import UserDao from '@daos/user/user.dao';
const userDao = new UserDao();

// Init router and path
const router = Router();

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
    const user = await userDao.getOne(username);
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
  }
  else{
    return res.status(UNAUTHORIZED).json({
      error: unauthorizedError,
    });
  }
  next();
});

// routes that requires login but not admin (staff)
//router.use('/auth', AuthRouter);

//check if user is admin
//should be ditched when we move over to token based after logging in
router.use(async (req: Request, res: Response, next: NextFunction) => {
  //permit check for basic credentials
  const permit = new Basic({});
  const credentials = permit.check(req);

  //check credentials against user collection
  if (credentials) {
    //get username from credentials
    const [ username ] = credentials;

    // Fetch user
    const user = await userDao.getOne(username);

    // check if user is admin
    if (!user || !user.admin){
      return res.status(UNAUTHORIZED).json({
        error: unauthorizedError,
      });
    }
    next();
  }
});

// routes that require admin (assumes user has already logged in)
router.use('/users', UserRouter);

// Export the base-router
export default router;
