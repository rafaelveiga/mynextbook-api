import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BookDescriptor } from "./BookDescriptor";

@Entity()
export class DescriptorType extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255 })
  descriptor: string;

  @Column({ type: "varchar", length: 255 })
  descriptorDescription: string;

  @OneToMany(
    () => BookDescriptor,
    (bookDescriptor) => bookDescriptor.descriptor
  )
  values: BookDescriptor[];
}
