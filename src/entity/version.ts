import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import { ExcelEntity } from "./excel";
import { SheetEntity } from "./sheet";

@Entity()
export class Version {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => ExcelEntity, (excel) => excel.versions)
  excel: ExcelEntity;

  @ManyToMany(() => SheetEntity)
  @JoinTable()
  sheets: SheetEntity[];
}
