import User, { UserModel } from '@models/user.model';

class UserDao {

  /**
  * @param uname
  */
  public async getOne(uname: string): Promise<User | null> {
    try {
        return UserModel.findOne({ uname: uname });
      } catch (err) {
        throw err;
    }
  }


  /**
  *
  */
  public async getAll(): Promise<User[]> {
    try {
        return UserModel.find();
    } catch (err) {
        throw err;
    }
  }


  /**
  *
  * @param user
  */
  public async add(user: User): Promise<void> {
      try {
          await UserModel.create(user);
      } catch (err) {
          throw err;
      }
  }


  /**
  *
  * @param user
  */
  public async update(user: User): Promise<void> {
    try {
      UserModel.updateOne(
        { uname: user.uname },
        { name: user.name, pwdHash: user.pwdHash, admin: user.admin }
      )
    } catch (err) {
        throw err;
    }
  }


  /**
  *
  * @param uname
  */
  public async delete(uname: string): Promise<void> {
    try {
        await UserModel.deleteOne({uname: uname});
    } catch (err) {
        throw err;
    }
  }
}

export default UserDao;
