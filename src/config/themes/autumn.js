export default {
    colors: {
        base: '#25252D', // primary background color
        baseContrast: '#F9F9F9', // secondary background color

        primary: '#FFCB0E', // for elements background or color
        primaryHighlight: '#DEB212', // for highlighting elements with primary color during interactions
        primaryContrast: '#FFFFFF',

        secondary: '#4B4C50', // accent color for elements background or color
        secondaryHighlight: '#37373B', // for highlighting elements with secondary color during interactions
        secondaryContrast: '#FFFFFF',

        neutral: '#E0E0E0', // neutral color
        text: '#414346', // neutral text color

        disabled: '#FAFAFA',
        disabledContrast: '#B4B4B4',

        error: '#FEDCDC',
        errorContrast: '#F65150',
        success: '#D5EED4',
        successContrast: '#23A82F',
        warning: '#FBF3CE',
        warningContrast: '#DEB212',
        info: '#86BAFC',
        infoContrast: '#659FE8',
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
            color: '#B4B4B4',
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
