import { ExcelEntity } from "../../entity/excel";
import { Version } from "../../entity/version";

export class ExcelBO {
  version: Version | undefined;
  name: string | undefined;
  versionId: number | undefined;
  id: number | undefined;

  constructor(entity: ExcelEntity) {
    const { versionId, versions, id } = entity;
    console.log(entity)
    this.version = versions.find((i) => i.id === versionId);
    this.name = this.version?.name;
    this.versionId = versionId;
    this.id = id;
  }
}
