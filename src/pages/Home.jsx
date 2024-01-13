import { useState } from 'react';
import { serachForShows, serachForActors } from '../api/tvmaze';
import SearchForm from '../components/SearchForm';

const Home = () => {
  const [apiData, setApiData] = useState(null);
  const [apiError, setApiError] = useState(null);

  const onSearch = async ({ query, option }) => {
    try {
      if (option === 'shows') {
        setApiError(null);
        const result = await serachForShows(query);
        setApiData(result);
      }
      if (option === 'actors') {
        setApiError(null);
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
      <SearchForm onSearch={onSearch} />
      <div>{renderApidata()}</div>
    </div>
  );
};

export default Home;
