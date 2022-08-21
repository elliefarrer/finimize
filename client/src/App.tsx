import React from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { SavingGoal } from './containers'
import { SavingGoalContextProvider } from './context';
import { DefaultLayout } from './components'
import theme from './styles/theme';
import GlobalStyle from './styles/globalStyle';

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <DefaultLayout>
                <SavingGoalContextProvider>
                    <SavingGoal />
                </SavingGoalContextProvider>
            </DefaultLayout>
        </ThemeProvider>
    )
}

export default App
