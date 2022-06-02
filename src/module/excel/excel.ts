import ExcelDO from "../../entity/excel";
import SheetDO from "../../entity/sheet";
import SheetBO from "./sheet";

interface IExcelBO {
  id: number;
  name: string;
  versionId: number;
  sheets: SheetBO[];
}

class ExcelBO implements IExcelBO {
  sheets: SheetBO[];
  name: string;
  id: number;
  versionId: number;
  constructor(excelProps: ExcelDO) {
    this.id = excelProps.id;
    this.name = excelProps.version.name;
    this.versionId = excelProps.version.id;
    this.sheets = excelProps.version.sheets.map((i) => new SheetBO(i));
  }
}

export default ExcelBO;
