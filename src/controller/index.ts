import { Controller, Get, Path, Route } from "tsoa";

/**
 * excel文档
 */
interface Excel {
  id: number;
  name: string;
  version: Version;
  versions: Version[];
  sheets: Sheet[];
}

/**
 * 文档版本
 */
interface Version {
  id: number;
  author: string;
  excelName: string;
  sheets: Sheet[];
}

/**
 * sheet工作簿
 */
interface Sheet {
  id: number;
  name: string;
  data: string;
}

@Route("excels")
export class RouteController extends Controller {
  /**
   * 获取excel列表
   * @summary 获取excel列表
   */
  @Get()
  public async getExcels(): Promise<Excel[]> {
    return [{ id: 1, name: "haha", version: 2, history: [] }];
  }

  /**
   * 通过excelid检索文档信息
   * @param excelId excel唯一标示
   * @summary 获取文档信息
   */
  @Get("{excelId}")
  public async getExcel(@Path() excelId: number): Promise<Excel> {
    return { id: 1, name: "haha", version: 2, history: [] };
  }

  /**
   * 根据excelid+version获取版本信息
   * @returns
   */
  @Get("{excelId}/{version}")
  public async getExcelByVersion() {
    return;
  }

  /**
   * 获取sheet数据
   */
  @Get("sheet/{sheetId}")
  public async getSheet(@Path() sheetId: number) {
    return;
  }
}
