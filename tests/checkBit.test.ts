import { checkBit } from "../src";

test("checkBit() false", () => {
	expect(checkBit(65, 1)).toBe(false);
	expect(checkBit(65, 2)).toBe(false);
	expect(checkBit(65, 3)).toBe(false);
	expect(checkBit(65, 4)).toBe(false);
	expect(checkBit(65, 5)).toBe(false);
});

test("checkBit() true", () => {
	expect(checkBit(65, 0)).toBe(true);
	expect(checkBit(65, 6)).toBe(true);
});

test("checkBit() null", () => {
	expect(checkBit(0, 1)).toBe(null);
	expect(checkBit(65, 7)).toBe(null);
});

test("checkBit() error: cannot be negative", () => {
	expect(() => checkBit(64, -1)).toThrow();
	expect(() => checkBit(-64, 0)).toThrow();
	expect(() => checkBit(-64, -64)).toThrow();
});

test("checkBit() error: must be integers", () => {
	expect(() => checkBit(0, 0.5)).toThrow();
	expect(() => checkBit(0.5, 0)).toThrow();
	expect(() => checkBit(0.5, 0.5)).toThrow();
});

test("checkBit() specific number: 331", () => {
	expect(checkBit(331, 0)).toBe(true);
	expect(checkBit(331, 1)).toBe(true);
	expect(checkBit(331, 2)).toBe(false);
	expect(checkBit(331, 3)).toBe(true);
	expect(checkBit(331, 4)).toBe(false);
	expect(checkBit(331, 5)).toBe(false);
	expect(checkBit(331, 6)).toBe(true);
	expect(checkBit(331, 7)).toBe(false);
	expect(checkBit(331, 8)).toBe(true);

	expect(checkBit(331, 9)).toBe(null);
	expect(checkBit(331, 10)).toBe(null);
	expect(checkBit(331, 11)).toBe(null);
	expect(checkBit(331, 12)).toBe(null);
	expect(checkBit(331, 13)).toBe(null);
	expect(checkBit(331, 14)).toBe(null);
	expect(checkBit(331, 15)).toBe(null);

	expect(() => checkBit(331, -1)).toThrow();
	expect(() => checkBit(331, 0.25)).toThrow();
});
