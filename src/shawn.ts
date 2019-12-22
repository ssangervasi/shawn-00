
const rephrase = (
	phrase: string,
): string | null => {
	return phrase
		.replace(/s(?!h)/g, 'sh')
		.replace(/(?<=sh)ea/g, 'aw')
}

export {
	rephrase
}