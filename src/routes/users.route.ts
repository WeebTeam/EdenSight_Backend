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

// get all
// residents/all
router.get('/all', async (req: Request, res: Response) => {
  const users = await userDao.getAll();

  return res.status(OK).json({ user: users });
});

// get one
// users/:uname
router.get('/:uname', async (req: Request, res: Response) => {
  const { uname } = req.params as ParamsDictionary;
  const user = await userDao.getOne(uname);

  return res.status(OK).json({ user: user });
});

//add user
// residents/add
router.post('/add', async (req: Request, res: Response) => {
  const { user } = req.body;
  if (!user) {
    return res.status(BAD_REQUEST).json({
      error: paramMissingError,
    });
  }
  await userDao.add(user);
  return res.status(CREATED).json({ user: user });
});

//update user
// residents/update/:uname
router.put('/update/:uname', async (req: Request, res: Response) => {
  const { uname } = req.params as ParamsDictionary;
  const { user } = req.body;
  if (!user || !uname) {
    return res.status(BAD_REQUEST).json({
      error: paramMissingError,
    });
  }
  const updatedUser = await userDao.update(uname, user);
  return res.status(OK).json({ user: updatedUser });
});

// residents/delete/:uname
router.delete('/delete/:uname', async (req: Request, res: Response) => {
  const { uname } = req.params as ParamsDictionary;
  await userDao.delete(uname);
  return res.status(OK).end();
});


/******************************************************************************
*                                     Export
******************************************************************************/

export default router;
