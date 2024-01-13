import { useState } from 'react';
import { serachForShows, serachForActors } from '../api/tvmaze';

const Home = () => {
  const [searchStr, setSearchString] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiError, setApiError] = useState(null);
  const [searchOption, setSearchOption] = useState('shows');

  const onSearchInputChange = e => {
    setSearchString(e.target.value);
  };

  const onRadioInputChange = e => {
    setSearchOption(e.target.value);
  };

  const onSearch = async e => {
    e.preventDefault();

    try {
      if (searchOption === 'shows') {
        setApiError(null);
        const result = await serachForShows(searchStr);
        setApiData(result);
      }
      if (searchOption === 'actors') {
        setApiError(null);
        const result = await serachForActors(searchStr);
        setApiData(result);
      }
    } catch (error) {
      setApiError(error);
    }
  };

  const renderApidata = () => {
    if (apiError) {
      return <div>An error occured: {apiError.message}</div>;
    }

    if (apiData) {
      console.log(apiData);
      return apiData[0].show
        ? apiData.map(data => <div key={data.show.id}>{data.show.name}</div>)
        : apiData.map(data => (
            <div key={data.person.id}>{data.person.name}</div>
          ));
    } else return null;
  };

  return (
    <div>
      <form onSubmit={onSearch}>
        <input
          type="text"
          value={searchStr}
          in
          onChange={onSearchInputChange}
        />
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
      <div>{renderApidata()}</div>
    </div>
  );
};

export default Home;
