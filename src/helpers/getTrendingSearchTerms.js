export const getTrendingSearchTerms = async () => {
  const url = `https://api.giphy.com/v1/trending/searches?api_key=xGctnTbVWv8NIJs1dHvNRqreE1NvdaUf`;
  const response = await fetch(url);
  const { data } = await response.json();
  const trendingSearchTerms = data.map((term) => term);
  return trendingSearchTerms;
};