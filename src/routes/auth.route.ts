import bcrypt from 'bcrypt';
import { Request, Response, Router } from 'express';
import { BAD_REQUEST, OK, UNAUTHORIZED } from 'http-status-codes';
import { paramMissingError, loginFailedErr } from '@shared/constants';

import UserDao from '@daos/user/user.dao';

const router = Router();
const userDao = new UserDao();

/******************************************************************************
 *                      Login User - "POST /auth/login"
 ******************************************************************************/

router.post('/login', async (req: Request, res: Response) => {
    // Check uname and password present
    const { uname, password } = req.body;
    console.log(req.body);
    if (!(uname && password)) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    // Fetch user
    const user = await userDao.getOne(uname);
    if (!user) {
        return res.status(UNAUTHORIZED).json({
            error: loginFailedErr,
        });
    }
    // Check password
    const pwdPassed = await bcrypt.compare(password, user.pwdHash);
    if (!pwdPassed) {
        return res.status(UNAUTHORIZED).json({
            error: loginFailedErr,
        });
    }
    return res.status(OK).end();
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
