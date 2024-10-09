'use client';
// ion/Tag: Generated with Ion on 2/5/2024, 12:14:35 AM
import React from 'react';
import { cva } from 'class-variance-authority';
import clsx from 'clsx';
import { X } from 'lucide-react';

const classNames = cva(
  [
    'disabled:border-transparent disabled:bg-weak',
    'active:bg-transparent',
    'transition-all duration-300 ease-in-out transform',
  ],
  {
    variants: {
      color: {
        simple: ['text-foreground', 'active:border-base-stroke'],
        primary: ['text-primary-darkest', 'active:border-primary'],
        secondary: ['text-secondary-darkest', 'active:border-secondary'],
        danger: ['text-danger-darkest', 'active:border-danger'],
      },
      type: {
        stroke: ['bg-transparent', 'hover:border-transparent'],
        filled: ['border-transparent', 'hover:bg-transparent'],
      },
    },
    compoundVariants: [
      {
        color: 'simple',
        type: 'stroke',
        className: [
          'border-soft-stroke',
          'hover:bg-soft',
          'hover:scale-105',
          'active:scale-95',
        ],
      },
      {
        color: 'simple',
        type: 'filled',
        className: [
          'bg-soft',
          'hover:border-soft-stroke',
          'hover:scale-105',
          'active:scale-95',
        ],
      },
      {
        color: 'primary',
        type: 'stroke',
        className: [
          'border-primary-light',
          'hover:bg-primary-lightest',
          'hover:scale-105',
          'active:scale-95',
        ],
      },
      {
        color: 'primary',
        type: 'filled',
        className: [
          'bg-primary-lightest',
          'hover:border-primary-light',
          'hover:scale-105',
          'active:scale-95',
        ],
      },
      {
        color: 'secondary',
        type: 'stroke',
        className: [
          'border-secondary-light',
          'hover:bg-secondary-lightest',
          'hover:scale-105',
          'active:scale-95',
        ],
      },
      {
        color: 'secondary',
        type: 'filled',
        className: [
          'bg-secondary-lightest',
          'hover:border-secondary-light',
          'hover:scale-105',
          'active:scale-95',
        ],
      },
      {
        color: 'danger',
        type: 'stroke',
        className: [
          'border-danger-light',
          'hover:bg-danger-lightest',
          'hover:scale-105',
          'active:scale-95',
        ],
      },
      {
        color: 'danger',
        type: 'filled',
        className: [
          'bg-danger-lightest',
          'hover:border-danger-light',
          'hover:scale-105',
          'active:scale-95',
        ],
      },
    ],
  }
);

// Exclude the 'type' property from ButtonHTMLAttributes since it conflicts with the 'stroke' and 'filled' types
type OmitButtonType = Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;
type TagProps = OmitButtonType & {
  type?: 'stroke' | 'filled';
  color?: 'simple' | 'primary' | 'secondary' | 'danger';
  iconLeading?: React.ReactNode;
  onDismiss?: React.MouseEventHandler<SVGSVGElement>;
  children?: React.ReactNode;
  className?: string;
};

const Tag = React.forwardRef<HTMLButtonElement, TagProps>(
  (
    { className, type = 'stroke', color = 'simple', iconLeading, onDismiss, children, ...props },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={clsx(
          classNames({
            type,
            color,
          }),
          'flex w-fit flex-row leading-none items-center justify-center gap-x-1 rounded-lg border px-3 py-1 text-xs font-semibold',
          className
        )}
        {...props}
      >
        {iconLeading}

        {children}

        {onDismiss && (
          <X
            onClick={(e) => {
              // Don't fire the top-level onClick for the tag
              e.stopPropagation();
              onDismiss(e);
            }}
            className="h-3 w-3 rounded stroke-2 transition-transform duration-300 ease-in-out hover:rotate-90"
          />
        )}
      </button>
    );
  }
);
Tag.displayName = 'Tag';

export default Tag;