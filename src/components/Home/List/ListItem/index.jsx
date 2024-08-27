import React from 'react'
import './styles.css';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';

const ListItem = ({
    item: { coverSrc, title, price, township, rating, url } }) => {
    return (
        <div className="listItem-wrap">
            <img src={coverSrc} alt="item" />
            <header>
                <h3>{title}</h3>
                <span>{rating} ⭐️</span>
            </header>
            <footer>
                <p>
                    <b>{township}</b>
                    {/*<span> | Harga bermula RM <b> {price}</b></span>*/}
                </p>
                <p>

                    <a href={url} target="_blank">
                        <LocationOnTwoToneIcon></LocationOnTwoToneIcon>
                    </a>
                </p>

            </footer>
        </div>
    )
}

export default ListItem