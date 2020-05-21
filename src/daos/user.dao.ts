import User, { UserModel } from '@models/user.model';

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

  public async add(user: User): Promise<User | null> {
      try {
          return await UserModel.create(user);
      } catch (err) {
          throw err;
      }
  }

  public async update(uname: string, updateParams: any): Promise<User | null> {
    try {
      await UserModel.updateOne(
        { uname: uname },
        updateParams
      );

      return await UserModel.findOne({ uname :uname });
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
