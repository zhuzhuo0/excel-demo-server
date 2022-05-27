import { Controller, Get, Route } from "tsoa";

interface Excel {
  id: number;
  name: string;
  version: number;
}

@Route("excels")
export class RouteController extends Controller {
  @Get()
  public async getExcels(): Promise<Excel[]> {
    return [{ id: 1, name: "haha", version: 2 }];
  }
}
