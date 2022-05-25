import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from "typeorm";
import { Version } from "./version";

@Entity()
export class Sheet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Version, (version) => version.sheets)
  version: Version;

  @Column()
  data: string;
}
