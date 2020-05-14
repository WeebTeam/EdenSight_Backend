import bcrypt from 'bcrypt';
import { Request, Response, Router } from 'express';
import { BAD_REQUEST, OK, UNAUTHORIZED } from 'http-status-codes';
import { noCredentialsError, paramMissingError, loginFailedError } from '@shared/constants';
import { Bearer, Basic } from 'permit';

import UserDao from '@daos/user/user.dao';

const router = Router();
const userDao = new UserDao();

/******************************************************************************
*                      Login User - "POST /auth/login"
******************************************************************************/

router.post('/login', async (req: Request, res: Response) => {

  //permit check for basic credentials
  const permit = new Basic({});
  const credentials = permit.check(req);

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

    //user authenticated, create and return bearer token

    return res.status(OK).end();
  }
  else {
    return res.status(BAD_REQUEST).json({
      error: noCredentialsError,
    });
  }
});


/******************************************************************************
*                      Logout - "GET /api/auth/logout"
******************************************************************************/

router.get('/logout', async (req: Request, res: Response) => {

  return res.status(OK).end();
});


/******************************************************************************
*                                 Export Router
******************************************************************************/

export default router;
