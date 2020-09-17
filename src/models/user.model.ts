import { prop, getModelForClass } from '@typegoose/typegoose';
import * as mongoose from 'mongoose';

export interface IUser {
  uname: string;
  name: string;
  pwdHash: string;
  admin: boolean;
  pNum: string;
}

class User implements IUser {
  @prop({ required: true, unique:true })
  public uname: string;

  @prop()
  public name: string;

  @prop()
  public pwdHash: string;

  @prop()
  public admin: boolean;

  @prop()
  public pNum: string;

  constructor(uname: string, name?: string, pwdHash?: string, admin?: boolean, pNum?:string) {
    this.uname = uname;
    this.name = name || '';
    this.pwdHash = pwdHash || '';
    this.admin = admin || false;
    this.pNum = pNum || '';
  }
}

export const UserModel = getModelForClass(User); // UserModel is a regular Mongoose Model with correct types
export default User;
