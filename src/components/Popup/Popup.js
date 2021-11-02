import successImg from '../../images/success.svg';
import rejectImg from '../../images/reject.svg';
import './Popup.css';

function Popup({ isPopupOpen, onClose, isSuccess, message }) {
  return (
    <div className={`overlay popup__overlay ${isPopupOpen ? ' overlay_opened' : ''}`}>
      <div className="popup">
        <button className="popup__close button" aria-label="Закрыть" type="button" onClick={onClose}></button>
        <img className="popup__image" src={isSuccess ? successImg : rejectImg} alt={isSuccess ? 'Успех' : 'Ошибка'} />
        <h2 className="popup__title">
          {isSuccess ? 'Успех!' : message}
        </h2>
      </div>
    </div>
  );
}

export default Popup;
