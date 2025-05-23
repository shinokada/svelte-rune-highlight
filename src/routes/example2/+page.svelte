<script lang="ts">
	import { Highlight } from '$lib';
	import typescript from '$lib/languages/typescript';
	const modules = import.meta.glob('./md/*.md', {
		query: '?raw',
		import: 'default',
		eager: true
	});
</script>

<h1>Line Numbers</h1>

<p>The Highlight component has the option to add line numbers. See the following examples.</p>

<h2>Number Lines</h2>

<p>
	Add <code>numberLine</code>
	props to add line numbers.
</p>

<Highlight language={typescript} code={modules['./md/sample-1.md'] as string} numberLine />

<h2>Hide Border</h2>

<p>
	Add <code>hideBorder</code>
	props to hide the border.
</p>

<Highlight
	language={typescript}
	code={modules['./md/sample-2.md'] as string}
	hideBorder
	numberLine
	backgroudColor="red"
	position="static"
/>

<h2>Wraped Lines</h2>

<p>
	Add <code>wrapLines</code>
	props to wrap lines.
</p>

<Highlight
	language={typescript}
	code={modules['./md/sample-3.md'] as string}
	wrapLines
	numberLine
/>

<h2>Starting Line Number</h2>

<p>
	Use the <code>startingLineNumber</code>
	props to set the start line number.
</p>

<Highlight
	language={typescript}
	code={modules['./md/sample-4.md'] as string}
	startingLineNumber={42}
	numberLine
/>

<h2>Highlighted Lines and Highlighted Background</h2>

<p>
	Use the <code>highlightedLines</code>
	and
	<code>highlightedBackground</code>
	props to highlight lines.
</p>

<Highlight
	language={typescript}
	code={modules['./md/sample-5.md'] as string}
	highlightedLines={[2, 4]}
	--highlighted-background="#666"
	numberLine
/>

<h2>Custom styles</h2>

<p>
	Use the <code>--line-number-color</code>
	,
	<code>--border-color</code>
	,
	<code>--padding-left</code>
	,
	<code>--padding-right</code>
	, and
	<code>--highlighted-background</code>
	props to customize the styles.
</p>

<Highlight
	language={typescript}
	code={modules['./md/sample-6.md'] as string}
	highlightedLines={[1, 3]}
	--line-number-color="pink"
	--border-color="rgba(25, 155, 55, 1)"
	--padding-left="1em"
	--padding-right="2em"
	--highlighted-background="#6e6e6e"
	numberLine
/>
