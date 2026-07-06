"use client";

import { createPortal } from "react-dom";
type ModalProps = {
  children: React.ReactNode;
  onClose: () => void;
};

export function Modal({ children, onClose }: ModalProps) {
  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
      onClick={onClose}
    >
      <div
        className="bg-white p-5 rounded-lg border border-soft-slate"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.body,
  );
}
