import { Checkbox, extendVariants } from '@heroui/react';

// ListboxItem을 위한 별도의 확장
export const MyCheckbox = extendVariants(Checkbox, {
  variants: {
    color: {
      test: {
        base: ' border-1 border-mono_200  data-[selected]:bg-main data-[selected]:text-mono_200 transition-all',
        wrapper: ' hidden',
        // label: 'text-mono_700 data-[selected]:text-mono_200 ',
      },
    },
    size: {
      md: {
        base: 'text-base',
      },
    },
    radius: {
      bg_full: {
        base: 'rounded-full',
      },
      bg_sm: {
        base: 'rounded-small',
      },
      bg_md: {
        base: 'rounded-medium',
      },
      bg_lg: {
        base: 'rounded-large',
      },
    },
    isSelected: {
      true: {
        base: 'bg-main',
        label: 'text-mono_200',
      },
    },
    isFocusVisible: {
      true: {
        base: '',
      },
    },
  },
  compoundVariants: [
    {
      color: 'test',
      isSelected: true,
      className: ' font-semibold bg-main  px-2 py-1',
    },
  ],
  defaultVariants: {
    color: 'test',
  },
});
