import React, { FC, ChangeEvent } from 'react';
import { TextField, Box } from "@mui/material";

const FormInput: FC<{
    type?: string;
    name: string;
    label: string;
    handleChange: (e: ChangeEvent<any>) => void;
    error?: string | false;
}> = ({ type = 'number', name, label, handleChange, error }) => (
    <Box mb={5}>
        <TextField
            variant="standard"
            type={type}
            name={name}
            label={label}
            onChange={handleChange}
            error={!!error}
            helperText={error}
        />
    </Box>
)

export default FormInput;
