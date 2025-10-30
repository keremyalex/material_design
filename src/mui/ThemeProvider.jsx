import React, { createContext, useContext, useMemo, useState } from 'react'
import { ThemeProvider as MUIThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const ColorModeContext = createContext({ toggleColorMode: () => { } })

export function useColorMode() {
    return useContext(ColorModeContext)
}

export default function ThemeProvider({ children }) {
    const [mode, setMode] = useState('light')

    const colorMode = useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prev) => (prev === 'light' ? 'dark' : 'light'))
            },
        }),
        [],
    )

    const theme = useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    primary: {
                        main: '#6200ee',
                    },
                    secondary: {
                        main: '#03dac6',
                    },
                },
                typography: {
                    fontFamily: 'Roboto, Arial, sans-serif',
                },
            }),
        [mode],
    )

    return (
        <ColorModeContext.Provider value={colorMode}>
            <MUIThemeProvider theme={theme}>
                <CssBaseline />
                {children}
            </MUIThemeProvider>
        </ColorModeContext.Provider>
    )
}
