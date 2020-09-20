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
                <button>Live Site</button>
                </div>
            </div>
        </div>
    )
}

export default Card
