import React from 'react';

const Hero = ({ children, hero }) => {
    return <header className = { hero } > { children } < /header>

};

export default Hero;

Hero.defaulProps = {
    hero: "defaultHero"
};



/*Ovdje dva props, children sve ono sto upada pod <Hero>**ovdje izmedju </Hero>
   tako u Home.js. Ovo hero e  */