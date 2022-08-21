import React from 'React';
import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ThemeProvider } from 'styled-components';
import theme from '../../styles/theme';
import { SavingGoalForm } from '../../components';

const setup = () => {
    return render(
        <ThemeProvider theme={theme}>
            <SavingGoalForm />
        </ThemeProvider>
    )
}

describe('SavingGoalForm', () => {
    it('should render three form inputs and a display button', () => {
        const { getByLabelText, getByText } = setup();

        expect(getByLabelText('Amount you\'re starting with (£)')).toBeInTheDocument();
        expect(getByLabelText('Amount you\'re saving each month (£)')).toBeInTheDocument();
        expect(getByLabelText('Yearly interest (%)')).toBeInTheDocument();

        expect(getByText('Calculate my saving prediction')).toBeInTheDocument();
    })

    it('should display some form errors if the form is submitted without any user interaction', async () => {
        const { getByText } = setup();

        submitForm();

        await waitFor(() => {
            expect(getByText('Please enter the amount you\'re starting with')).toBeInTheDocument();
            expect(getByText('Please enter the amount you\'re saving each month')).toBeInTheDocument();
            expect(getByText('Please enter the yearly interest rate')).toBeInTheDocument();
        })
    })

    it('should display a form error if the yearly interest rate is not valid', async () => {
        const { getByLabelText, getByText } = setup();

        const interestField = getByLabelText('Yearly interest (%)');
        userEvent.type(interestField, 'bad');

        submitForm();

        await waitFor(() => {
            expect(getByText('Please enter a valid yearly interest rate')).toBeInTheDocument();
        })
    })
})

// Test utils
const submitForm = () => {
    const form = screen.getByTestId('form');
    fireEvent.submit(form);
}
