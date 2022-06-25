import { Parameter } from "@entities/Parameters";

export async function parameterResolver() {
  const data = await Parameter.find({
    order: {
      parameterOrder: "ASC",
    },
  });
  return data;
}
