import { Checkbox, FormControlLabel } from '@mui/material'
import { styled } from '@mui/material/styles';
import React from 'react'

const StyledFormControlLabel = styled(FormControlLabel)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 0,
    '& .MuiFormControlLabel-label': {
        fontSize: '.8rem',
        fontFamily: `'Raleway', sans-serif`,
    },
}));

const StyledCheckbox = styled(Checkbox)(({ theme }) => ({
    color: theme.palette.text.secondary,
    '&.Mui-checked': {
        color: '#000',
    },
}));


const CheckboxProton = ({ changeChecked, cuisine }) => {
    const { checked, label, id } = cuisine;

    return (
        <div>
            <StyledFormControlLabel
                control={
                    <StyledCheckbox
                        size='small'
                        checked={checked}
                        onChange={() => changeChecked(id)}
                        inputProps={{ 'aria-label': 'checkbox with small size' }}
                    />
                }
                label={label}
            />
        </div>
    );
};

export default CheckboxProton;