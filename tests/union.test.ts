describe("Union", () => {
  it("should support union data type", () => {
    let sample: number | string | boolean = "Patrick";
    sample = 100;
    sample = true;
    console.info(sample);
  });

  it("should typeof operator", () => {
    function process(value: number | string | boolean) {
      if (typeof value === "string") {
        return value.toUpperCase();
      } else if (typeof value === "number") {
        return value + 2;
      } else {
        return !value;
      }
    }

    expect(process("patrick")).toBe("PATRICK");
    expect(process(20)).toBe(22);
    expect(process(true)).toBeFalsy();
  });
});
