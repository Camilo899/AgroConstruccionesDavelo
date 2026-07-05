import { forwardRef } from 'react';

import { cn } from '@/utils/cn';

import type { ButtonProps } from './Button.types';
import { buttonVariants } from './buttonVariants';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      children,
      className,
      variant,
      size,
      loading = false,
      leftIcon,
      rightIcon,
      disabled,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({
            variant,
            size,
          }),
          className,
        )}
        disabled={disabled || loading}
        {...props}
      >
        {leftIcon && !loading && leftIcon}

        {loading ? 'Cargando...' : children}

        {rightIcon && !loading && rightIcon}
      </button>
    );
  },
);

Button.displayName = 'Button';

export default Button;