export function signChecker(percent) {
	const numericPercent = Number.parseFloat(percent); // Convert string percentage to a number
	return numericPercent > 0;
}
