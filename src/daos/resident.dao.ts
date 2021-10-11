import Resident, { ResidentModel } from '@models/resident.model';
import EventLog, { EventLogModel } from '@models/eventlog.model';

class ResidentDao {

  public async getOne(id: number): Promise<Resident | null> {
    try {
      const resident = await ResidentModel.findOne({ _id: id }).populate("caretaker", "name").populate("eventLogs", "-_id -resident");
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

  public async getList(staffId?: number): Promise<Resident[]> {
    try {
      if (staffId) return await ResidentModel.find({caretaker: staffId}).select('name caretaker room').populate("caretaker", "name");
      else return await ResidentModel.find().select('name caretaker room').populate("caretaker", "name");
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

      return await ResidentModel.findOne({ _id: id }).populate("caretaker", "name").populate("eventLogs");
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

  public async addEventLog(id: number, eventLog: EventLog): Promise<void> {
    try {
      let event = await EventLogModel.create(eventLog);

      await ResidentModel.updateOne(
        { _id: id },
        {$push: {"eventLogs": event._id}}
      );
    } catch (err) {
      throw err;
    }
  }
}

export default ResidentDao;
