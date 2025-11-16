/**
 * Default path-to-name extractor - gets filename without extension
 * 
 * @example
 * defaultPathToName('./examples/Button.svelte') // => 'Button'
 * defaultPathToName('../components/ui/Card.svelte') // => 'Card'
 */
export function defaultPathToName(path: string): string | undefined {
  return path.split('/').pop()?.replace(/\.svelte$/, '');
}

/**
 * Transforms glob component modules into a name-to-component mapping
 * 
 * @param componentModules - Record of paths to components from import.meta.glob (without ?raw)
 * @param pathToName - Optional function to extract component name from path
 * @returns Record mapping component names to their Svelte components
 * 
 * @example
 * // Basic usage
 * const componentModules = import.meta.glob('./examples/*.svelte', { eager: true });
 * const components = transformComponents(componentModules);
 * // { Button: ButtonComponent, Card: CardComponent }
 * 
 * @example
 * // Custom path extraction
 * const components = transformComponents(componentModules, (path) => {
 *   return path.match(/\/ui\/(.+)\.svelte$/)?.[1];
 * });
 */
export function transformComponents(
  componentModules: Record<string, { default: any }>,
  pathToName: (path: string) => string | undefined = defaultPathToName
): Record<string, any> {
  return Object.fromEntries(
    Object.entries(componentModules)
      .map(([path, mod]) => {
        const name = pathToName(path);
        return name ? [name, mod.default] : null;
      })
      .filter((entry): entry is [string, any] => entry !== null)
  );
}

/**
 * Transforms glob modules into a name-to-code mapping
 * 
 * @param modules - Record of paths to module content from import.meta.glob with ?raw
 * @param pathToName - Optional function to extract component name from path
 * @returns Record mapping component names to their source code
 * 
 * @example
 * // Basic usage with default extractor
 * const exampleModules = import.meta.glob('./examples/*.svelte', {
 *   query: '?raw',
 *   import: 'default',
 *   eager: true
 * });
 * const modules = transformModules(exampleModules);
 * // { Button: '...code...', Card: '...code...' }
 * 
 * @example
 * // Custom path extraction for nested structures
 * const modules = transformModules(exampleModules, (path) => {
 *   return path.match(/\/ui\/(.+)\.svelte$/)?.[1];
 * });
 */
export function transformModules(
  modules: Record<string, string>,
  pathToName: (path: string) => string | undefined = defaultPathToName
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(modules)
      .map(([path, code]) => {
        const name = pathToName(path);
        return name ? [name, code] : null;
      })
      .filter((entry): entry is [string, string] => entry !== null)
  );
}

/**
 * Common path-to-name extractors for different project structures
 */
export const pathExtractors = {
  /**
   * Extract filename only (default behavior)
   * './examples/Button.svelte' => 'Button'
   */
  filename: defaultPathToName,
  
  /**
   * Extract with parent directory
   * './examples/ui/Button.svelte' => 'ui/Button'
   */
  withParent: (path: string): string | undefined => {
    const match = path.match(/([^\/]+\/[^\/]+)\.svelte$/);
    return match?.[1];
  },
  
  /**
   * Extract full relative path without extension
   * './examples/ui/Button.svelte' => 'examples/ui/Button'
   */
  fullPath: (path: string): string | undefined => {
    return path.replace(/^\.\//, '').replace(/\.svelte$/, '');
  },
  
  /**
   * Custom matcher for specific directory
   * Usage: pathExtractors.inDirectory('components')
   */
  inDirectory: (dirName: string) => (path: string): string | undefined => {
    const regex = new RegExp(`\\/${dirName}\\/(.+)\\.svelte$`);
    return path.match(regex)?.[1];
  }
};