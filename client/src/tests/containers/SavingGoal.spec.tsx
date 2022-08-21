import React from 'React';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import { SavingGoal } from '../../containers';
import TestSavingGoalContextProvider from '../TestComponents';
import { YearlySavingPrediction } from '../../types/savingGoal';

const setup = ({ testData }: { testData: Array<YearlySavingPrediction> }) => {
    return render(
        <TestSavingGoalContextProvider testData={testData}>
            <ThemeProvider theme={theme}>
                <SavingGoal />
            </ThemeProvider>
        </TestSavingGoalContextProvider>
    )
}

describe('SavingGoal', () => {
    it('should display the savingGoalForm by default', () => {
        const { getByTestId } = setup({ testData: [] });

        expect(getByTestId('savingGoalForm')).toBeInTheDocument();
    })

    it('should not display the lineChart initially', () => {
        const { queryByTestId } = setup({ testData: [] });

        expect(queryByTestId('lineChart')).not.toBeInTheDocument();
    })

    it('should display the LineChart component if there is yearlyPrediction data on context', () => {
        const { getByTestId } = setup({ testData: [
            {
                year: 2023,
                savingAmount: 100,
            },
            {
                year: 2024,
                savingAmount: 300
            }
        ] })

        expect(getByTestId('lineChart')).toBeInTheDocument();
    })
})