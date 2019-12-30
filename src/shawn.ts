
const rephrase = (
	phrase: string,
	pedantic: boolean = false
): string => {
	let rephrasing = phrase
		.replace(/([sS])(?:[sS]*)(?![hA-Z])/g, '$1h')
		.replace(/(?:[cC])([eiyEIY])/g, 'sh$1')

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
