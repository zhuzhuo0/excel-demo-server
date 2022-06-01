import ExcelBO from "../module/excel/excel";
import ExcelDAO from "../dao/excel";

interface IExcelService {
  getExcels(): Promise<ExcelBO[]>;
}

export class ExcelService implements IExcelService {
  public async getExcels(): Promise<ExcelBO[]> {
    const excelDao = new ExcelDAO();
    let excels = await excelDao.getList();
    return excels.map((i) => new ExcelBO(i, []));
  }
}
