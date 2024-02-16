import { sayHello } from "../src/say-hello";

describe("sayHello", function (): void {
  it("should return hello patrick", function (): void {
    expect(sayHello("patrick")).toBe("Hello patrick");
  });
});
