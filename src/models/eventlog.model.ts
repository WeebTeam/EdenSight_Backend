import { Ref, prop, getModelForClass } from '@typegoose/typegoose';
import * as mongoose from 'mongoose';
import Resident from '@models/resident.model';

export interface IEventLog {
  dateTime: Date;
  type: string;
  name: string;
  desc: string;
  vitalSigns: string;
}

class EventLog implements IEventLog {
  @prop()
  public dateTime: Date;

  @prop({ ref: 'Resident', type: mongoose.Schema.Types.Number })
  public resident: Ref<Resident>;

  @prop()
  public type: string;

  @prop()
  public name: string;

  @prop()
  public desc: string;

  @prop()
  public vitalSigns: string;

  constructor(dateTime: Date, type: string, name: string, desc?: string, vitalSigns?: string) {
    this.dateTime = dateTime;
    this.type = type;
    this.name = name;
    this.desc = desc || '';
    this.vitalSigns = vitalSigns || '-';
  }
}

export const EventLogModel = getModelForClass(EventLog); // EventLogModel is a regular Mongoose Model with correct types
export default EventLog;
