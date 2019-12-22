
const rephrase = (
	phrase: string,
): string | null => {
	return phrase
		.replace(/([sS])(?![hA-Z]|e\b)/g, '$1h')
		.replace(/([sS])e(?=\b)/g, '$1h')
		.replace(/(?<=[sS]h)ea/g, 'aw')
}

export {
	rephrase
}