import { Router, Request, Response, NextFunction } from 'express';
import { UNAUTHORIZED, BAD_REQUEST, CREATED, OK } from 'http-status-codes';
import { ParamsDictionary } from 'express-serve-static-core';

import VitalSignsDao from '@daos/vitalsigns.dao';
import { paramMissingError, loginFailedError, unauthorizedError } from '@shared/constants';

// Init shared
const router = Router();
const vitalsignsDao = new VitalSignsDao();

// get one
// vitalsigns/:uname
router.get('/:macAddr/:count', async (req: Request, res: Response) => {
  const { macAddr } = req.params as ParamsDictionary;
  const { count } = req.params as ParamsDictionary;
  const vitalsigns = await vitalsignsDao.getLatest(macAddr, Number(count));

  return res.status(OK).json(vitalsigns);
});

//add vitalsigns
// vitalsigns/add
router.post('/add', async (req: Request, res: Response) => {
  const vitalsigns = req.body;
  vitalsigns.dateTime = Date();
  if (!vitalsigns) {
    return res.status(BAD_REQUEST).json({
      error: paramMissingError,
    });
  }
  await vitalsignsDao.add(vitalsigns);
  return res.status(CREATED).json(vitalsigns);
});

/******************************************************************************
*                                     Export
******************************************************************************/

export default router;
