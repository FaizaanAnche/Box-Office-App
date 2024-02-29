import { useState } from 'react';
import { serachForShows, serachForActors } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';
import ShowsGrid from '../components/Shows/ShowsGrid';
import ActorsGrid from '../components/Actors/ActorsGrid';

const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apiError, setApiError] = useState(null);

  const onSearch = async ({ query, option }) => {
    try {
      const currentApiData = apiData;
      setApiError(null);
      if (query === '') {
        setApiData(currentApiData);
      } else if (option === 'shows') {
        const result = await serachForShows(query);
        setApiData(result);
      } else if (option === 'actors') {
        const result = await serachForActors(query);
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

    // if api returns empty array
    if (apiData?.length === 0) {
      return <div>No results</div>;
    }

    if (apiData) {
      console.log(apiData);
      return apiData[0].show ? (
        <ShowsGrid shows={apiData} />
      ) : (
        <ActorsGrid actors={apiData} />
      );
    } else return null;
  };

  return (
    <div>
      <SearchForm onSearch={onSearch} />
      <div>{renderApidata()}</div>
    </div>
  );
};

export default Home;
