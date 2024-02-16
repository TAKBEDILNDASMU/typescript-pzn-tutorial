describe("Any", () => {
  it("should support any for data type", () => {
    const person: any = {
      id: 1,
      name: "Patrick Star",
      age: 18,
    };

    person.age = 200;
    person.address = "Bikini Bottom";

    console.info(person);
  });
});
