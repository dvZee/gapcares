import React, { useEffect } from 'react';

export default function Toast({ message, onClose }) {
  useEffect(() => {
    if (!message) return;
    const timer = setTimeout(() => {
      onClose();
    }, 6000);
    return () => clearTimeout(timer);
  }, [message, onClose]);

  if (!message) return null;

  return (
    <div className="toast-notice" role="status" aria-live="polite">
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#9FE98E" strokeWidth="2" aria-hidden="true">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
        <polyline points="22 4 12 14.01 9 11.01"></polyline>
      </svg>
      <span>{message}</span>
    </div>
  );
}
