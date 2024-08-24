import React from 'react'
import { styled } from '@mui/material/styles';
import Slider from '@mui/material/Slider';

const StyledSliderContainer = styled('div')({
    width: '100%',
});

const StyledSlider = styled(Slider)(({ theme }) => ({
    '& .MuiSlider-thumb': {
        color: '#000',
    },
    '& .MuiSlider-rail': {
        color: 'rgba(0, 0, 0, 0.26)',
    },
    '& .MuiSlider-track': {
        color: '#000',
    },
}));

const SliderProton = ({ value, changedPrice }) => {
    return (
        <StyledSliderContainer>
            <StyledSlider
                value={value}
                onChange={changedPrice}
                valueLabelDisplay='on'
                min={50}
                max={1000}
            />
        </StyledSliderContainer>
    );
};

export default SliderProton;