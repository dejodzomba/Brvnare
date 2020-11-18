import React from 'react';
import Hero from "../components/Hero";
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms'
import Informacije from '../components/Informacije';


export default function Home() {
    return < >
        <
        Hero hero = "defaultHero" >
        <
        Banner title = "apartmani brvnare"
    subtitle = "Pogledajte apartmane" >

        <
        Link to = "/rooms"
    className = "btn-primary" >
        our apartments <
        /Link> < /
    Banner >
        <
        /Hero> <
    Services / >

        <
        FeaturedRooms / >

        <
        Informacije / >

        <
        />
}