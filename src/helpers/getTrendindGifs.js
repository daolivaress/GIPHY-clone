export const getTrendingGifs = async () => {
  const url = `https://api.giphy.com/v1/gifs/trending?api_key=xGctnTbVWv8NIJs1dHvNRqreE1NvdaUf`;
  const response = await fetch(url);
  const { data } = await response.json();
  const gifs = data.map((gif) => {
    return {
      id: gif.id,
      title: gif.title,
      url: gif.images.downsized_medium.url,
      authorName: gif.username,
      authorAvatar: gif.user?.avatar_url,
      is_verified: gif.user?.is_verified,
    };
  });
  return gifs;
};
