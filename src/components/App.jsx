import React from "react";
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from "./ImagePopup";

function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  return (
    <div className="App page">
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <PopupWithForm
        name="editing-profile"
        title="Редактировать профиль"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input id="popup__input-name" className="popup__input popup__input_type_name" type="text" name="name"
              defaultValue="" placeholder="Имя автора" minLength="2" maxLength="40" required="" />
            <span id="popup__input-name-error" className="popup__error" />
            <input id="popup__input-description" className="popup__input popup__input_type_description" type="text"
              name="description" placeholder="Профессия автора" defaultValue="" minLength="2" maxLength="200"
              required="" />
            <span id="popup__input-description-error" className="popup__error" />
            <button className="popup__button-saved" type="submit" disabled="">
              Сохранить
            </button>
          </>
        }
      />
      <PopupWithForm
        name="adding-card"
        title="Новое место"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input id="popup__input-name-img" className="popup__input popup__input_type_name-img" type="text"
              name="nameImg" defaultValue="" placeholder="Название" minLength="2" maxLength="30" required="" />
            <span id="popup__input-name-img-error" className="popup__error" />
            <input id="popup__input-link-img" className="popup__input popup__input_type_link-img" type="url"
              name="linkImg" defaultValue="" placeholder="Ссылка на картинку" required="" />
            <span id="popup__input-link-img-error" className="popup__error" />
            <button className="popup__button-saved" type="submit">
              Создать
            </button>
          </>
        }
      />
      <PopupWithForm
        name="deleting-image"
        title="Вы уверены?"
        isOpen={false}
      />
      <PopupWithForm
        name="editing-avatar"
        title="Обновить аватар"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        children={
          <>
            <input id="popup__input-link-avatar" className="popup__input popup__input_type_link-avatar" type="url"
              name="linkAvatar" defaultValue="" placeholder="Ссылка на картинку" required="" />
            <span id="popup__input-link-avatar-error" className="popup__error" />
            <button className="popup__button-saved" type="submit">
              Сохранить
            </button>
          </>
        }
      />
      <ImagePopup
        card={selectedCard}
        onClose={closeAllPopups}
      />
      <Footer />
    </div>
  );
}

export default App;