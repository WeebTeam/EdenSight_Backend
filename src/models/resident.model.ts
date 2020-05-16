import { prop, getModelForClass } from '@typegoose/typegoose';
import * as mongoose from 'mongoose';

export interface IResident {
  id: number;
  name: string;
  room: string;
  enrollDate: Date;
}

class Resident implements IResident {
  @prop({ required: true, unique:true })
  public id: number;

  @prop()
  public name: string;

  @prop()
  public room: string;

  @prop()
  enrollDate: Date;

  constructor(id: number, name?: string, room?: string, enrollDate?: Date) {
    this.id = id;
    this.name = name || '';
    this.room = room || '';
    this.enrollDate = enrollDate || new Date();
  }
}

export const ResidentModel = getModelForClass(Resident); // UserModel is a regular Mongoose Model with correct types
export default Resident;
