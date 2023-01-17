import { checkBit } from "../src";

test("checkBit(331, 0) => true", () => expect(checkBit(331, 0)).toBe(true));
test("checkBit(331, 1) => true", () => expect(checkBit(331, 1)).toBe(true));
test("checkBit(331, 2) => false", () => expect(checkBit(331, 2)).toBe(false));
test("checkBit(331, 3) => true", () => expect(checkBit(331, 3)).toBe(true));
test("checkBit(331, 4) => false", () => expect(checkBit(331, 4)).toBe(false));
test("checkBit(331, 5) => false", () => expect(checkBit(331, 5)).toBe(false));
test("checkBit(331, 6) => true", () => expect(checkBit(331, 6)).toBe(true));
test("checkBit(331, 7) => false", () => expect(checkBit(331, 7)).toBe(false));
test("checkBit(331, 8) => true", () => expect(checkBit(331, 8)).toBe(true));

test("checkBit(331, 9) => null", () => expect(checkBit(331, 9)).toBe(null));
test("checkBit(331, 10) => null", () => expect(checkBit(331, 10)).toBe(null));
test("checkBit(331, 11) => null", () => expect(checkBit(331, 11)).toBe(null));
test("checkBit(331, 12) => null", () => expect(checkBit(331, 12)).toBe(null));
test("checkBit(331, 13) => null", () => expect(checkBit(331, 13)).toBe(null));
test("checkBit(331, 14) => null", () => expect(checkBit(331, 14)).toBe(null));
test("checkBit(331, 15) => null", () => expect(checkBit(331, 15)).toBe(null));

test("checkBit(331, -1) => error: cannot be negative", () =>
	expect(() => checkBit(331, -1)).toThrow());
test("checkBit(-331, 1) => error: cannot be negative", () =>
	expect(() => checkBit(-331, 1)).toThrow());
test("checkBit(-331, -1) => error: cannot be negative", () =>
	expect(() => checkBit(-331, -1)).toThrow());

test("checkBit(331, .5) => error: must be integers", () =>
	expect(() => checkBit(331, 0.5)).toThrow());
test("checkBit(331.5, 0) => error: must be integers", () =>
	expect(() => checkBit(331.5, 0)).toThrow());
test("checkBit(331.5, .5) => error: must be integers", () =>
	expect(() => checkBit(331.5, 0.5)).toThrow());
