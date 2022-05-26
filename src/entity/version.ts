import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
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

  @ManyToMany(() => Sheet)
  @JoinTable()
  sheets: Sheet[];
}
