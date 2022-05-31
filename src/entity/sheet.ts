import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SheetEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  data: string;
}
