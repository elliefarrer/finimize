import React from 'react';
import { Container, Box } from '@mui/material';
import { SavingGoalForm, LineChart } from '../../components';

// Note: This is just for example purposes
// should be replaced with real data from the backend
const tempData = {
    xAxis: [0, 1, 2, 3, 4, 5],
    yAxis: [100, 150, 180, 210, 240, 350],
}

const SavingGoal = () => (
    <Container>
        <Box pt={4}>
            <SavingGoalForm />
            <LineChart
                title="Savings Over time"
                xAxisData={tempData.xAxis}
                yAxisData={tempData.yAxis}
                xLabel="Years"
                yLabel="Amount"
            />
        </Box>
    </Container>
)

export default SavingGoal;