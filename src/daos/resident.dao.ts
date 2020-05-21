import Resident, { ResidentModel } from '@models/resident.model';

class ResidentDao {

  public async getOne(id: number): Promise<Resident | null> {
    try {
        return await ResidentModel.findOne({ id: id });
      } catch (err) {
        throw err;
    }
  }

  public async getAll(): Promise<Resident[]> {
    try {
        return await ResidentModel.find();
    } catch (err) {
        throw err;
    }
  }

  public async add(resident: Resident): Promise<Resident | null> {
      try {
          return await ResidentModel.create(resident);
      } catch (err) {
          throw err;
      }
  }


  public async update(id: number, updateParams: any): Promise<Resident | null> {
    try {
      await ResidentModel.updateOne(
        { id: id },
        updateParams
      );

      return await ResidentModel.findOne({ id :id });
    } catch (err) {
        throw err;
    }
  }


  public async delete(id: number): Promise<void> {
    try {
        await ResidentModel.deleteOne({ id: id });
    } catch (err) {
        throw err;
    }
  }
}

export default ResidentDao;
