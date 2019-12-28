// import { mocked } from 'ts-jest/utils'

import { rephrase } from './shawn'

describe('rephrase', () => {
	const commonTable = [
		['seen'   , 'sheen'   ] ,
		['she'    , 'she'     ] ,
		['ass'    , 'ash'     ] ,
		['asses'  , 'ashesh'  ] ,
		['assess' , 'ashesh'  ] ,
		['ashes'  , 'ashesh'  ] ,
		['aces'   , 'ashesh'  ] ,
		['Spice'  , 'Shpishe' ] ,
		[
			'Please, sir, SSH into my secure shell...',
			'Pleashe, shir, SSH into my shecure shell...'
		]
	]

	describe('default behavior', () => {
		test.each([
			...commonTable,

			['sea'   , 'shea'  ] ,
			['sean'  , 'shawn' ] ,
			['shawn' , 'shawn' ] ,
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
			...commonTable,

			['sea'   , 'shaw'  ] ,
			['sean'  , 'shawn' ] ,
			['shawn' , 'shawn' ] ,
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
