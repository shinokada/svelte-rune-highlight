import { tv } from 'tailwind-variants';

export const highlightcompo = tv({
  base: 'rounded relative',
  variants: {
    expanded: {
      true: 'min-h-full'
    }
  }
});

export const codewrapper = tv({
  slots: {
    base: 'max-w-4xl rounded-md border border-gray-200 bg-white bg-gradient-to-r dark:border-gray-600 dark:bg-gray-950',
    inner: ''
  }
});

