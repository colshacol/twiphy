const API_KEY = "0b5ae8c2872542d2ad8bf965542f529a";
const API_ROOT = 'https://api.giphy.com';
const API_SEARCH_ENDPOINT = '/v1/gifs/search';
const API_RANDOM_ENDPOINT = '/v1/gifs/random';
const API_RANDOM = `${API_ROOT}${API_RANDOM_ENDPOINT}?api_key=${API_KEY}`;
const API_SEARCH = (query) => `${API_ROOT}${API_SEARCH_ENDPOINT}?api_key=${API_KEY}&q=${query}`;

type Options = {
  query?: string,
}

export const getGifs = async (options) => {
  const endpoint = (options.query) ? API_SEARCH(options.query) : API_RANDOM;
  const response = await fetch(endpoint).then(res => res.json());
  return response.data;
}
