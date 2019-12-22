#!/usr/bin/env node
import { Command } from 'commander'

import { rephrase } from './shawn'

const main = () => {
	const program = new Command()
	program
		.arguments('<PHRASE>')
		.description('Something Sean would say')
		.action(shawnAction)
	program.parse(process.argv)
}

const shawnAction = (phrase: string): string|null => {
	const rephrasing = rephrase(phrase)
	if (rephrasing) { console.log(rephrasing) }

	return rephrasing
}

main()
