import { Controller, Get, Route, Post, Body } from "tsoa";
import { ExcelService, createExcelParams } from "../service/excel";

@Route("excels")
export class RouteController extends Controller {
  /**
   * 获取excel列表
   * @summary 获取excel列表
   */
  @Get()
  public async getExcels(): Promise<
    { id: number; name: string; version: number }[]
  > {
    const service = new ExcelService();
    let list = await service.getExcels();
    return list.map((i) => ({
      id: i.id,
      name: i.name,
      version: i.versionId,
    }));
  }

  /**
   * 创建excel
   * @summary 创建excel
   */
  @Post()
  public async createExcel(
    @Body() requestBody: createExcelParams
  ): Promise<{ id: number; name: string }> {
    const service = new ExcelService();
    let excel = await service.createExcel(requestBody);
    return { id: excel.id, name: excel.name };
  }
}
