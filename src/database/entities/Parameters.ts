import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BookParameter } from "./BookParameter";

@Entity()
export class Parameter extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255 })
  parameter: string;

  @Column({ type: "varchar", length: 255 })
  parameterDescription: string;

  @Column({ type: "int" })
  parameterOrder: number;

  @OneToMany(() => BookParameter, (bookParameter) => bookParameter.parameter)
  values: BookParameter[];
}
