import { Repository } from "typeorm";
import { dataSource } from "../app-data-source";
import { VersionEntity } from "../entity/version";

interface IVersionDAO {
  getById(id: number): Promise<VersionEntity | null>;
}

export default class VersionDAO implements IVersionDAO {
  private repo: Repository<VersionEntity>;

  constructor() {
    this.repo = dataSource.getRepository(VersionEntity);
  }

  getById(id: number): Promise<VersionEntity | null> {
    return this.repo.findOneBy({ id });
  }
}
