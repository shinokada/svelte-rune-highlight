<script lang="ts">
  import { Highlight } from 'svelte-rune-highlight';
  import json from 'highlight.js/lib/languages/json';
  const code = `{
  "name": "John Doe",
  "age": 30,
  "city": "New York",
  "is_active": true,
  "hobbies": ["reading", "hiking", "coding"]
}`;
  const jsonLang = {
    name: 'json',
    register: json
  };
</script>

<Highlight langtag --langtag-color="DeepPink" --code-font-size="10px"  language={jsonLang} {code}  />
