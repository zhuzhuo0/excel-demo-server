import { Repository, In } from "typeorm";
import { dataSource } from "../app-data-source";
import { SheetDO } from "../entity";

interface ISheetDAO {
  getById(id: number): Promise<SheetDO | null>;
  getBulkByIds(ids: number[]): Promise<SheetDO[]>;
  create(name: string, data: string): Promise<SheetDO>;
}

export default class SheetDAO implements ISheetDAO {
  private repo: Repository<SheetDO>;

  constructor() {
    this.repo = dataSource.getRepository(SheetDO);
  }

  getById(id: number): Promise<SheetDO | null> {
    return this.repo.findOneBy({ id });
  }

  getBulkByIds(ids: Array<number>): Promise<SheetDO[]> {
    return this.repo.findBy({
      id: In(ids),
    });
  }

  create(name: string, data: string): Promise<SheetDO> {
    let sheet = this.repo.create({ name, data });
    return this.repo.save(sheet);
  }
}
