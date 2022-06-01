import { dataSource } from "../app-data-source";
import ExcelDO from "../entity/excel";
import { Repository } from "typeorm";

interface IExcelDAO {
  getList(): Promise<ExcelDO[]>;
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
}
