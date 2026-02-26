import React from 'react';

export default function Card({
  children,
  className = '',
  ...props
}) {
  return (
    <div
      className={`bg-white border border-violet-200 rounded-lg shadow-sm hover:shadow-md hover:border-violet-300 transition-all dark:bg-black dark:border-violet-800 dark:hover:border-violet-700 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  children,
  className = '',
  ...props
}) {
  return (
    <div
      className={`px-6 py-4 border-b border-violet-100 dark:border-violet-900/50 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardContent({
  children,
  className = '',
  ...props
}) {
  return (
    <div
      className={`px-6 py-4 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardFooter({
  children,
  className = '',
  ...props
}) {
  return (
    <div
      className={`px-6 py-4 border-t border-violet-100 dark:border-violet-900/50 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}