// import { mocked } from 'ts-jest/utils'

import { rephrase } from './shawn'

describe('rephrase', () => {
	test.each([
		['seen', 'sheen'],
		['sean', 'shawn'],
		['shawn', 'shawn'],
		['she', 'she'],
		[
			'I see she steals sheep by the seashore.',
			'I shee she shtealsh sheep by the shawshore.'
		],
		[
			'I saw Sean Connery sink a ship!',
			'I shaw Shawn Connery shink a ship!'
		],
		[
			'Please SSH into my secure shell',
			'Pleash SSH into my shecure shell'
		],
	])(
		'%s -> %s',
		(phrase, expected) => {
			expect(rephrase(phrase)).toEqual(expected)
		}
	)
})