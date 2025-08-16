import { tv } from 'tailwind-variants';

export const highlightcompo = tv({
  base: 'rounded relative',
  variants: {
    expanded: {
      true: 'min-h-full'
    }
  }
});
