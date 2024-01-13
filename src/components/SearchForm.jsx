import { useState } from 'react';

const SearchForm = ({ onSearch }) => {
  const [searchStr, setSearchString] = useState('');
  const [searchOption, setSearchOption] = useState('shows');

  const onSearchInputChange = e => {
    setSearchString(e.target.value);
  };

  const onRadioInputChange = e => {
    setSearchOption(e.target.value);
  };

  const onSubmit = async e => {
    e.preventDefault();
    const searchParameters = { query: searchStr, option: searchOption };
    onSearch(searchParameters);
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={searchStr} in onChange={onSearchInputChange} />
      <label>
        Shows
        <input
          type="radio"
          name="search-option"
          value="shows"
          checked={searchOption === 'shows'}
          onChange={onRadioInputChange}
        />
      </label>
      <label>
        Actors
        <input
          type="radio"
          name="search-option"
          value="actors"
          checked={searchOption === 'actors'}
          onChange={onRadioInputChange}
        />
      </label>
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchForm;
