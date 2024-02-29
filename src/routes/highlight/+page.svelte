<script>
  import {Highlight, HighlightSvelte, HighlightAuto, LineNumbers} from "$lib";
  import NewLineNumbers from "$lib/NewLineNumbers.svelte";
  import typescript from "$lib/languages/typescript";
  // import github from "svelte-highlight/styles/github";
  import "$lib/styles/github.css";
  const code = "const add = (a: number, b: number) => a + b;\nconsole.log(a);\nconsole.log(b);";
  const code2 = `<button on:click={() => { console.log(0); }}>Increment {count}</button>`;
  const code3 = `body {\n  padding: 0;\n  color: red;\n}`;

  const code4 = `.body { padding: 0; margin: 0; }`;
  const test1 = `<span class="hljs-keyword">const</span> <span class="hljs-title function_">add</span> = (<span class="hljs-params">a: <span class="hljs-built_in">number</span>, b: <span class="hljs-built_in">number</span></span>) =&gt; a + b; <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(a); <span class="hljs-variable language_">console</span>.<span class="hljs-title function_">log</span>(b);`
</script>

Test

<Highlight language={typescript} {code}>
  {#snippet children(prop)}
  <NewLineNumbers highlighted={prop} />
  {/snippet}
</Highlight>

