<script lang="ts">
  import { Highlight } from 'svelte-rune-highlight';
  import yaml from 'highlight.js/lib/languages/yaml';
  const code = `name: My Application
version: 1.0.0
services:

- name: web
  image: my-image:latest
  ports:
  - 80:80
`;
  const jsYaml = {
    name: 'yaml',
    register: yaml
  };
</script>

<Highlight langtag --langtag-color="Pink" --code-line-height="2" --code-padding="2rem" --code-font-size="1rem" --code-font-family="Monaco" language={jsYaml} {code}  />
