<script>
  import { Highlight } from '$lib';
  // import Highlight from "$lib/Highlight.svelte";
  import typescript from '$lib/languages/typescript';
  // import "$lib/styles/github-dark.css";
  // import "$lib/styles/github.css";
  const code = 'const add = (a: number, b: number) => a + b;\nconsole.log(a);\nconsole.log(b);';
  //   const test1 = `<Highlight language={typescript} {code} let:highlighted>\n  <LineNumbers {highlighted} />\n</Highlight>`
  //   const test2 = `<Highlight language={typescript} {code} let:highlighted>\n  <LineNumbers {highlighted} hideBorder/>\n</Highlight>`
  //   const test3 = `<Highlight language={typescript} {code} let:highlighted>\n  <LineNumbers {highlighted} wrapLines/>\n</Highlight>`
  //   const test4 = `<Highlight language={typescript} {code} let:highlighted>\n  <LineNumbers {highlighted} startingLineNumber={42}/>\n</Highlight>`
  //   const test5 = `<Highlight language={typescript} {code} let:highlighted>\n  <LineNumbers
  //     {highlighted}
  //     highlightedLines={[5, 6]}
  //     --highlighted-background="#eee"
  //   />\n</Highlight>`
  //   const test6 = `<Highlight language={typescript} {code} let:highlighted>
  // <LineNumbers
  // {highlighted}
  // highlightedLines={[0, 2]}
  // --line-number-color="pink"
  // --border-color="rgba(25, 155, 55, 1)"
  // --padding-left={0}
  // --padding-right="3em"
  // --highlighted-background="#6e6e6e"
  // />
  // </Highlight>`
</script>

Test 0
<Highlight language={typescript} {code} />
