import { dataSource } from "../../app-data-source";
import { ExcelEntity } from "../../entity/excel";
import { Repository } from "typeorm";

interface IExcelDAO {
  getList(): Promise<ExcelEntity[]>;
}

export class ExcelDAO implements IExcelDAO {
  private repo: Repository<ExcelEntity>;

  constructor() {
    this.repo = dataSource.getRepository(ExcelEntity);
  }

  getList(): Promise<ExcelEntity[]> {
    return this.repo.find({});
  }
}
