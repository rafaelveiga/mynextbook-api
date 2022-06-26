import { Book } from "@entities/Book";
import { MoreThanOrEqual } from "typeorm";

export async function bookResolver(args) {
  console.log(args.parameterPair[0].parameterId);
  const data = await Book.find({
    relations: ["bookDescriptors"],
    where: (qb) => {
      // TODO: Improve this query
      qb.where(
        "Book__bookDescriptors.parameterValue >= :paramVal AND Book__bookDescriptors.parameterId = :paramId",
        {
          paramVal: args.parameterPair[0].parameterValue,
          paramId: args.parameterPair[0].parameterId,
        }
      );
    },
  });

  return data;
}
