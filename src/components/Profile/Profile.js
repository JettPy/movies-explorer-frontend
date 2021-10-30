import React from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import './Profile.css';

function Profile() {

  const currentUser = React.useContext(CurrentUserContext);

  const [name, setName] = React.useState(currentUser.name);
  const [email, setEmail] = React.useState(currentUser.email);

  React.useEffect(() => {
    setName(currentUser.name);
    setEmail(currentUser.email);
  }, [currentUser]);

  const handleInputName = (event) => {
    setName(event.target.value);
  }

  const handleInputEmail = (event) => {
    setEmail(event.target.value);
  }

  const submit = (event) => {
    event.preventDefault();
    console.log('Отправлено!');
  };

  return (
    <main className="profile">
      <h1 className="profile__title">{'Привет, ' + currentUser.name + '!'}</h1>
      <form className="profile__form" name="profile" onSubmit={submit}>
        <fieldset className="profile__set">
          <label className="profile__label" htmlFor="name-input">
            Имя
            <input
              className="profile__input"
              type="text"
              name="name"
              id="name-input"
              value={name || ''}
              onChange={handleInputName}
            />
          </label>
          <label className="profile__label" htmlFor="email-input">
            E&#8209;mail
            <input
              className="profile__input"
              type="email"
              name="email"
              id="email-input"
              value={email || ''}
              onChange={handleInputEmail}
            />
          </label>
          <button className="profile__button button" type="submit">Редактировать</button>
        </fieldset>
      </form>
      <button className="profile__exit button" type="button">Выйти из аккаунта</button>
    </main>
  );
}

export default Profile;
