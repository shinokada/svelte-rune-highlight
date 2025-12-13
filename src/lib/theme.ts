// Simple class builder without tailwind-variants
export const highlightcompo = (options?: { class?: string }) => {
  const baseClasses = 'hlc-base';
  return options?.class ? `${baseClasses} ${options.class}` : baseClasses;
};

export const codewrapper = () => {
  return {
    base: (options?: { class?: string }) => {
      const baseClasses = 'cw-base';
      return options?.class ? `${baseClasses} ${options.class}` : baseClasses;
    },
    inner: (options?: { class?: string }) => {
      const innerClasses = 'cw-inner';
      return options?.class ? `${innerClasses} ${options.class}` : innerClasses;
    }
  };
};
