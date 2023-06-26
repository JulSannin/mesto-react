import React from 'react';
import { api } from "../utils/Api";
import Card from "./Card";

function Main({ onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {

    const [userName, setUserName] = React.useState('');
    const [userDescription, setUserDescription] = React.useState('');
    const [userAvatar, setUserAvatar] = React.useState('');
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api
            .getUser()
            .then((res) => {
                setUserName(res.name);
                setUserDescription(res.about);
                setUserAvatar(res.avatar);
            })
            .catch(console.error);
    }, []);

    React.useEffect(() => {
        api
            .getInitialCards()
            .then((res) => {
                setCards([...res]);
            })
            .catch(console.error);
    }, []);

    return (
        <main className="content">
            <section className="profile">
                <div className="profile__avatar">
                    <img
                        className="profile__avatar-image"
                        src={userAvatar}
                        title="Фото профиля"
                        alt="Фото профиля"
                    />
                    <button
                        className="profile__avatar-edit-button"
                        type="button"
                        title="Обновить аватар"
                        aria-label="Open popup editing-img-profile"

                        onClick={onEditAvatar}
                    >
                        <div className="profile__avatar-edit-icon" />
                    </button>
                </div>
                <div className="profile__info">
                    <div className="profile__description">
                        <h1 className="profile__author">{userName}</h1>
                        <p className="profile__competention">{userDescription}</p>
                    </div>
                    <button
                        className="profile__edit-button"
                        type="button"
                        aria-label="Open popup editing-profile"
                        onClick={onEditProfile}
                    />
                </div>
                <button
                    className="profile__add-button"
                    type="button"
                    aria-label="Open popup adding-card"
                    onClick={onAddPlace}
                />
            </section>
            <section className="elements">
                {cards.map((item) => (
                    <Card
                        name={item.name}
                        link={item.link}
                        likes={[...item.likes]}
                        onCardClick={onCardClick}
                        key={item._id}
                    />
                ))}
            </section>
        </main>
    )
}

export default Main;