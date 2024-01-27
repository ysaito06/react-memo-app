import { useState } from 'react';

export const useRegisterModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const open = () => {
    setIsOpen(true);
  };
  const close = () => {
    setIsOpen(false);
  };
  return {
    open,
    close,
    isOpen,
  };
};
