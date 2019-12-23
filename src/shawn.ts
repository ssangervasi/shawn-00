
const rephrase = (
	phrase: string,
	pedantic: boolean = false
): string => {
	let rephrasing = phrase
		.replace(/([sS])(?:[sS]*)(?![hA-Z]|e\b)/g, '$1h')
		.replace(/([sS])(?:[sS]*)e(?=\b)/g, '$1h')

	if (pedantic) {
		rephrasing = rephrasing.replace(/(?<=[sS]h)ea/g, 'aw')
	} else {
		rephrasing = rephrasing.replace(/(?<=\b[sS]h)ea(?=n\b)/g, 'aw')
	}

	return rephrasing
}

export {
	rephrase
}