import React from 'react';

export default function Textarea({
  className = '',
  ...props
}) {
  return (
    <textarea
      className={`w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent resize-vertical dark:bg-black dark:border-gray-700 dark:text-white dark:placeholder-gray-500 dark:focus:ring-white ${className}`}
      {...props}
    />
  );
}