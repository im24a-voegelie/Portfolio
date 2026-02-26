import React from 'react';

export default function Modal({
  isOpen,
  onClose,
  children,
  className = ''
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      />

      {/* Modal content */}
      <div
        className={`relative bg-white rounded-lg shadow-xl max-w-md w-full mx-4 max-h-[90vh] overflow-y-auto dark:bg-black ${className}`}
      >
        {children}
      </div>
    </div>
  );
}

export function ModalHeader({
  children,
  className = '',
  ...props
}) {
  return (
    <div
      className={`px-6 py-4 border-b border-gray-200 dark:border-gray-800 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function ModalContent({
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

export function ModalFooter({
  children,
  className = '',
  ...props
}) {
  return (
    <div
      className={`px-6 py-4 border-t border-gray-200 dark:border-gray-800 flex justify-end space-x-2 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}