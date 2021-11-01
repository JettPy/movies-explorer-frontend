import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import './Profile.css';

function Profile({ onSignOut }) {

  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState(currentUser.name);
  const [isNameValid, setIsNameValid] = React.useState(true);
  const [nameValidationMessage, setNameValidationMessage] = React.useState('');
  const [email, setEmail] = React.useState(currentUser.email);
  const [isEmailValid, setIsEmailValid] = React.useState(true);
  const [emailValidationMessage, setEmailValidationMessage] = React.useState('');
  const [isFormValid, setIsFormValid] = React.useState(true);

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  React.useEffect(() => {
    setIsFormValid(isNameValid && isEmailValid);
  }, [isNameValid, isEmailValid]);

  const handleInputName = (event) => {
    setName(event.target.value);
    setIsNameValid(event.target.checkValidity());
    setNameValidationMessage(event.target.validationMessage);
  }

  const handleInputEmail = (event) => {
    setEmail(event.target.value);
    setIsEmailValid(event.target.checkValidity());
    setEmailValidationMessage(event.target.validationMessage);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Отправлено!');
  };

  return (
    <main className="profile">
      <h1 className="profile__title">{'Привет, ' + currentUser.name + '!'}</h1>
      <form className="profile__form" name="profile" onSubmit={handleSubmit}>
        <fieldset className="profile__set">
          <label className="profile__label">
            Имя
            <input
              className={`profile__input${!isNameValid ? ' error__input' : ''}`}
              type="text"
              name="name"
              placeholder="Как вас зовут?"
              value={name || ''}
              onChange={handleInputName}
              minLength="2"
              required
            />
          </label>
          <span className="error__span">{nameValidationMessage}</span>
          <label className="profile__label">
            E&#8209;mail
            <input
              className={`profile__input${!isEmailValid ? ' error__input' : ''}`}
              type="email"
              name="email"
              placeholder="email@example.ru"
              value={email || ''}
              onChange={handleInputEmail}
              required
            />
          </label>
          <span className="error__span">{emailValidationMessage}</span>
          <button className="profile__button button" type="submit" disabled={!isFormValid}>Редактировать</button>
        </fieldset>
      </form>
      <button className="profile__exit button" type="button" onClick={onSignOut}>Выйти из аккаунта</button>
    </main>
  );
}

export default Profile;
