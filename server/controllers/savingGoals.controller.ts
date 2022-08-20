import { Request, Response, NextFunction } from 'express';
const { getCurrentYear } = require('../utils/date');

const postSavingGoal = async (req: Request, res: Response, next: NextFunction) => {
    const returnObject = Array.from({ length: 50 }).map((_, i) => {
        const yearIndex = i + 1;

        // TODO: calculate this properly
        return {
            year: getCurrentYear() + yearIndex,
            savingAmount: yearIndex * 2
        }
    })

   res.json(returnObject);
   next();
}

module.exports = { postSavingGoal };