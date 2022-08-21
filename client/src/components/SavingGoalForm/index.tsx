import React from 'react';
import { useFormik } from 'formik';
import { Typography, Button } from '@mui/material';
import { FormInput } from '..';

const SavingGoalForm = () => {
    const { handleSubmit, handleChange } = useFormik({
        initialValues: {
            initialSavingsAmount: 0,
            monthlySavingsAmount: 0,
            yearlyInterestRate: 0
        },
        onSubmit: (values) => console.log('values', values)
    })

    return (
        <>
            <Typography variant="h1" component="h1">Saving goals</Typography>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name="initialSavingsAmount"
                    label="Amount you're starting with (£)"
                    handleChange={handleChange}
                />

                <FormInput
                    name="monthlySavingsAmount"
                    label="Amount you're saving each month (£)"
                    handleChange={handleChange}
                />

                <FormInput
                    name="yearlyInterestRate"
                    label="Yearly interest (%)"
                    handleChange={handleChange}
                />

                <Button type="submit" variant="outlined">Calculate my saving prediction</Button>
            </form>
        </>
    )
}

export default SavingGoalForm
