import VitalSigns, { VitalSignsModel } from '@models/vitalsigns.model';

class VitalSignsDao {

  public async getLatest(macAddr: string, count = 1): Promise<VitalSigns[] | null> {
    try {
        return await VitalSignsModel.find({ macAddr: macAddr }).sort({ dateTime: -1 }).limit(count);
      } catch (err) {
        throw err;
    }
  }

  public async add(vitalsigns: any): Promise<VitalSigns | null> {
      try {
        return await VitalSignsModel.create(vitalsigns);
      } catch (err) {
          throw err;
      }
  }
}

export default VitalSignsDao;
