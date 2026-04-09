import React from 'react';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) {
  const baseStyles = 'inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

  const variants = {
    primary: 'bg-violet-900 text-white hover:bg-violet-800 focus:ring-violet-900 dark:bg-violet-800 dark:text-white dark:hover:bg-violet-700',
    secondary: 'bg-white text-violet-900 border border-violet-300 hover:bg-violet-50 focus:ring-violet-500 dark:bg-black dark:text-violet-300 dark:border-violet-700 dark:hover:bg-violet-950',
    ghost: 'text-violet-700 hover:bg-violet-100 focus:ring-violet-500 dark:text-violet-400 dark:hover:bg-violet-950',
    accent: 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-600 hover:to-blue-700 focus:ring-cyan-500 dark:from-cyan-400 dark:to-blue-500 dark:hover:from-cyan-500 dark:hover:to-blue-600'
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm rounded-md',
    md: 'px-4 py-2 text-base rounded-md',
    lg: 'px-6 py-3 text-lg rounded-lg'
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
