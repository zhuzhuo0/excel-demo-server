import ExcelBO from "../module/excel/excel";
import { ExcelDAO, SheetDAO, VersionDAO } from "../dao";
import { SheetDO } from "../entity";

export type createExcelParams = {
  excelName: string;
  sheets: Array<{ name: string; data: string }>;
};

interface IExcelService {
  getExcels(): Promise<ExcelBO[]>;
  createExcel(params: createExcelParams): Promise<ExcelBO>;
}

export class ExcelService implements IExcelService {
  async getExcels(): Promise<ExcelBO[]> {
    const excelDao = new ExcelDAO();
    let excels = await excelDao.getList();
    return excels.map((i) => new ExcelBO(i));
  }

  async createExcel(params: createExcelParams): Promise<ExcelBO> {
    const sheetDao = new SheetDAO();
    let sheets: Array<SheetDO> = [];
    for (const { name, data } of params.sheets) {
      let sheet = await sheetDao.create(name, data);
      sheets.push(sheet);
    }
    const versionDao = new VersionDAO();
    let version = await versionDao.create(params.excelName, sheets);
    let excelDao = new ExcelDAO();
    let excel = await excelDao.create(version);
    return new ExcelBO(excel);
  }
}
