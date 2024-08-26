import React from 'react'
import FilterListToggle from '../../common/FilterListToggle'
import { categoryList, ratingList } from '../../../constants'
import './styles.css';
import CheckboxProton from '../../common/CheckboxProton';
import SliderProton from '../../common/SliderProton';


const FilterPanel = ({
    selectedCategory,
    selectToggle,
    selectedRating,
    selectRating,
    cuisines,
    changeChecked,
    selectedPrice,
    changedPrice
}) => {
    return (
        <div>
            {/* Category */}
            <div className='input-group'>
                <p className='label'>Kategori</p>
                <FilterListToggle
                    options={categoryList}
                    value={selectedCategory}
                    selectToggle={selectToggle} />
            </div>
            { /* Cuisines */}
            <div className='input-group'>
                <p className='label'>Jenis Makanan</p>
                {cuisines.map(cuisine =>
                    <CheckboxProton key={cuisine.id} cuisine={cuisine} changeChecked={changeChecked} />)}
            </div>
            { /* Price Range */}
            <div className='input-group'>
                <p className='label-range'>Harga</p>
                <SliderProton
                    value={selectedPrice}
                    changedPrice={changedPrice}
                />
            </div>
            { /* Star Rating */}
            <div className='input-group'>
                <p className='label'>Star Rating</p>
                <FilterListToggle
                    options={ratingList}
                    value={selectedRating}
                    selectToggle={selectRating}
                />
            </div>
        </div>
    )
}

export default FilterPanel