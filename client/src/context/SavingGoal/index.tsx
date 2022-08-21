import React from 'react';
import { createContext, useState, FC } from 'react';
import { YearlySavingPrediction } from '../../types/savingGoal';
import { SavingGoalContextReturnValue } from './index.types';

export const SavingGoalContext = createContext<SavingGoalContextReturnValue>({
    yearlySavingPrediction: [],
    setYearlySavingPrediction: () => []
});

export const SavingGoalContextProvider: FC = ({
    children
}) => {
    const [yearlySavingPrediction, setYearlySavingPrediction] = useState<Array<YearlySavingPrediction>>([]);

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
};
