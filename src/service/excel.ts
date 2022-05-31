import { ExcelBO } from "../module/excel";
import { ExcelDAO } from "../module/excel/dao";

interface IExcelService {
  getExcels(): Promise<ExcelBO[]>;
}

export class ExcelService implements IExcelService {
  public async getExcels(): Promise<ExcelBO[]> {
    const dao = new ExcelDAO();
    let excels = await dao.getList();
    return excels.map((i) => new ExcelBO(i));
  }
}
