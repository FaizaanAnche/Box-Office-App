const BASE_URL = 'https://api.tvmaze.com';

const apiGET = async queryString => {
  const response = await fetch(`${BASE_URL}${queryString}`);
  const body = response.json();
  return body;
};

export const serachForShows = query => apiGET(`/search/shows?q=${query}`);
