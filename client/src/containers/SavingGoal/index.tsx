import React, { useContext } from 'react';
import { Container, Box } from '@mui/material';
import { SavingGoalForm, LineChart } from '../../components';
import { SavingGoalContext } from '../../context';

const SavingGoal = () => {
    const { yearlySavingPrediction } = useContext(SavingGoalContext)

    return (
        <Container>
            <Box pt={4}>
                <SavingGoalForm />

                {!!yearlySavingPrediction.length && (
                    <LineChart
                        title="Savings Over time"
                        xAxisData={yearlySavingPrediction.map((dataPoint) => dataPoint.year)}
                        yAxisData={yearlySavingPrediction.map((dataPoint) => dataPoint.savingAmount)}
                        xLabel="Years"
                        yLabel="Amount (£)"
                    />
                )}
            </Box>
        </Container>
    )
}

export default SavingGoal;