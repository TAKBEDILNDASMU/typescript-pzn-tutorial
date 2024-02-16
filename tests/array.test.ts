describe("Array", () => {
  it("should do the same in js", () => {
    const names: string[] = ["Patrick", "Spongebob"];
    const values: number[] = [1, 2, 3];

    console.info(names);
    console.info(values);
  });

  it("should support readonly", () => {
    const hobbies: ReadonlyArray<string> = ["Reading", "Swimming"];
    console.info(hobbies);
  });

  it("should support tuple", () => {
    const person: readonly [string, boolean, number] = ["Patrick", true, 100];

    console.info(person);
  });
});
