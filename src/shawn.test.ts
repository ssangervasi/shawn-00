// import { mocked } from 'ts-jest/utils'

import { rephrase } from './shawn'

describe('rephrase', () => {
	describe('default behavior', () => {
		test.each([
			['seen', 'sheen'],
			['she', 'she'],
			['sea', 'shea'],
			['ass', 'ash'],
			['asses', 'ashesh'],
			['assess', 'ashesh'],
			['ashes', 'ashesh'],
			[
				'Please, sir, SSH into my secure shell...',
				'Pleash, shir, SSH into my shecure shell...'
			],
			
			// Different from pedantic
			['sean', 'shawn'],
			['shawn', 'shawn'],
			[
				'I see Sean steals sheep by the seashore.',
				'I shee Shawn shtealsh sheep by the sheashore.'
			],
			[
				'I saw Sean Connery sink a ship!',
				'I shaw Shawn Connery shink a ship!'
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
			['sea', 'shaw'],
			['sean', 'shawn'],
			['shawn', 'shawn'],
			[
				'I see Sean steals sheep by the seashore.',
				'I shee Shawn shtealsh sheep by the shawshore.'
			],
			[
				'I saw Sean Connery sink a ship!',
				'I shaw Shawn Connery shink a ship!'
			],
		])(
			'%s -> %s',
			(phrase, expected) => {
				expect(rephrase(phrase, true)).toEqual(expected)
			}
		)
	})
})