import User, { UserModel } from '@models/user.model';
import bcrypt from 'bcrypt';
import { pwdSaltRounds } from '@shared/constants';

class UserDao {

  public async getOneById(id: number): Promise<User | null> {
    try {
        return await UserModel.findOne({ _id: id });
      } catch (err) {
        throw err;
    }
  }

  public async getOneByUname(uname: string): Promise<User | null> {
    try {
        return await UserModel.findOne({ uname: uname });
      } catch (err) {
        throw err;
    }
  }

  public async getAll(): Promise<User[]> {
    try {
        return await UserModel.find();
    } catch (err) {
        throw err;
    }
  }

  public async getList(): Promise<User[]> {
    try {
        return await UserModel.find().select('uname name role');
    } catch (err) {
        throw err;
    }
  }

  public async add(user: any): Promise<User | null> {
      try {
        user.pwdHash = bcrypt.hashSync(user.passwd, pwdSaltRounds);;
        return await UserModel.create(user);
      } catch (err) {
          throw err;
      }
  }

  public async update(id: number, updateParams: any): Promise<User | null> {
    try {
      if (updateParams.passwd != ""){
        updateParams.pwdHash = bcrypt.hashSync(updateParams.passwd, pwdSaltRounds);
      }

      await UserModel.updateOne(
          { _id: id },
          updateParams
        );

      return await UserModel.findOne({ id: id });
    } catch (err) {
        throw err;
    }
  }

  public async delete(id: number): Promise<void> {
    try {
        await UserModel.deleteOne({ _id: id });
    } catch (err) {
        throw err;
    }
  }
}

export default UserDao;
