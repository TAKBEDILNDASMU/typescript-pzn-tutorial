import { Category, Product } from "../src/type-alias";

describe("Alias Type", () => {
  it("should support alias type", () => {
    const category: Category = {
      id: "1",
      name: "Ship",
    };

    const product: Product = {
      id: "1",
      name: "Boat car",
      price: 200,
      category: category,
    };

    console.info(category);
    console.info(product);
  });
});
