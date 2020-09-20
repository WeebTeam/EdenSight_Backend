import { prop, getModelForClass } from '@typegoose/typegoose';
import * as mongoose from 'mongoose';

export interface IVitalSigns {
  dateTime: Date;
  macAddr: string;
  heartRate: number;
  spO2: number;
}

class VitalSigns implements IVitalSigns {

  @prop({ required: true })
  public dateTime: Date;

  @prop({ required: true })
  public macAddr: string;

  @prop()
  public heartRate: number;

  @prop()
  public spO2: number;

  constructor(dateTime: Date, macAddr: string, heartRate?: number, spO2?: number) {
    this.dateTime = dateTime;
    this.macAddr = macAddr;
    this.heartRate = heartRate || -1;
    this.spO2 = spO2 || -1;
  }
}

export const VitalSignsModel = getModelForClass(VitalSigns); // VitalSignsModel is a regular Mongoose Model with correct types
export default VitalSigns;
