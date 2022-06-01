import { Controller, Get, Route } from "tsoa";
import { ExcelService } from "../service/excel";

interface ExcelDTO {
  id: number;
  name: string;
  version: number;
}

@Route("excels")
export class RouteController extends Controller {
  /**
   * 获取excel列表
   * @summary 获取excel列表
   */
  @Get()
  public async getExcels(): Promise<ExcelDTO[]> {
    const service = new ExcelService();
    let list = await service.getExcels();
    return list.map((i) => ({
      id: i.id,
      name: i.name,
      version: i.versionId,
    }));
  }
}
