export default {
  colors: {
    base: '#fffffc', // primary background color
    baseContrast: '#000000', // secondary background color

    primary: '#FFADAD', // for elements background or color
    primaryHighlight: '#e26262', // for highlighting elements with primary color during interactions
    primaryContrast: '#ffffff',

    secondary: '#9BF6FF', // accent color for elements background or color
    secondaryHighlight: '#44cfdd', // for highlighting elements with secondary color during interactions
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
    warningContrast: '#e8ef3b',
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
    primary: '1rem',
    secondary: '4rem',
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
