function PopupWithForm({ name, title, children, isOpen, onClose }) {
    return (
        <>
            <div className={`popup popup_profile_${name} ${isOpen && 'popup_opened'}`}>
                <div className="popup__container">
                    <button
                        className="popup__button-closed"
                        type="button"
                        aria-label="Close"
                        onClick={onClose}
                    />
                    <h3 className="popup__form-text">{`${title}`}</h3>
                    <form className="popup__form" name={`popup__form_${name}`} >
                        {children}
                    </form>
                </div>
            </div>
        </>
    )
}

export default PopupWithForm;