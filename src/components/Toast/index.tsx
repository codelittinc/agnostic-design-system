import React from 'react';

import SuccessToast from '@/components/Toast/SuccessToast';
import ErrorToast from '@/components/Toast/ErrorToast';
import WarningToast from '@/components/Toast/WarningToast';

type Category = 'success' | 'error' | 'warning';
type Size = 'large';

interface Props {
  autoCloseInMilliseconds?: number;
  category: Category;
  getBody?: () => React.ReactNode;
  getCloseButton?: () => React.ReactNode;
  getIcon?: () => React.ReactNode;
  message?: string;
  onClose: () => void;
  size?: Size;
  title?: string;
  variablesClassName?: string;
}

const toasts = {
  success: SuccessToast,
  error: ErrorToast,
  warning: WarningToast
};

const Toast: React.FC<Props> = props => {
  const ToastType = toasts[props.category];

  return <ToastType {...props} />;
};

export default Toast;
