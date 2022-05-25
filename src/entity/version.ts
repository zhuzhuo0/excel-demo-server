import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from "typeorm";
import { Excel } from "./excel";
import { Sheet } from "./sheet";

@Entity()
export class Version {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => Excel, (excel) => excel.versions)
  excel: Excel;

  @OneToMany(() => Sheet, (sheet) => sheet.version)
  sheets: Sheet[];
}
