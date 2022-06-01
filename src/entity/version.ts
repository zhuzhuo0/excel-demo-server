import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from "typeorm";
import ExcelDO from "./excel";
import SheetDO from "./sheet";

@Entity()
export default class Version {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(() => ExcelDO, (excel) => excel.versions)
  excel: ExcelDO;

  @ManyToMany(() => SheetDO)
  @JoinTable()
  sheets: SheetDO[];
}
