// import { mocked } from 'ts-jest/utils'

import { rephrase } from './shawn'

describe('rephrase', () => {
	describe('default behavior', () => {
		test.each([
			['seen', 'sheen'],
			['sean', 'shawn'],
			['shawn', 'shawn'],
			['she', 'she'],
			['sea', 'shea'],
			[
				'I see Sean steals sheep by the seashore.',
				'I shee Shawn shtealsh sheep by the sheashore.'
			],
			[
				'I saw Sean Connery sink a ship!',
				'I shaw Shawn Connery shink a ship!'
			],
			[
				'Please, sir, SSH into my secure shell...',
				'Pleash, shir, SSH into my shecure shell...'
			],
		])(
			'%s -> %s',
			(phrase, expected) => {
				expect(rephrase(phrase)).toEqual(expected)
			}
		)
	})

	describe('pedantic behavior', () => {
		test.each([
			['seen', 'sheen'],
			['sean', 'shawn'],
			['shawn', 'shawn'],
			['she', 'she'],
			['sea', 'shaw'],
			[
				'I see Sean steals sheep by the seashore.',
				'I shee Shawn shtealsh sheep by the shawshore.'
			],
			[
				'I saw Sean Connery sink a ship!',
				'I shaw Shawn Connery shink a ship!'
			],
			[
				'Please, sir, SSH into my secure shell...',
				'Pleash, shir, SSH into my shecure shell...'
			],
		])(
			'%s -> %s',
			(phrase, expected) => {
				expect(rephrase(phrase, true)).toEqual(expected)
			}
		)
	})
})