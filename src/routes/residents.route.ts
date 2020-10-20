import { Router, Request, Response, NextFunction } from 'express';
import { UNAUTHORIZED, BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';

import ResidentDao from '@daos/resident.dao';
import { paramMissingError, loginFailedError, unauthorizedError } from '@shared/constants';

import bcrypt from 'bcrypt';
import { Bearer, Basic } from 'permit';

// Init shared
const router = Router();
const residentDao = new ResidentDao();

// get all (full)
// try not to use unless needed
// residents/all
router.get('/all', async (req: Request, res: Response) => {
  const residents = await residentDao.getAll();

  return res.status(OK).json(residents);
});

// get list of all resident (brief)
// residents/list
router.get('/list', async (req: Request, res: Response) => {
  const residents = await residentDao.getList();

  return res.status(OK).json(residents);
});

// get one (detailed?)
// residents/:id
router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params as ParamsDictionary;
  console.log("id: "+id)
  const resident = await residentDao.getOne(Number(id));

  return res.status(OK).json(resident);
});

// residents/add
router.post('/add', async (req: Request, res: Response) => {
  const resident = req.body;
  if (!resident) {
    return res.status(BAD_REQUEST).json({
      error: paramMissingError,
    });
  }
  //create the resident
  const createdResident = await residentDao.add(resident);

  //return created resident
  return res.status(CREATED).json(createdResident);
});

// residents/update/:id
router.put('/update/:id', async (req: Request, res: Response) => {
  const { id } = req.params as ParamsDictionary;
  const resident = req.body;
  if (!resident || !id) {
    return res.status(BAD_REQUEST).json({
      error: paramMissingError,
    });
  }

  //update the resident and get the updated resident
  const updatedResident = await residentDao.update(Number(id), resident);
  //return the updated resident
  return res.status(OK).json(updatedResident);
});

// residents/delete/:id
router.delete('/delete/:id', async (req: Request, res: Response) => {
  const { id } = req.params as ParamsDictionary;
  await residentDao.delete(Number(id));
  return res.status(OK).end();
});

export default router;
