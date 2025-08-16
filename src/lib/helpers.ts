export function replaceLibImport(componentString: string | undefined, libraryName: string): string {
  if (typeof componentString !== 'string') {
    throw new Error('Invalid componentString: Expected a string');
  }

  return componentString.replace(/from '\$lib'/g, `from '${libraryName}'`);
}
