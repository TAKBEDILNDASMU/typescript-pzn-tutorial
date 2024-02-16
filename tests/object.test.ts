describe("Object", () => {
  it("should support object data type", () => {
    const person: { id: string; name: string; hobbies?: string[] } = {
      id: "1",
      name: "Patrick",
    };

    console.info(person);
  });
});
