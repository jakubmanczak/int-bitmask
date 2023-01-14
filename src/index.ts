const errNumberNegative = "Inputs cannot be negative.";
const errNumberFloat = "Inputs must be integers.";

function binaryStringToNum(binary: string): number {
	let output: number = 0;
	binary
		.split("")
		.reverse()
		.forEach((el, index) => {
			if (el === "1") output += Math.pow(2, index);
		});
	return output;
}

function numToBinaryString(num: number): string {
	return num.toString(2);
}

function checkBit(num: number, bit: number): boolean | null {
	if (num < 0 || bit < 0) throw new Error(errNumberNegative);
	if (!Number.isInteger(num) || !Number.isInteger(bit))
		throw new Error(errNumberFloat);

	let binary = numToBinaryString(num);

	if (bit >= binary.length) return null;

	return binary[binary.length - 1 - bit] === "1" ? true : false;
}

function setBit(num: number, bit: number, bitState: 0 | 1): number {
	if (num < 0 || bit < 0) throw new Error(errNumberNegative);
	if (!Number.isInteger(num) || !Number.isInteger(bit))
		throw new Error(errNumberFloat);

	let binary = numToBinaryString(num).split("").reverse();
	while (bit > binary.length) {
		binary.push("0");
	}
	binary[bit] = bitState.toString();

	return binaryStringToNum(binary.reverse().join(""));
}

function toggleBit(num: number, bit: number): number {
	if (num < 0 || bit < 0) throw new Error(errNumberNegative);
	if (!Number.isInteger(num) || !Number.isInteger(bit))
		throw new Error(errNumberFloat);

	return setBit(num, bit, checkBit(num, bit) ? 0 : 1);
}

export { checkBit, setBit, toggleBit };
