import React, { FC, ChangeEvent } from 'react';
import { TextField, Box } from "@mui/material";

const FormInput: FC<{
    type?: string;
    name: string;
    label: string;
    handleChange: (e: ChangeEvent<any>) => void;
}> = ({ type = 'number', name, label, handleChange }) => (
    <Box mb={5}>
        <TextField
            variant="standard"
            type={type}
            name={name}
            label={label}
            onChange={handleChange}
        />
    </Box>
)

export default FormInput;
