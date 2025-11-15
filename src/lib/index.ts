export { default as Highlight } from './Highlight.svelte';
export { default as HighlightAuto } from './HighlightAuto.svelte';
export { default as HighlightSvelte } from './HighlightSvelte.svelte';
export { default as LangTag } from './LangTag.svelte';
export { default as CodeHighlight } from './CodeHighlight.svelte';
export { default as HighlightCompo } from './HighlightCompo.svelte';

export function copyToClipboard(text: string): Promise<void> {
  return navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Text copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy: ", err);
      throw err; // Re-throw the error so the caller can handle it if needed
    });
}


export function replaceLibImport(
  componentString: string | undefined, 
  libraryName: string = 'flowbite-svelte'
): string {
  if (typeof componentString !== 'string') {
    return ''; // More graceful than throwing
  }

  // Handle both single and double quotes
  return componentString
    .replace(/from '\$lib'/g, `from '${libraryName}'`)
    .replace(/from "\$lib"/g, `from "${libraryName}"`);
}