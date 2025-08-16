<script>
  import { CodeHighlight } from '$lib';
  import 'highlight.js/styles/github-dark.css';

  const jsCode = `function hello(name) {
  console.log(\`Hello, \${name}!\`);
}`;
</script>

Basic usage with auto-detection
<CodeHighlight code={jsCode} />

With all features
<CodeHighlight
  code={jsCode}
  language="javascript"
  theme="github-dark"
  lineNumbers={true}
  copyButton={true}
  --langtag-background="red"
  --langtag-color="LightCyan" --code-font-size="20px"
/>

Completely custom styling

<CodeHighlight code={jsCode} theme="github-dark" style="--bg-color: red; --text-color: blue;" --langtag-background="red" />
