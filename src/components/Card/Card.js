import React from 'react'
import './Card.css'

const Card = () => {
    return (
        <div className="card">
            <div className="card__box">
                <div className="card__image">
                    <img src="https://colorlib.com/wp/wp-content/uploads/sites/2/blank-website-templates.jpg" alt=""/>
                </div>
                <div className="card__content">
                <h2>Title</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
            </div>
        </div>
    )
}

export default Card
