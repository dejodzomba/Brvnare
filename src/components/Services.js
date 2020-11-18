import React, { Component } from 'react'
import { FcWiFiLogo } from "react-icons/fc";
import { GiBarbecue, GiCctvCamera } from 'react-icons/gi'
import { FiWifi } from 'react-icons/fi';
import Title from './Title';



export default class Services extends Component {
    state = {
        services: [{
                icon: < FiWifi / > ,
                title: "Besplatan Internet",
                info: 'Korišćenje besplatnog interneta!'
            },
            {
                icon: < GiCctvCamera / > ,
                title: "Video Nadzor",
                info: 'Obezbjeđen video nadzor!'
            },
            {
                icon: < GiBarbecue / > ,
                title: "Gril Roštilj",
                info: 'Mogućnost roštiljanja!'
            }
        ]
    };


    render() {

        return ( <
            section className = "services" >

            <
            Title title = "Usluge" / >

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
                        /
                        article >
                    );


                })
            } <
            /div>  <
            /
            section >
        );
    }
}