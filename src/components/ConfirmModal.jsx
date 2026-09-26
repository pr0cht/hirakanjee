import React, { useEffect } from 'react';
import {
  AiOutlineWarning,
  AiOutlineExclamationCircle,
  AiOutlineClose,
  AiOutlineDelete,
} from 'react-icons/ai';
import './ConfirmModal.css';

/**
 * Universal Confirmation Modal with backdrop blur,
 * matching Hirakanjee theme, buttons, and animations.
 *
 * Props:
 * - isOpen: boolean
 * - title: string
 * - message: string
 * - confirmText: string (default: "Confirm")
 * - cancelText: string (default: "Cancel")
 * - variant: 'warning' | 'danger' | 'primary' (default: 'warning')
 * - icon: ReactNode (optional custom icon)
 * - isProcessing: boolean (default: false)
 * - onConfirm: () => void
 * - onCancel: () => void
 */
export default function ConfirmModal({
  isOpen,
  title = 'Confirmation Required',
  message = 'Are you sure you want to proceed?',
  confirmText = 'Confirm',
  cancelText = 'Cancel',
  variant = 'warning',
  icon = null,
  isProcessing = false,
  onConfirm,
  onCancel,
}) {
  // Close on Escape key press
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && !isProcessing) {
        onCancel?.();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, isProcessing, onCancel]);

  if (!isOpen) return null;

  const renderIcon = () => {
    if (icon) return icon;
    if (variant === 'danger') return <AiOutlineDelete size={28} />;
    if (variant === 'warning') return <AiOutlineWarning size={28} />;
    return <AiOutlineExclamationCircle size={28} />;
  };

  return (
    <div
      className="confirm-modal-overlay"
      onClick={!isProcessing ? onCancel : undefined}
      role="presentation"
    >
      <div
        className={`confirm-modal-card variant-${variant}`}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="confirm-modal-title"
      >
        <button
          type="button"
          className="confirm-modal-close"
          onClick={onCancel}
          disabled={isProcessing}
          aria-label="Close dialog"
        >
          <AiOutlineClose size={18} />
        </button>

        <div className={`confirm-modal-icon-badge variant-${variant}`}>
          {renderIcon()}
        </div>

        <div className="confirm-modal-content">
          <h3 id="confirm-modal-title" className="confirm-modal-title">
            {title}
          </h3>
          <p className="confirm-modal-message">{message}</p>
        </div>

        <div className="confirm-modal-actions">
          <button
            type="button"
            className="confirm-btn-cancel"
            onClick={onCancel}
            disabled={isProcessing}
          >
            {cancelText}
          </button>
          <button
            type="button"
            className={`confirm-btn-action variant-${variant}`}
            onClick={onConfirm}
            disabled={isProcessing}
            autoFocus
          >
            {isProcessing ? 'Processing...' : confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
