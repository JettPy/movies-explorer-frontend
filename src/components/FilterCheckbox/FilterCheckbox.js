import './FilterCheckbox.css';

function FilterCheckbox() {

  const handleInputCheckbox = (event) => {
    console.log(event.target.value);
  }

  return (
    <div className="filter-checkbox">
      <label className="filter-checkbox__label">
        <input className="filter-checkbox__input" type="checkbox" name="short-films" onChange={handleInputCheckbox}/>
        <span className="filter-checkbox__pseudo-checkbox">
          <span className="filter-checkbox__tumbler"></span>
        </span>
      </label>
      <label className="filter-checkbox__caption" htmlFor="shortfilms">Короткометражки</label>
    </div>
  );
}

export default FilterCheckbox;
