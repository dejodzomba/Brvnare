import React, { Component } from 'react'
import { RoomContext } from '../context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';

//apartmani
export default class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render() {

        let { loading, featuredRooms: rooms } = this.context;
        rooms = rooms.map(room => {
            return <Room key = { room.id }
            room = { room } //ovdje sam gresku napravio ostavio rooms 
            />
        });

        return <section className = "featured-rooms" >
            <
            Title title = "Apartmani" / >
            <
            div className = "featured-rooms-center" > { loading ? < Loading / > : rooms } <
            /div>  < /
        section > ;

    }
}