<script lang="ts">
  import { HighlightCompo } from '$lib';
  import { H1, H2 } from '../utils';
  import { List, Li } from 'flowbite-svelte';

  // JavaScript example - showing copy functionality
  const jsCode = `// HighlightCompo supports copy-to-clipboard
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Memoized version for better performance
const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n <= 1) return n;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(10)); // 55`;

  // TypeScript example - showing type definitions
  const tsCode = `// HighlightCompo works with TypeScript
interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'user' | 'guest';
}

type ApiResponse<T> = {
  data: T;
  status: number;
  message: string;
};

async function fetchUser(id: string): Promise<ApiResponse<User>> {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
}`;

  // JSON example - showing configuration
  const jsonCode = `{
  "name": "highlight-compo",
  "version": "1.0.0",
  "description": "Syntax highlighting component with copy functionality",
  "features": [
    "Multi-language support",
    "Copy to clipboard",
    "Auto expand/collapse for long code",
    "Line numbers",
    "Language tags",
    "Highlighted lines"
  ],
  "languages": {
    "supported": ["svelte", "javascript", "typescript", "json", "yaml", "markdown"]
  }
}`;

  // YAML example - showing configuration
  const yamlCode = `# HighlightCompo Configuration Example
name: highlight-compo-demo
version: 1.0.0

features:
  - syntax_highlighting: true
  - copy_button: true
  - auto_expand: true
  - line_numbers: optional
  - language_tags: optional

languages:
  svelte:
    color_scheme: vibrant
    file_extensions: ['.svelte']
  
  javascript:
    color_scheme: standard
    file_extensions: ['.js', '.mjs']
  
  typescript:
    color_scheme: blue
    file_extensions: ['.ts']

display_options:
  max_height: 288px  # 18rem / max-h-72
  show_expand_when: overflow
  copy_timeout: 2000ms`;

  // Markdown example - showing documentation
  const mdCode = `# HighlightCompo Features

## Core Functionality

\`HighlightCompo\` is a versatile code highlighting component with these capabilities:

### 1. **Multi-Language Support**
- Svelte, JavaScript, TypeScript
- JSON, YAML, Markdown
- And many more via highlight.js

### 2. **Interactive Features**
- **Copy Button**: Click to copy code to clipboard
- **Auto Expand**: Automatically detects overflow and adds expand/collapse
- **Feedback**: Visual confirmation on copy (✓ Copied! or ✗ Failed)

### 3. **Display Options**
\`\`\`typescript
interface HighlightCompoProps {
  code: string;
  lang?: 'svelte' | 'js' | 'ts' | 'json' | 'yaml' | 'md';
  showCopy?: boolean;
  langtag?: boolean;
  numberLine?: boolean;
  highlightedLines?: number[];
  startingLineNumber?: number;
}
\`\`\`

### Usage Example
\`\`\`svelte
<HighlightCompo 
  code={yourCode} 
  lang="typescript"
  showCopy={true}
  numberLine={true}
/>
\`\`\`

> **Tip**: The component automatically handles overflow with expand/collapse buttons!`;

  // Svelte example showing component features
  const svelteCode = `<script lang="ts">
  // HighlightCompo: Perfect for documentation sites
  import { HighlightCompo } from '$lib';
  
  let code = $state('console.log("Hello World");');
  let lang = $state('javascript');
  let showCopy = $state(true);
  let numberLine = $state(false);
<\/script>

<!-- Basic usage -->
<HighlightCompo {code} {lang} {showCopy} />

<!-- With line numbers -->
<HighlightCompo 
  {code} 
  {lang} 
  {numberLine}
  startingLineNumber={1}
/>

<!-- With highlighted lines -->
<HighlightCompo 
  {code} 
  {lang}
  highlightedLines={[2, 5, 8]}
/>

<!-- Disable copy button for read-only displays -->
<HighlightCompo 
  {code} 
  {lang}
  showCopy={false}
/>`;
</script>

<div class="space-y-8">
  <H1>HighlightCompo Component</H1>
  <div class="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6 pt-0 dark:border-blue-800 dark:bg-blue-950">
    <H2>Key Features</H2>
    <List tag="ul" class="mt-4 space-y-2 text-sm text-gray-700 dark:text-gray-300">
      <Li>✓ <strong>Copy to Clipboard</strong> - One-click code copying with visual feedback</Li>
      <Li>✓ <strong>Auto Expand/Collapse</strong> - Automatically adds expand button for code over 18rem height</Li>
      <Li>✓ <strong>Multi-Language</strong> - Supports JavaScript, TypeScript, JSON, YAML, Markdown, Svelte, and more</Li>
      <Li>✓ <strong>Syntax Highlighting</strong> - Powered by highlight.js for accurate code coloring</Li>
      <Li>✓ <strong>Optional Line Numbers</strong> - Add with <code>numberLine={true}</code></Li>
      <Li>
        ✓ <strong>Highlighted Lines</strong> - Emphasize specific lines with <code>highlightedLines={[1, 3, 5]}</code>
      </Li>
      <Li>✓ <strong>Language Tags</strong> - Show language label with <code>langtag={true}</code></Li>
    </List>
  </div>
  <div>
    <H2>JavaScript - Copy Functionality Demo</H2>
    <p class="mb-4 text-gray-600 dark:text-gray-400">Try clicking the "Copy" button in the top-right corner. You'll see feedback: "✓ Copied!" or "✗ Failed"</p>
    <HighlightCompo code={jsCode} lang="js" />
  </div>

  <div>
    <H2>TypeScript - Type Definitions</H2>
    <p class="mb-4 text-gray-600 dark:text-gray-400">Full TypeScript syntax highlighting support with interfaces, types, and generics</p>
    <HighlightCompo code={tsCode} lang="ts" />
  </div>

  <div>
    <H2>JSON - Configuration Example</H2>
    <p class="mb-4 text-gray-600 dark:text-gray-400">Perfect for displaying API responses and configuration files</p>
    <HighlightCompo code={jsonCode} lang="json" />
  </div>

  <div>
    <H2>YAML - Config Files</H2>
    <p class="mb-4 text-gray-600 dark:text-gray-400">Great for CI/CD configs, Docker Compose, and deployment files</p>
    <HighlightCompo code={yamlCode} lang="yaml" />
  </div>

  <div>
    <H2>Markdown - Documentation</H2>
    <p class="mb-4 text-gray-600 dark:text-gray-400">Display formatted documentation with code blocks and syntax highlighting</p>
    <HighlightCompo code={mdCode} lang="md" />
  </div>

  <div>
    <H2>Svelte - Component Examples</H2>
    <p class="mb-4 text-gray-600 dark:text-gray-400">Show Svelte component code with runes, props, and reactive statements</p>
    <HighlightCompo code={svelteCode} lang="svelte" />
  </div>
</div>
