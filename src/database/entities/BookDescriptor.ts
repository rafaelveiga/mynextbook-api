import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Book } from "./Book";
import { DescriptorType } from "./DescriptorType";

@Entity()
export class BookDescriptor extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Book, (book) => book.bookDescriptors)
  book: Book;

  @ManyToOne(() => DescriptorType, (descriptorType) => descriptorType.values)
  descriptor: DescriptorType;

  @Column({ type: "varchar", length: 255 })
  descriptorValue: string;
}
