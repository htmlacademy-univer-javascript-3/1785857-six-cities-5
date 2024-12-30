import { useState } from 'react';
import { Filters } from '../../utils/constants';
import { FilterType } from '../../types/filter';

type FilterProps = {
  currentSort: FilterType;
  onChange: (newFilter: FilterType) => void;
}

function Filter(props: FilterProps): JSX.Element {

  const { currentSort, onChange } = props;

  const [isOpened, setOpened] = useState(false);

  const toggleMenu = () => {
    setOpened(!isOpened);
  };

  const handleFilterClick = (type: FilterType) => {
    onChange(type);
    setOpened(false);
  };

  const arrayFilterItems = (Object.entries(Filters) as [FilterType, (typeof Filters)[FilterType]][]).map(([type, label]) =>
    (
      <li className={`places__option ${currentSort === type ? 'places__option--active' : ''}`} tabIndex={0} key={type} onClick={() => handleFilterClick(type)}>{label}</li>
    )
  );

  const iconStyle = { transform: `translateY(-50%) ${isOpened ? 'rotate(180deg)' : ''}`};

  return (
    <form className="places__sorting" action="#" method="get" onClick = {toggleMenu}>
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentSort}
        <svg className="places__sorting-arrow" width="7" height="4" style = {iconStyle}>
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? 'places__options--opened' : ''}`}>
        {arrayFilterItems}
      </ul>
    </form>
  );
}

export default Filter;
