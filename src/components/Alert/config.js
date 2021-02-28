export const alertVariants = {
  error: 'error',
  success: 'success',
  warning: 'warning',
  info: 'info',
};

export const variantsMapping = {
  [alertVariants.error]: {
    icon: 'warningInCircle',
    color: 'error',
  },
  [alertVariants.success]: {
    icon: 'checkInCircle',
    color: 'success',
  },
  [alertVariants.warning]: {
    icon: 'warningInCircle',
    color: 'warning',
  },
  [alertVariants.info]: {
    icon: 'warningInCircle',
    color: 'info',
  },
};
