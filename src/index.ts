function checkBit(num: number, bit: number): boolean | null | Error {
	if (num < 0) return Error("Checked number is below zero.");
	if (bit < 0) return Error("Bit number is below zero.");

	let binary = num.toString(2);

	if (bit >= binary.length) return null;

	return binary[binary.length - 1 - bit] === "1" ? true : false;
}

export { checkBit };
