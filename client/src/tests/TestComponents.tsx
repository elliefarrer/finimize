import React, { FC, useState } from 'react';
import { SavingGoalContext } from "../context";
import { YearlySavingPrediction } from '../types/savingGoal';

const TestSavingGoalContextProvider: FC<{
    testData?: Array<YearlySavingPrediction>
}> = ({ testData = [], children }) => {
    const [yearlySavingPrediction, setYearlySavingPrediction] = useState<Array<YearlySavingPrediction>>(testData);

    return (
        <SavingGoalContext.Provider
            value={{
                yearlySavingPrediction,
                setYearlySavingPrediction
            }}
        >
            {children}
        </SavingGoalContext.Provider>
    );
}

export default TestSavingGoalContextProvider;