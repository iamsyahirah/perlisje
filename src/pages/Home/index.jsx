import React, { useEffect, useState } from 'react'
import FilterPanel from '../../components/Home/FilterPanel'
import SearchBar from '../../components/Home/SearchBar'
import List from '../../components/Home/List'
import './styles.css';
import { dataList } from '../../constants';

const Home = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedRating, setSelectedRating] = useState(null);
    const [selectedPrice, setSelectedPrice] = useState([50, 5000]);
    const [list, setList] = useState(dataList);

    const [cuisines, setCuisines] = useState([
        {
            id: 1,
            checked: false,
            label: 'American',
        },
        {
            id: 2,
            checked: false,
            label: 'Melayu',
        },
        {
            id: 3,
            checked: false,
            label: 'Chinese'
        },


    ])

    const handleSelectCategory = (event, value) => !value ? null : setSelectedCategory(value);

    const handleSelectRating = (event, value) => !value ? null : setSelectedRating(value);

    const handleChangeChecked = id => {
        const cuisinesStateList = cuisines;
        const changeCheckedCuisines = cuisinesStateList.map((item) => item.id === id ? { ...item, checked: !item.checked } : item
        );

        setCuisines(changeCheckedCuisines);
    }

    const handleChangePrice = (event, value) => setSelectedPrice(value);

    const applyFilters = () => {
        let updatedList = dataList;

        //Rating Filter
        if (selectedRating) {
            updatedList = updatedList.filter(
                (item) => parseInt(item.rating) === parseInt(selectedRating)
            );
        }

        // Category Filter
        if (selectedCategory) {
            updatedList = updatedList.filter(
                (item) => item.category === selectedCategory
            );
        }

        // Cuisine Filter
        const cuisineChecked = cuisines
            .filter((item) => item.checked)
            .map((item) => item.label.toLowerCase());

        if (cuisineChecked.length) {
            updatedList = updatedList.filter(item =>
                cuisineChecked.includes(item.cuisine));
        }

        // Price Filter
        const minPrice = selectedPrice[0];
        const maxPrice = selectedPrice[1];

        updatedList = updatedList.filter(
            (item) => item.price >= minPrice && item.price <= maxPrice
        );

        setList(updatedList);
    };

    useEffect(() => {
        applyFilters();
    }, [selectedRating, selectedCategory, cuisines, selectedPrice])

    return (
        <div className='home'>
            {/* Search Bar */}
            <SearchBar />
            <div className='home_panelList-wrap'>
                <div className='home_panel-wrap'>
                    {/* Side Panels */}
                    <FilterPanel
                        selectToggle={handleSelectCategory}
                        selectedCategory={selectedCategory}
                        selectRating={handleSelectRating}
                        selectedRating={selectedRating}
                        cuisines={cuisines}
                        changeChecked={handleChangeChecked}
                        selectedPrice={selectedPrice}
                        changedPrice={handleChangePrice}

                    />
                </div>

                <div className='home_list-wrap'>
                    {/* List & Empty View */}
                    <List list={list} />
                </div>
            </div>
        </div>
    )
}

export default Home