import { checkBit } from "../src";

test("1st bit of 331 is true", () => expect(checkBit(331, 0)).toBe(true));
test("2nd bit of 331 is true", () => expect(checkBit(331, 1)).toBe(true));
test("3rd bit of 331 is false", () => expect(checkBit(331, 2)).toBe(false));
test("4th bit of 331 is true", () => expect(checkBit(331, 3)).toBe(true));
test("5th bit of 331 is false", () => expect(checkBit(331, 4)).toBe(false));
test("6th bit of 331 is false", () => expect(checkBit(331, 5)).toBe(false));
test("7th bit of 331 is true", () => expect(checkBit(331, 6)).toBe(true));
test("8th bit of 331 is false", () => expect(checkBit(331, 7)).toBe(false));
test("9th bit of 331 is true", () => expect(checkBit(331, 8)).toBe(true));

test("bits 10-16 of 331 are null", () => {
	expect(checkBit(331, 9)).toBe(null);
	expect(checkBit(331, 10)).toBe(null);
	expect(checkBit(331, 11)).toBe(null);
	expect(checkBit(331, 12)).toBe(null);
	expect(checkBit(331, 13)).toBe(null);
	expect(checkBit(331, 14)).toBe(null);
	expect(checkBit(331, 15)).toBe(null);
});

test("negative inputs throw errors", () => {
	expect(() => checkBit(331, -1)).toThrow();
	expect(() => checkBit(-331, 1)).toThrow();
	expect(() => checkBit(-331, -1)).toThrow();
});

test("floating point inputs throw errors", () => {
	expect(() => checkBit(331, 0.5)).toThrow();
	expect(() => checkBit(331.5, 0)).toThrow();
	expect(() => checkBit(331.5, 0.5)).toThrow();
});
