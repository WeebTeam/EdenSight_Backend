import { prop, getModelForClass } from '@typegoose/typegoose';
import * as mongoose from 'mongoose';

export interface IResident {
  id: number;
  status: string;
  caretaker: string;
  name: string;
  room: string;
  enrollDate: Date;
}

class Resident implements IResident {
  @prop({ required: true, unique:true })
  public id: number;

  @prop({ required: true })
  public name: string;

  @prop()
  public status: string;

  @prop()
  public caretaker: string;

  @prop()
  public room: string;

  @prop({ default: Date.now() })
  enrollDate: Date;

  constructor(id: number, name: string, status?: string, caretaker?: string, room?: string, enrollDate?: Date) {
    this.id = id;
    this.name = name;
    this.status = status || '';
    this.caretaker = caretaker || '';
    this.room = room || '';
    this.enrollDate = enrollDate || new Date();
  }
}

export const ResidentModel = getModelForClass(Resident); // UserModel is a regular Mongoose Model with correct types
export default Resident;
