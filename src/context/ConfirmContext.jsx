import React, { createContext, useContext, useState, useCallback, useRef } from 'react';
import ConfirmModal from '../components/ConfirmModal';

const ConfirmContext = createContext(null);

export function ConfirmProvider({ children }) {
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    title: '',
    message: '',
    confirmText: 'Confirm',
    cancelText: 'Cancel',
    variant: 'warning',
    icon: null,
    isProcessing: false,
  });

  const resolverRef = useRef(null);

  const confirm = useCallback((options) => {
    return new Promise((resolve) => {
      resolverRef.current = resolve;
      setModalConfig({
        isOpen: true,
        title: options?.title || 'Confirmation Required',
        message: options?.message || 'Are you sure you want to proceed?',
        confirmText: options?.confirmText || 'Confirm',
        cancelText: options?.cancelText || 'Cancel',
        variant: options?.variant || 'warning',
        icon: options?.icon || null,
        isProcessing: false,
      });
    });
  }, []);

  const handleConfirm = useCallback(() => {
    setModalConfig((prev) => ({ ...prev, isOpen: false }));
    if (resolverRef.current) {
      resolverRef.current(true);
      resolverRef.current = null;
    }
  }, []);

  const handleCancel = useCallback(() => {
    setModalConfig((prev) => ({ ...prev, isOpen: false }));
    if (resolverRef.current) {
      resolverRef.current(false);
      resolverRef.current = null;
    }
  }, []);

  return (
    <ConfirmContext.Provider value={confirm}>
      {children}
      <ConfirmModal
        isOpen={modalConfig.isOpen}
        title={modalConfig.title}
        message={modalConfig.message}
        confirmText={modalConfig.confirmText}
        cancelText={modalConfig.cancelText}
        variant={modalConfig.variant}
        icon={modalConfig.icon}
        isProcessing={modalConfig.isProcessing}
        onConfirm={handleConfirm}
        onCancel={handleCancel}
      />
    </ConfirmContext.Provider>
  );
}

export function useConfirm() {
  const context = useContext(ConfirmContext);
  if (!context) {
    throw new Error('useConfirm must be used within a ConfirmProvider');
  }
  return context;
}
