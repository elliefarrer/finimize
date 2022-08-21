import React, { useContext } from 'react';
import { useFormik } from 'formik';
import { Typography, Button, Box } from '@mui/material';
import axios from 'axios';
import * as Yup from 'yup';
import { SavingGoalContext } from '../../context';
import { FormInput } from '..';
import { StyledFormContainer } from './index.styled';

const SavingGoalForm = () => {
    const { setYearlySavingPrediction } = useContext(SavingGoalContext);
    const { handleSubmit, handleChange, errors, touched } = useFormik({
        initialValues: {
            initialSavingsAmount: undefined,
            monthlySavingsAmount: undefined,
            yearlyInterestRate: undefined
        },
        onSubmit: (values) => {
            axios.post(`http://localhost:3001/api/saving-goals`, {
                ...values,
                yearlyInterestRate: values.yearlyInterestRate ? parseFloat(values.yearlyInterestRate) : undefined,
            })
                .then(({ data }) => setYearlySavingPrediction(data))
                .catch((err) => console.log('err', err))
        },
        validationSchema: Yup.object().shape({
            initialSavingsAmount: Yup.number().required('Please enter the amount you\'re starting with'),
            monthlySavingsAmount: Yup.number().required('Please enter the amount you\'re saving each month'),
            yearlyInterestRate: Yup.string().required('Please enter the yearly interest rate').test('yearlyInterestRate', 'Please enter a valid yearly interest rate', (val) => !isNaN(val as any))
        })
    })

    return (
        <StyledFormContainer>
            <Box mb={5}>
                <Typography variant="h1" component="h1">Saving goals</Typography>
            </Box>
            <form onSubmit={handleSubmit}>
                <FormInput
                    name="initialSavingsAmount"
                    label="Amount you're starting with (£)"
                    handleChange={handleChange}
                    error={touched.initialSavingsAmount && errors.initialSavingsAmount}
                />

                <FormInput
                    name="monthlySavingsAmount"
                    label="Amount you're saving each month (£)"
                    handleChange={handleChange}
                    error={touched.monthlySavingsAmount && errors.monthlySavingsAmount}
                />

                <FormInput
                    name="yearlyInterestRate"
                    label="Yearly interest (%)"
                    handleChange={handleChange}
                    type="text"
                    error={touched.yearlyInterestRate && errors.yearlyInterestRate}
                />

                <Button type="submit" variant="outlined">Calculate my saving prediction</Button>
            </form>
        </StyledFormContainer>
    )
}

export default SavingGoalForm
