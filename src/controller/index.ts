import { Controller,Get,Route} from "tsoa";

interface Excel {
  id: number;
  name: string;
  version: number;
}

@Route('/excels')
export class RouteController extends Controller {

  @Get()
  public getExcels(): Promise<Excel[]> {
    let excels: Excel[] = [{ id: 1, name: "doc01", version: 1 }];
    return Promise.resolve(excels);
  }

  @Get("{userId}")
  public getExcel(id: number): Promise<Excel> {
    return Promise.resolve({ id: 1, name: "doc01", version: 1 });
  }
}
