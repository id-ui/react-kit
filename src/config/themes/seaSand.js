export default {
  colors: {
    base: '#ffe9c6', // primary background color
    baseContrast: '#000000', // secondary background color

    primary: '#0ba3dd', // for elements background or color
    primaryHighlight: '#056688', // for highlighting elements with primary color during interactions
    primaryContrast: '#ffffff',

    secondary: '#ebbe79', // accent color for elements background or color
    secondaryHighlight: '#ca923a', // for highlighting elements with secondary color during interactions
    secondaryContrast: '#ffffff',

    neutral: '#e0e0e0', // neutral color
    text: '#606266', // neutral text color

    disabled: '#FAFAFA',
    disabledContrast: '#B4B4B4',

    error: '#FDDCDC',
    errorContrast: '#F45151',
    success: '#CAFFBF',
    successContrast: '#6de957',
    warning: '#FDFFB6',
    warningContrast: '#ffe32b',
    info: '#9BF6FF',
    infoContrast: '#44cfdd',
  },

  typography: {
    title: '700 2rem/2.4rem Montserrat, sans-serif',
    subtitle: '500 1.6rem/2rem Montserrat, sans-serif',
    body: '500 1.4rem/1.8rem Montserrat, sans-serif',
    button: '500 1.4rem/1.8rem Montserrat, sans-serif',
    caption: '500 1.2rem/1.4rem Montserrat, sans-serif',
    label: '500 1.4rem/1.8rem Montserrat, sans-serif',
    input: '500 1.4rem/2rem Montserrat, sans-serif',
  },

  shape: {
    primary: '0.5rem',
    secondary: '3rem',
  },

  border: {
    default: {
      width: '0.1rem',
      style: 'solid',
      color: '#D6D6D6',
    },
  },

  shadow: {
    primary: '0 0.2rem 1.2rem rgba(0, 0, 0, 0.06)',
    secondary:
        '0 0.1rem 1.7rem rgba(0, 0, 0, 0.03), 0 1.3rem 2.8rem rgba(0, 0, 0, 0.06)',
  },

  transition: {
    default: '0.3s ease-in-out',
  },

  highlightPercent: 0.3,
};
