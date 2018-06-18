import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

export default [
	{
		input: './src/automerge.js',
		output: {
			name: 'Automerge',
			file: './dist/automerge.js',
			format: 'umd',
			exports: 'named',
			globals: ['crypto'],
			sourcemap: true
		},
		plugins: [
			resolve(),
			commonjs(),
			babel({
				exclude: ['node_modules/**'],
				plugins: [
					"external-helpers"
				]
			})
		]
	},
];