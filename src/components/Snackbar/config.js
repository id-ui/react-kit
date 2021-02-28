export const snackbarVariants = {
  error: 'error',
  success: 'success',
  warning: 'warning',
  info: 'info',
};

export const variantsMapping = {
  [snackbarVariants.error]: {
    icon: 'warningInCircle',
    color: 'error',
  },
  [snackbarVariants.success]: {
    icon: 'checkInCircle',
    color: 'success',
  },
  [snackbarVariants.warning]: {
    icon: 'warningInCircle',
    color: 'warning',
  },
  [snackbarVariants.info]: {
    icon: 'warningInCircle',
    color: 'info',
  },
};
