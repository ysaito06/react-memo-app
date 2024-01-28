import { useState } from 'react';

export const useDeleteModal = () => {
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
