import React, { Component } from 'react'
import { RoomContext } from '../context';
import Loading from './Loading';
import Room from './Room';
import Title from './Title';


export default class RoomsList extends Component {
    static contextType = RoomContext;
    render() {
        let { loading, featuredRooms: rooms } = this.context;
        rooms = rooms.map(room => {
            return <Room key = { room.id }
            room = { room }
            />
        });


        return <section className = "roomslist" >
            <
            Title title = "Apartmani" / >
            <
            div className = "roomslist-center" > { loading ? < Loading / > : rooms } <
            /div> < /
        section > ;

    }
}