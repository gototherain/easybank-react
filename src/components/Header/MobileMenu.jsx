import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const MobileMenu = () => {

const [menuState, setMenuState] = useState('close');


useEffect(() => {
    const fadeElems = document.querySelectorAll('.has-fade');

    if (menuState === 'open') {

        document.body.classList.add('noscroll');
        document.querySelector('.header').classList.add('open');

        fadeElems.forEach(function (element) {
            element.classList.remove('fade-out');
            element.classList.add('fade-in');
        });

    } else {
        document.body.classList.remove('noscroll');
        document.querySelector('.header').classList.remove('open');

        fadeElems.forEach(function (element) {
            element.classList.remove('fade-in');
            element.classList.add('fade-out');
        });
    }

}, [menuState])

const toggleMenuState = () => {
    setMenuState((currentValue) => {
        return currentValue === 'close' ? 'open' : 'close';
    });
}

    return (
        <>
            <div
         
                id="btnHamburger"
                className="header__toggle hide-for-desktop"
                onClick={toggleMenuState}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            
            <div className="header__menu has-fade" onClick={toggleMenuState}>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/blog">Blog</NavLink>
                <NavLink to="/careers">Careers</NavLink>
            </div>
        </>
    );
}

export default MobileMenu;