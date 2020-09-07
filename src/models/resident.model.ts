import { plugin, prop, getModelForClass } from '@typegoose/typegoose';
import { AutoIncrementID } from '@typegoose/auto-increment';
import * as mongoose from 'mongoose';

export interface IResident {
  _id: number;
  status: string;
  caretaker: string;
  name: string;
  room: string;
  enrollDate: Date;
}
@plugin(AutoIncrementID, {} )
class Resident implements IResident {
  @prop()
  public _id: number;

  @prop({ required: true })
  public name: string;

  @prop({ default: 'Unknown' })
  public status: string;

  @prop({ default: '-' })
  public caretaker: string;

  @prop({ default: '-' })
  public room: string;

  @prop({ default: Date.now() })
  enrollDate: Date;

  constructor(id: number, name: string, status?: string, caretaker?: string, room?: string, enrollDate?: Date) {
    this._id = id;
    this.name = name;
    this.status = status || '';
    this.caretaker = caretaker || '';
    this.room = room || '';
    this.enrollDate = enrollDate || new Date();
  }
}

export const ResidentModel = getModelForClass(Resident); // UserModel is a regular Mongoose Model with correct types
export default Resident;
