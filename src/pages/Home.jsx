import { useState } from 'react';
import { serachForShows } from '../api/tvmaze';

const Home = () => {
  const [searchStr, setSearchString] = useState('');
  const [apiData, setApiData] = useState(null);
  const [apiError, setApiError] = useState(null);

  const onSearchInputChange = e => {
    setSearchString(e.target.value);
  };

  const onSearch = async e => {
    e.preventDefault();

    try {
      setApiError(null);
      const result = await serachForShows(searchStr);
      setApiData(result);
    } catch (error) {
      setApiError(error);
    }
  };

  const renderApidata = () => {
    if (apiError) {
      return <div>An error occured: {apiError.message}</div>;
    }

    if (apiData) {
      return apiData.map(data => (
        <div key={data.show.id}>{data.show.name}</div>
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
        <button type="submit">Search</button>
      </form>
      <div>{renderApidata()}</div>
    </div>
  );
};

export default Home;
