export interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export interface ModalOverlayProps {
  onClose: () => void;
}