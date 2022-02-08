import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Book } from "./Book";
import { Parameter } from "./Parameters";

@Entity()
export class BookParameter extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Book, (book) => book.bookDescriptors)
  book: Book;

  @ManyToOne(() => Parameter, (parameter) => parameter.values)
  parameter: Parameter;

  @Column({ type: "varchar", length: 255 })
  parameterValue: string;
}
