import {createTheme} from '@material-ui/core/styles';

export const theme = createTheme({
    palette: {
        primary: {
            contrastText: "white",
            main: "#005981",
        },
        secondary: {
            contrastText: "white",
            main: "#D4A656",
        },
        background: {
            main: "white",
        },
        text: {
            primary: "#005981",
            secondary: "black",
        }
    },
    overrides: {
        MuiTextField: {
            root: {width: "100%"}
        },
        MuiInputBase: {
            root: {
                border: "1px solid #EFF0F7",
                boxShadow: "0px 2px 6px rgba(19, 18, 66, 0.07)",
            },
            input: {
                "&::placeholder": {
                    color: "var(--theme-placeholder-color)",
                    opacity: 1,
                    fontFamily: 'Axiform-regular',
                    fontWeight: 400,
                },
            }
        },
        MuiInput: {
            input: {
                padding: 'calc(var(--theme-font)) calc(2*var(--theme-font))',
            },
        },
        MuiOutlinedInput: {
            root: {
                background: "white",
                borderRadius: "var(--theme-border-radius-2)",
            },
            notchedOutline: {
                borderStyle: 'none',
            }
        },
        MuiTypography: {
            h2: {
                fontSize: '2.25rem',    // 36px / 16px = 2.25rem
                lineHeight: '3.6rem',    // 57.6px / 16px = 3.6rem
                fontFamily: 'Axiform-bold',
                textTransform: 'capitalize',
                color: 'black'
            },
            h4: {
                fontSize: '1.5625rem',  // 25px / 16px = 1.5625rem
                lineHeight: '2.5rem',    // 40px / 16px = 2.5rem
                fontFamily: 'Axiform-bold',
                textTransform: 'capitalize',
                color: 'black'
            },
            h3: {
                fontWeight: 500,
                fontSize: '1.125rem',    // 18px / 16px = 1.125rem
                lineHeight: '1.8rem',    // 28.8px / 16px = 1.8rem
                textTransform: 'capitalize',
                color: 'black'
            },
            subtitle1: {
                fontFamily: 'Axiform-regular',
                fontSize: '1.125rem',    // 18px / 16px = 1.125rem
                lineHeight: '1.8rem',    // 28.8px / 16px = 1.8rem
                textTransform: 'capitalize',
                color: '#1D2B4F',
                fontWeight: 600,
            },
            subtitle2: {
                fontFamily: 'Axiform-regular',
                fontSize: '0.75rem',     // 12px / 16px = 0.75rem
                lineHeight: '1.5rem',    // 24px / 16px = 1.5rem
                textTransform: 'capitalize',
                color: 'black',
                fontWeight: 400,
                whiteSpace: "nowrap"
            }
        },
        MuiButton: {
            containedPrimary: {
                borderRadius: '0.4rem'
            },
            containedSecondary: {
                padding: '16px 56px',
                border: ' 2px solid #D4A656',
                borderRadius: '10px',
            }
        }
    },
});