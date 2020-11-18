import React from 'react'

export default function Banner({ children, title, subtitle }) {
    return ( <
        div className = "banner" >
        <
        h1 > { title } < /h1> <
        div > < /div> <
        p > { subtitle } < /p> { children } < /
        div >
    )
}



/* children je sve ono sto ulazi u baner u nekoj kompon
enti kad se pravi. Kao npr u Home.js. Gdje je title, pa subtitle
a link to, button to je ovo children*/