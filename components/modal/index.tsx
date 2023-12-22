import React, { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded-md shadow-lg w-11/12 md:w-2/3 lg:w-1/2">
        <button
          onClick={onClose}
          className="text-white bg-seafoam hover:bg-link focus:outline-none focus:ring-2 focus:ring-seafoam focus:ring-opacity-50 rounded-sm font-semibold text-lg p-0 px-2 ml-auto"
        >
          X
        </button>
        <div className="overflow-auto">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;