<script>
  import { HighlightAuto } from 'svelte-rune-highlight';

  const unknownCode = `function greet(name) {
  return \`Hello, \${name}!\`;
}`;

  const webCode = `const App = () => {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>{count}</button>;
};`;
</script>

<!-- Basic auto-detection -->
<HighlightAuto code={unknownCode} class="border-b" />

<!-- With line numbers and highlighting -->
<HighlightAuto code={unknownCode} numberLine highlightedLines={[1]} highlightedRanges={[[2, 3]]} class="border-b" />

<!-- Restrict to web languages -->
<HighlightAuto code={webCode} languages={['javascript', 'typescript']} numberLine />
