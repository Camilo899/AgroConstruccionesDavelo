import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  [
    'inline-flex',
    'items-center',
    'justify-center',
    'gap-2',
    'font-semibold',
    'transition-all',
    'duration-300',
    'rounded-button',
    'focus:outline-none',
    'focus:ring-2',
    'focus:ring-primary',
    'disabled:cursor-not-allowed',
    'disabled:opacity-50',
  ],
  {
    variants: {
      variant: {
        primary:
          'bg-primary text-white hover:bg-primary-dark',

        secondary:
          'bg-secondary text-white hover:bg-secondary-dark',

        outline:
          'border border-primary text-primary hover:bg-primary hover:text-white',

        ghost:
          'hover:bg-gray-100',

        danger:
          'bg-red-600 text-white hover:bg-red-700',
      },

      size: {
        sm: 'px-4 py-2 text-sm',

        md: 'px-6 py-3',

        lg: 'px-8 py-4 text-lg',
      },
    },

    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);