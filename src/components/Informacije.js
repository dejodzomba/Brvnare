import React, { Component } from 'react';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaPhoneAlt, FaFacebookSquare } from 'react-icons/fa';
import Title from '../components/Title';

export default class Informacije extends Component {
    state = {
        services: [{
                icon: < FaPhoneAlt / > ,
                title: "Kontakt Telefon",
                info: "+38765835456 / +38765311664"
            },
            {
                icon: < FaFacebookSquare / > ,
                title: "Facebook Profil",
                info: "Apartmani “Brvnare” Trebinje"
            },
            {
                icon: < FaInstagramSquare / > ,
                title: "Instagram Profil",
                info: " @apartmani_brvnare"
            }
        ]
    };


    render() {

        return (

            <
            section className = "services" >


            <
            Title title = "Kontakt" / >


            <
            div className = "services-center" > {
                this.state.services.map((item, index) => {
                    return (

                        <
                        article key = { index }
                        className = "service" >


                        <
                        span > { item.icon } < /span>  <
                        h6 > { item.title } < /h6> <
                        p > { item.info } < /p>

                        <
                        /article >
                    );


                })
            } <
            /div>    < /
            section >
        );
    }
}