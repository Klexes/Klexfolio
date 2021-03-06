import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header__right">
                <img src="https://i.ibb.co/0y3yQd9/backgroundaaa.png" alt=""/>
            </div>
            <div className="header__left">
                <div className="header__leftOption">
                    Projects
                </div>
                <div className="header__leftOptionContact header__leftOption">
                    Say Hello
                </div>
            </div>
        </div>
    )
}

export default Header
