import {
  BaseEntity,
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BookDescriptor } from "./BookDescriptor";

@Entity()
export class Book extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 255 })
  title: string;

  @Column({ type: "varchar", length: 255 })
  isbn: string;

  @Column({ type: "varchar", length: 255 })
  author: string;

  @OneToMany(
    () => BookDescriptor,
    (bookDescriptor) => bookDescriptor.descriptor
  )
  bookDescriptors: BookDescriptor[];
}
