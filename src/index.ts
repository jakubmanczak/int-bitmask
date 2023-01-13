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

function checkBit(num: number, bit: number): boolean | null | Error {
	if (num < 0) return Error("Checked number is below zero.");
	if (bit < 0) return Error("Bit number is below zero.");

	let binary = numToBinaryString(num);

	if (bit >= binary.length) return null;

	return binary[binary.length - 1 - bit] === "1" ? true : false;
}

function setBit(num: number, bit: number, bitState: 0 | 1): number | Error {
	if (num < 0) return Error("Checked number is below zero.");
	if (bit < 0) return Error("Bit number is below zero.");

	let binary = numToBinaryString(num).split("").reverse();
	while (bit > binary.length) {
		binary.push("0");
	}
	binary[bit] = bitState.toString();

	return binaryStringToNum(binary.reverse().join(""));
}

export { checkBit, setBit };
