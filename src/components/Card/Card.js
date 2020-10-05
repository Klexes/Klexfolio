import { Button } from '@material-ui/core'
import React from 'react'
import './Card.css'

const Card = ({ title, liveSite, githubRepo}) => {
    return (
        <div className="card">
            <div className="card__box">
                <div className="card__image">
                    <img src="https://cdn.dribbble.com/users/702789/screenshots/12873245/media/9ea9518b80ac239d7b87fcd0e8d2ad94.png" alt=""/>
                </div>
                <div className="card__content">
                <h2>Project Name</h2>
                <div className="card__options">
                    <Button className="live-button">Live site</Button>
                    <Button className="repo-button">Github Repo</Button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Card
