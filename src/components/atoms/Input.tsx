// MyButton.tsx
import { extendVariants, Input } from '@heroui/react';

export const MyInput = extendVariants(Input, {
  variants: {
    size: {
      base: {
        mainWrapper: 'text-tiny gap-1 rounded-small',
      },
      md: {
        mainWrapper: 'w-[300px]',
      },
      xl: {
        mainWrapper: 'text-large gap-4 rounded-medium',
      },
      full: {
        mainWrapper: 'w-full text-large gap-4 rounded-medium',
      },
    },
  },
  defaultVariants: {
    size: 'xl',
  },
});
