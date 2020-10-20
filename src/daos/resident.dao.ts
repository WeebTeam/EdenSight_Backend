import Resident, { ResidentModel } from '@models/resident.model';

class ResidentDao {

  public async getOne(id: number): Promise<Resident | null> {
    try {
        const resident = await ResidentModel.findOne({ _id: id }).populate("caretaker", "name");
        return resident;
      } catch (err) {
        throw err;
    }
  }

  public async getAll(): Promise<Resident[]> {
    try {
        return await ResidentModel.find().populate("caretaker", "name");
    } catch (err) {
        throw err;
    }
  }

  public async getList(): Promise<Resident[]> {
    try {
        return await ResidentModel.find().select('name caretaker room').populate("caretaker", "name");
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
        { _id: id },
        updateParams
      );

      return await ResidentModel.findOne({ _id :id }).populate("caretaker", "name");
    } catch (err) {
        throw err;
    }
  }


  public async delete(id: number): Promise<void> {
    try {
        await ResidentModel.deleteOne({ _id: id });
    } catch (err) {
        throw err;
    }
  }
}

export default ResidentDao;
