import React from 'react';
import { Link } from 'react-router-dom';
import apartman1 from "../images/Apartman1.jpg";
import apartman2 from "../images/Apartman2.jpg";

import PropTypes from 'prop-types';

export default function Room({ room }) {
    const { name, slug, images, price } = room;

    return (



        <
        article className = "room" >
        <
        div className = "img-container" >
        <
        img src = { images[0] }
        alt = "" / >
        <
        div className = "price-top" >
        <
        h6 > €{ price } < /h6> <
        p > Per night < /p>   < /
        div >

        <
        Link to = { `/rooms/${slug}` }
        className = "btn-primary room-link" >
        Pogledaj <
        /Link>

        <
        /div> 

        <
        /article>


    )
}

Room.propTypes = {
    room: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price: PropTypes.number.isRequired

    })

}