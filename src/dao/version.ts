import { Repository } from "typeorm";
import { dataSource } from "../app-data-source";
import { SheetDO, VersionDO } from "../entity";

interface IVersionDAO {
  getById(id: number): Promise<VersionDO | null>;
  create(name: string, sheets: SheetDO[]): Promise<VersionDO>;
}

export default class VersionDAO implements IVersionDAO {
  private repo: Repository<VersionDO>;

  constructor() {
    this.repo = dataSource.getRepository(VersionDO);
  }

  getById(id: number): Promise<VersionDO | null> {
    return this.repo.findOneBy({ id });
  }

  create(name: string, sheets: SheetDO[]): Promise<VersionDO> {
    let version = this.repo.create({ name, sheets });
    return this.repo.save(version);
  }
}
