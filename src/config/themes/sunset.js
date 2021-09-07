export default {
  colors: {
    base: '#ffffff', // primary background color
    baseContrast: '#000000', // secondary background color

    primary: '#14213D', // for elements background or color
    primaryHighlight: '#070e1f', // for highlighting elements with primary color during interactions
    primaryContrast: '#ffffff',

    secondary: '#FCA311', // accent color for elements background or color
    secondaryHighlight: '#9d6200', // for highlighting elements with secondary color during interactions
    secondaryContrast: '#ffffff',

    neutral: '#e0e0e0', // neutral color
    text: '#606266', // neutral text color

    disabled: '#FAFAFA',
    disabledContrast: '#B4B4B4',

    error: '#d22020',
    errorContrast: '#ffffff',
    success: '#0a8f0b',
    successContrast: '#ffffff',
    warning: '#fca311',
    warningContrast: '#ffffff',
    info: '#07b2e5',
    infoContrast: '#ffffff',
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
