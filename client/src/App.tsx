import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { SavingGoal } from './containers'
import { DefaultLayout } from './components'
import theme from './styles/theme';
import GlobalStyle from './styles/globalStyle';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <DefaultLayout>
                <SavingGoal />
            </DefaultLayout>
        </ThemeProvider>
    )
}

export default App
