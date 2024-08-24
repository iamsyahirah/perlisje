import { ToggleButtonGroup, ToggleButton } from '@mui/material'
import { styled } from '@mui/material/styles';
import React from 'react'

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    width: '100%',
    justifyContent: 'space-between',
}));

const StyledToggleButton = styled(ToggleButton)(({ theme }) => ({
    fontFamily: `'Raleway', sans-serif`,
    fontSize: '.8rem',
    border: '1px solid rgba(0, 0, 0, 0.12)',
    borderRadius: '10px',
    '&.MuiToggleButtonGroup-grouped:not(:last-of-type)': {
        borderRadius: '10px',
    },
    '&.MuiToggleButtonGroup-grouped:not(:first-of-type)': {
        borderRadius: '10px',
        border: '1px solid rgba(0, 0, 0, 0.12)',
    },
    '&.Mui-selected': {
        borderRadius: '10px',
        background: '#000',
        color: '#fff',
    },
    '&:hover': {
        background: '#000',
        color: '#fff',
    },
}));

export { StyledToggleButtonGroup, StyledToggleButton };

const FilterListToggle = ({ options, value, selectToggle }) => {
    return (
        <StyledToggleButtonGroup
            value={value}
            onChange={selectToggle}
            exclusive
        >
            {options.map(({ label, id, value }) => (
                <StyledToggleButton key={id} value={value}>
                    {label}
                </StyledToggleButton>
            ))}
        </StyledToggleButtonGroup>
    );
}

export default FilterListToggle;