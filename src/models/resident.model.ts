import { plugin, prop, getModelForClass, Ref } from '@typegoose/typegoose';
import { AutoIncrementID } from '@typegoose/auto-increment';
import User from '@models/user.model';
import EventLog from '@models/eventlog.model';
import * as mongoose from 'mongoose';

export interface IResident {
  _id: number;
  status: string;
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

  @prop({ ref: 'User', type: mongoose.Schema.Types.Number, default: null })
  public caretaker: Ref<User>;

  @prop({ default: '-' })
  public room: string;

  @prop({ default: Date.now() })
  enrollDate: Date;

  @prop({ default: '' })
  public gender: string;

  @prop({ default: '' })
  public dob: string;

  @prop({ default: '' })
  public ic: string;

  @prop({ default: '' })
  public nationality: string;

  @prop({ default: -1 })
  public weight: number;

  @prop({ default: -1 })
  public height: number;

  @prop({ default: '' })
  public bloodType: string;

  @prop({ default: '' })
  public pNum: string;

  @prop({ default: '' })
  public emergencyPNum: string;

  @prop({ default: '' })
  public guardian: string;

  @prop({ default: '' })
  public streetAdd: string;

  @prop({ default: '' })
  public streetAdd2: string;

  @prop({ default: '' })
  public city: string;

  @prop({ default: '' })
  public state: string;

  @prop({ default: '' })
  public postal: string;

  @prop({ default: [] })
  public healthConditions: string[];

  @prop({ default: [] })
  public allergies: string[];

  @prop({ default: [] })
  public medication: string[];

  @prop({ default: '' })
  public deviceAddr: string;

  @prop({ ref: 'EventLog', default: [] })
  public eventLogs: Ref<EventLog>[];

  constructor(id: number, name: string, status?: string, caretaker?: number, room?: string, enrollDate?: Date, gender?: string, dob?:string, ic?:string, nationality?:string,
  weight?:number, height?:number, bloodType?:string, pNum?:string, emergencyPNum?:string, guardian?:string, streetAdd?:string, streetAdd2?:string, city?:string, state?:string,
  postal?:string, healthConditions?:string[], allergies?:string[], medication?:string[], deviceAddr?:string) {
    this._id = id;
    this.name = name;
    this.status = status || '';
    this.caretaker = caretaker || -1;
    this.room = room || '';
    this.enrollDate = enrollDate || new Date();
    this.gender = gender || '';
    this.dob = dob || '';
    this.ic = ic || '';
    this.nationality = nationality || '';
    this.weight = weight || -1;
    this.height = height || -1;
    this.bloodType = bloodType || '';
    this.pNum = pNum || '';
    this.emergencyPNum = emergencyPNum || '';
    this.guardian = guardian || '';
    this.streetAdd = streetAdd || '';
    this.streetAdd2 = streetAdd2 || '';
    this.city = city || '';
    this.state = state || '';
    this.postal = postal || '';
    this.healthConditions = healthConditions || [];
    this.allergies = allergies || [];
    this.medication = medication || [];
    this.deviceAddr = deviceAddr || '';
    this.eventLogs = [];
  }
}

export const ResidentModel = getModelForClass(Resident); // UserModel is a regular Mongoose Model with correct types
export default Resident;
