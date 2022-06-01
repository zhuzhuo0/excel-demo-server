import {
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  OneToMany,
  JoinColumn,
} from "typeorm";
import VersionDO from "./version";

@Entity()
export default class Excel {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => VersionDO)
  @JoinColumn()
  version: VersionDO;

  @OneToMany(() => VersionDO, (version) => version.excel)
  versions: VersionDO[];
}
