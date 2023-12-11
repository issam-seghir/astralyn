export function splitCamelCase(input) {
	return input.replaceAll(/([a-z])([A-Z])/g, "$1 $2");
}
