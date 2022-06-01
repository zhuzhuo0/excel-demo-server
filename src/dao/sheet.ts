import { Repository, In } from "typeorm";
import { dataSource } from "../app-data-source";
import { SheetEntity } from "../entity/sheet";

interface ISheetDAO {
  getById(id: number): Promise<SheetEntity | null>;
}

export default class SheetDAO implements ISheetDAO {
  private repo: Repository<SheetEntity>;

  constructor() {
    this.repo = dataSource.getRepository(SheetEntity);
  }

  getById(id: number): Promise<SheetEntity | null> {
    return this.repo.findOneBy({ id });
  }

  getBulkByIds(ids: Array<number>): Promise<SheetEntity[]> {
    return this.repo.findBy({
      id: In(ids),
    });
  }
}
