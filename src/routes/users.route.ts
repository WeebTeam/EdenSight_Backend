import { Router, Request, Response, NextFunction } from 'express';
import { UNAUTHORIZED, BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';

import UserDao from '@daos/user.dao';
import { paramMissingError, loginFailedError, unauthorizedError } from '@shared/constants';

import bcrypt from 'bcrypt';
import { Bearer, Basic } from 'permit';

// Init shared
const router = Router();
const userDao = new UserDao();

/******************************************************************************
*                      Get All Users - "GET /api/users/all"
******************************************************************************/

router.get('/all', async (req: Request, res: Response) => {
  const users = await userDao.getAll();

  return res.status(OK).json({users});
});


/******************************************************************************
*                       Add One - "POST /api/users/add"
******************************************************************************/

router.post('/add', async (req: Request, res: Response) => {
  const { user } = req.body;
  if (!user) {
    return res.status(BAD_REQUEST).json({
      error: paramMissingError,
    });
  }
  await userDao.add(user);
  return res.status(CREATED).end();
});


/******************************************************************************
*                       Update - "PUT /api/users/update"
******************************************************************************/

router.put('/update', async (req: Request, res: Response) => {
  const { user } = req.body;
  if (!user) {
    return res.status(BAD_REQUEST).json({
      error: paramMissingError,
    });
  }
  user.id = Number(user.id);
  await userDao.update(user);
  return res.status(OK).end();
});


/******************************************************************************
*                    Delete - "DELETE /api/users/delete/:uname"
******************************************************************************/

router.delete('/delete/:uname', async (req: Request, res: Response) => {
  const { uname } = req.params as ParamsDictionary;
  await userDao.delete(uname);
  return res.status(OK).end();
});


/******************************************************************************
*                                     Export
******************************************************************************/

export default router;
