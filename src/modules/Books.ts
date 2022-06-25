import { Book } from "@entities/Book";

export async function bookResolver() {
  const data = await Book.find();

  return data;
}
