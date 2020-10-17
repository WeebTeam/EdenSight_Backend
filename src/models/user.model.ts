import { plugin, prop, getModelForClass } from '@typegoose/typegoose';
import { AutoIncrementID } from '@typegoose/auto-increment';
import * as mongoose from 'mongoose';

export interface IUser {
  _id: number;
  uname: string;
  name: string;
  pwdHash: string;
  role: string;
  pNum: string;
}

@plugin(AutoIncrementID, {} )
class User implements IUser {
  @prop()
  public _id: number;

  @prop({ required: true, unique:true })
  public uname: string;

  @prop()
  public name: string;

  @prop()
  public pwdHash: string;

  @prop()
  public role: string;

  @prop()
  public pNum: string;

  constructor(id: number, uname: string, name?: string, pwdHash?: string, role?: string, pNum?:string) {
    this._id = id;
    this.uname = uname;
    this.name = name || '';
    this.pwdHash = pwdHash || '';
    this.role = role || 'staff';
    this.pNum = pNum || '';
  }
}

export const UserModel = getModelForClass(User); // UserModel is a regular Mongoose Model with correct types
export default User;
