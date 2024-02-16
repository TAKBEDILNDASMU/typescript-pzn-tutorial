import { Employee, Manager } from "../src/employee";
import { Seller } from "../src/seller";

describe("Interface", () => {
  it("should support interface", () => {
    const seller: Seller = {
      id: 1,
      name: "Krusty Krab",
      address: "Bikini Bottom",
      nib: "213123123",
      npwp: "42389342",
    };

    console.info(seller);
  });

  it("should support function interface", () => {
    interface AddFunction {
      (value1: number, value2: number): number;
    }

    const add: AddFunction = (val1: number, val2: number): number => {
      return val1 + val2;
    };

    expect(add(2, 2)).toBe(4);
  });

  it("should support indexable interface", () => {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ["Patrick", "Star"];
    console.info(names[0]);
    console.info(names[1]);
  });

  it("should support indexable interface with non number index", () => {
    interface StringDictionary {
      [key: string]: string;
    }

    const dictionary: StringDictionary = {
      name: "Patrick",
      address: "Bikini Bottom",
    };

    expect(dictionary["name"]).toBe("Patrick");
    expect(dictionary["address"]).toBe("Bikini Bottom");
  });

  it("should support extending interface", () => {
    const employee: Employee = {
      id: "1",
      name: "Patrick",
      division: "IT",
    };

    const manager: Manager = {
      id: "2",
      name: "Spongebob",
      division: "IT",
      numberOfEmployees: 20,
    };

    console.info(employee);
    console.info(manager);
  });

  it("should support function in interface", () => {
    interface Person {
      name: string;
      sayHello(name: string): string;
    }

    const person: Person = {
      name: "Patrick",
      sayHello: function (name: string) {
        return `Hello ${name}, my name is ${this.name}`;
      },
    };

    console.info(person.sayHello("Spongebob"));
  });

  it("should support intersection types", () => {
    interface hasName {
      name: string;
    }

    interface hasId {
      id: number;
    }

    type Domain = hasName & hasId;

    const person: Domain = {
      name: "Patrick",
      id: 1,
    };

    console.info(person);
  });
});
