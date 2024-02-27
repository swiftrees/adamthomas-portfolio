'use client';

import React from 'react';

import clsx from 'clsx';

type ButtonProps = {
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'cancel';
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  className,
  isLoading = false,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      className={clsx(
        'w-full uppercase flex items-center justify-center min-h-[50px] px-5 py-[10px] text-small-regular border transition-colors duration-200 disabled:opacity-50 rounded-md shadow-md',
        {
          'text-white bg-emerald-600 dark:bg-emerald-400 hover:bg-emerald-500 hover:text-gray-900 disabled:hover:bg-gray-900 disabled:hover:text-white':
            variant === 'primary',
          'text-gray-900 bg-transparent hover:bg-gray-100 dark:text-gray-200 hover:dark:text-gray-700':
            variant === 'secondary',
          'text-gray-800 bg-red-400 hover:bg-red-500': variant === 'cancel',
        },
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
