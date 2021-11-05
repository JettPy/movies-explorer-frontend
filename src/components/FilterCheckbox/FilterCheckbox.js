import './FilterCheckbox.css';

function FilterCheckbox({ isShort, setIsShort, isSaved, filterMovies, isSending }) {

  const handleInputCheckbox = (event) => {
    setIsShort(!isShort);
    filterMovies(isShort, isSaved);
  }

  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__label">
        <input
          className="filter-checkbox__input"
          type="checkbox" name="short-films"
          onChange={handleInputCheckbox}
          disabled={isSending}
        />
        <span className="filter-checkbox__pseudo-checkbox">
          <span className="filter-checkbox__tumbler"></span>
        </span>
      </label>
      <label className="filter-checkbox__caption" htmlFor="shortfilms">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;
