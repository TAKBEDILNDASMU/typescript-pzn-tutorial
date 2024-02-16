describe("Optional Parameter", () => {
  it("should support null and undefined", () => {
    const sayHello = (name?: string | null): void => {
      if (name) {
        console.info(`Hello ${name}`);
      } else {
        console.info(`Hello`);
      }
    };

    sayHello("Eko");
    const name: string | undefined = undefined;
    sayHello(name);
    sayHello(null);
  });
});
