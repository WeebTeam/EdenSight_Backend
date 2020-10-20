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
// users/all
router.get('/all', async (req: Request, res: Response) => {
  const users = await userDao.getAll();

  return res.status(OK).json(users);
});

// get list of all users (brief)
// users/list
router.get('/list', async (req: Request, res: Response) => {
  const users = await userDao.getList();

  return res.status(OK).json(users);
});

// get one
// users/:id
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params as ParamsDictionary;
  const user = await userDao.getOneById(Number(id));

  return res.status(OK).json(user);
});

//add user
// users/add
router.post('/add', async (req: Request, res: Response) => {
  const user = req.body;
  if (!user) {
    return res.status(BAD_REQUEST).json({
      error: paramMissingError,
    });
  }
  await userDao.add(user);
  return res.status(CREATED).json(user);
});

//update user
// users/update/:uname
router.put('/update/:id', async (req: Request, res: Response) => {
  const { id } = req.params as ParamsDictionary;
  const user = req.body;
  if (!user || !id) {
    return res.status(BAD_REQUEST).json({
      error: paramMissingError,
    });
  }
  const updatedUser = await userDao.update(Number(id), user);
  return res.status(OK).json(updatedUser);
});

// users/delete/:uname
router.delete('/delete/:id', async (req: Request, res: Response) => {
  const { id } = req.params as ParamsDictionary;
  await userDao.delete(Number(id));
  return res.status(OK).end();
});


/******************************************************************************
*                                     Export
******************************************************************************/

export default router;
