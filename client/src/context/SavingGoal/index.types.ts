import { YearlySavingPrediction } from '../../types/savingGoal';

export type SavingGoalContextReturnValue = {
    yearlySavingPrediction: Array<YearlySavingPrediction>;
    setYearlySavingPrediction: (newPrediction: Array<YearlySavingPrediction>) => void;
}
