import User, { UserModel } from '@models/user.model';
import bcrypt from 'bcrypt';
import { pwdSaltRounds } from '@shared/constants';

class UserDao {

  public async getOne(uname: string): Promise<User | null> {
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

  public async add(user: any): Promise<User | null> {
      try {
        user.pwdHash = bcrypt.hashSync(user.passwd, pwdSaltRounds);;
        return await UserModel.create(user);
      } catch (err) {
          throw err;
      }
  }

  public async update(uname: string, updateParams: any): Promise<User | null> {
    try {
      if (updateParams.passwd != ""){
        updateParams.pwdHash = bcrypt.hashSync(updateParams.passwd, pwdSaltRounds);
      }

      await UserModel.updateOne(
          { uname: uname },
          updateParams
        );

      return await UserModel.findOne({ uname: uname });
    } catch (err) {
        throw err;
    }
  }

  public async delete(uname: string): Promise<void> {
    try {
        await UserModel.deleteOne({ uname: uname });
    } catch (err) {
        throw err;
    }
  }
}

export default UserDao;
