import { dataSource } from "../app-data-source";
import { Repository } from "typeorm";
import { ExcelDO, VersionDO } from "../entity";

interface IExcelDAO {
  getList(): Promise<ExcelDO[]>;
  create(version: VersionDO): Promise<ExcelDO>;
}

export default class ExcelDAO implements IExcelDAO {
  private repo: Repository<ExcelDO>;

  constructor() {
    this.repo = dataSource.getRepository(ExcelDO);
  }

  getList(): Promise<ExcelDO[]> {
    return this.repo.find({
      relations: {
        version: true,
      },
    });
  }

  create(version: VersionDO): Promise<ExcelDO> {
    let excel = this.repo.create({ version, versions: [version] });
    return this.repo.save(excel);
  }
}
