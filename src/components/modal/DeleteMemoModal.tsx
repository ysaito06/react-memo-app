import React from 'react';

interface Props {
  onClose: () => void;
}

export const DeleteMemoModal = ({ onClose }: Props) => {
  return <div onClick={onClose}>delete memo modal</div>;
};
