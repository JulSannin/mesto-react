import React from "react";

function Card({ name, link, likes, onCardClick }) {

    function handleClickCard() {
        onCardClick({ name, link });
    }

    return (
        <div className="elements__item">
            <img className="elements__photo" src={link} title={name} alt={name} onClick={handleClickCard} />
            <button
                className="elements__deleted-button"
                type="button"
                aria-label="Delete card"
            />
            <div className="elements__card">
                <h2 className="elements__place-name">{name}</h2>
                <div className="element__like-container">
                    <button
                        className="elements__like-button"
                        type="button"
                        aria-label="Like"
                    />
                    <p className="elements__like-counter">{likes.length}</p>
                </div>
            </div>
        </div>
    )
}

export default Card;