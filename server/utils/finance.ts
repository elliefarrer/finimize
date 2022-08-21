export const getAmountWithInterest = (initialValue: number, interestRate: number): number => {
    const amountWithInterest = initialValue * ((interestRate / 100) + 1);
    return Math.round(amountWithInterest * 100) / 100
}