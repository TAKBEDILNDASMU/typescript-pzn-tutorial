import { Customer, CustomerType } from "../src/enum";

describe("enum", () => {
  it("should support enum ", () => {
    const customer: Customer = {
      id: 1,
      name: "Patrick",
      type: CustomerType.PLATINUM,
    };

    console.info(customer);
  });
});
