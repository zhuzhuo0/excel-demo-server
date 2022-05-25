import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";
import { Version } from "./version";

@Entity()
export class Excel {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Version, (version) => version.excel)
  versions: Version[];
}
