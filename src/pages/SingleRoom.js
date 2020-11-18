import React, { Component } from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../context';
import StyledHero from '../components/StyledHero';
import apartman2 from "../images/Apartman2.jpg";



export default class SingleRoom extends Component {
    constructor(props) {
        super(props)
            //console.log(this.props)
        this.state = {
            slug: this.props.match.params.slug
                /*iz konzole props.match.params*/
        };
    }

    static contextType = RoomContext;

    //componentDidMount() {}




    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        console.log(room);

        if (!room) {
            return <div className = "error" >
                <
                h3 > Nema apartmana.. < /h3> <
            Link to = '/rooms'
            className = "btn-primary" >
                Nazad na apartmane <
                /Link> < /
            div >
        }

        const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images
        } = room;

        const [prvaslika, ...ostaleSlike] = images;
        console.log(ostaleSlike);

        return < >
            <
            StyledHero img = { prvaslika } >
            <
            Banner title = { `${name}` } >

            <
            Link to = '/rooms'
        className = "btn-primary" >
            Ostali Apartmani <
            /Link> < /
        Banner >
            <
            /StyledHero>  <
        section className = "single-room" >
            <
            div className = "single-room-images" > {
                ostaleSlike.map((item, index) => {
                    return <img key = { index }
                    src = { item }
                    alt = { name }
                    />
                })
            } <
            /div>  <
        div className = "single-room-info" >
            <
            article className = "desc" >
            <
            h3 > Detalji < /h3> <
        p > { description } < /p>  < /
        article > <
            article className = "info" >
            <
            h3 > Informacije < /h3>     <
        h6 > Cijena: { price }
        eura < /h6> <
        h6 > Kvadratura: { size }
        kvm < /h6>  <
        h6 >
            Kapacitet: { capacity }
        osobe
            <
            /h6> <
        h6 > { pets ? "Psi su dozvoljeni" : "Psi ne mogu" } <
            /h6>

        <
        /
        article > <
            /div>  < /
        section >

            <
            section className = "room-extras" >
            <
            h6 > obezbjeđeno < /h6> <
        ul className = "extras" > {
                extras.map((item, index) => {
                    return <li key = { index } > -{ item } < /li> 
                })
            } <
            /ul>     < /
        section >


            <
            />
    }
}