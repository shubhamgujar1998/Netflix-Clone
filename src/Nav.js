import React, { useState, useEffect } from 'react'
import './Nav.css'

function Nav() {

    const [show, handleShow] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", function(){
            if (window.scrollY > 100){
                handleShow(true);
            } 
            else handleShow(false)
        })
        return () => {
            window.removeEventListener("scroll");
        }
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo" src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Logo.png"  alt="Netflix Logo"/>

            <img className="nav_avatar" src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png"  alt="Netflix Avatar"/>

            
        </div>
    )
}

export default Nav
