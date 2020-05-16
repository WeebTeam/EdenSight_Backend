import Resident, { ResidentModel } from '@models/resident.model';

class ResidentDao {

  /**
  * @param id
  */
  public async getOne(id: number): Promise<Resident | null> {
    try {
        return ResidentModel.findOne({ id: id });
      } catch (err) {
        throw err;
    }
  }

  /**
  *
  */
  public async getAll(): Promise<Resident[]> {
    try {
        return ResidentModel.find();
    } catch (err) {
        throw err;
    }
  }


  /**
  *
  * @param resident
  */
  public async add(resident: Resident): Promise<void> {
      try {
          await ResidentModel.create(resident);
      } catch (err) {
          throw err;
      }
  }


  /**
  *
  * @param resident
  */
  public async update(resident: Resident): Promise<void> {
    try {
      ResidentModel.updateOne(
        { uname: resident.id },
        { name: resident.name, room: resident.room, enrollDate: resident.enrollDate }
      )
    } catch (err) {
        throw err;
    }
  }


  /**
  *
  * @param id
  */
  public async delete(id: number): Promise<void> {
    try {
        await ResidentModel.deleteOne({ id: id });
    } catch (err) {
        throw err;
    }
  }
}

export default ResidentDao;
