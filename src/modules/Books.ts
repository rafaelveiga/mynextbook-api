import { Book } from "@entities/Book";

export async function bookResolver() {
  const data = await Book.find({
    relations: ["bookDescriptors"],
  });

  return data;
}
