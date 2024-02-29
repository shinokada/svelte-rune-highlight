<script>
  import { Highlight} from "$lib";
  import typescript from "$lib/languages/typescript";
  import "$lib/styles/github-dark.css";
  // import "$lib/styles/github.css";
  const code = `<Highlight 
  language={typescript} 
  {code} 
  numbers
/>`;
  const test1 = `<Highlight 
  language={typescript} 
  code={test1} 
  numbers
/>`
  const test2 = `<Highlight 
  language={typescript} 
  code={test2} 
  hideBorder 
  numbers
/>`
  const test3 = `<Highlight 
  language={typescript} 
  code={test3} 
  wrapLines 
  numbers
/>`
  const test4 = `<Highlight 
  language={typescript} 
  code={test4} 
  startingLineNumber={42} 
  numbers
/>`
  const test5 = `<Highlight
  language={typescript}
  code={test5}
  highlightedLines={[2, 4]}
  --highlighted-background="#666"
  numbers
/>`
  const test6 = `<Highlight
  language={typescript}
  code={test6}
  highlightedLines={[0, 2]}
  --line-number-color="pink"
  --border-color="rgba(25, 155, 55, 1)"
  --padding-left={0}
  --padding-right="3em"
  --highlighted-background="#6e6e6e"
  numbers
/>`
</script>

Test 0
<Highlight language={typescript} {code} numbers/>

Test 1
<Highlight language={typescript} code={test1} numbers/>

Test 2
<Highlight language={typescript} code={test2} hideBorder numbers/>

Test 3
<Highlight language={typescript} code={test3} wrapLines numbers/>

Test 4
<Highlight language={typescript} code={test4} startingLineNumber={42} numbers/>

Test 5

<Highlight
  language={typescript}
  code={test5}
  highlightedLines={[2, 4]}
  --highlighted-background="#666"
  numbers
/>

Test 6

<Highlight
  language={typescript}
  code={test6}
  highlightedLines={[0, 2]}
  --line-number-color="pink"
  --border-color="rgba(25, 155, 55, 1)"
  --padding-left={0}
  --padding-right="3em"
  --highlighted-background="#6e6e6e"
  numbers
/>