import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Sheet {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  data: string;
}
