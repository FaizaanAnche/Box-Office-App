import { useState } from 'react';

const Home = () => {
  const [searchStr, setSearchString] = useState('');

  const onSearchInputChange = e => {
    setSearchString(e.target.value);
  };

  const onSearch = async e => {
    e.preventDefault();

    const response = await fetch(
      `https://api.tvmaze.com/search/shows?q=${searchStr}`
    );
    const body = response.json();
    console.log(body);

    // console.log(e.target[0].value);
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
    </div>
  );
};

export default Home;
