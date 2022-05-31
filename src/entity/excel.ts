import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Version } from "./version";

@Entity()
export class ExcelEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  versionId:number;

  @OneToMany(() => Version, (version) => version.excel)
  versions: Version[];
}
