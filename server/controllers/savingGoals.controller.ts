import { Request, Response, NextFunction } from 'express';
const { getCurrentYear } = require('../utils/date');
const { getAmountWithInterest } = require('../utils/finance');

const postSavingGoal = async (req: Request, res: Response, next: NextFunction) => {

    const returnArray: Array<{
        year: number;
        savingAmount: number;
    }> = [];

    Array.from({ length: 50 }).forEach((_, i) => {
        const yearIndex = i + 1;

        const startAmount = returnArray[returnArray.length - 1]?.savingAmount || req.body.initialSavingsAmount;

        const totalWithoutInterest = startAmount + (req.body.monthlySavingsAmount * 12);

        returnArray.push({
            year: getCurrentYear() + yearIndex,
            savingAmount: getAmountWithInterest(totalWithoutInterest, req.body.yearlyInterestRate)
        })
    })

   res.json(returnArray);
   next();
}

module.exports = { postSavingGoal };