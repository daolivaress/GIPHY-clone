import { API_KEY } from "../../secret";

export const getTrendingSearchTerms = async () => {
  const url = `https://api.giphy.com/v1/trending/searches?api_key=${API_KEY}`;
  const response = await fetch(url);
  const { data } = await response.json();
  const trendingSearchTerms = data.map((term) => term);
  return trendingSearchTerms;
};