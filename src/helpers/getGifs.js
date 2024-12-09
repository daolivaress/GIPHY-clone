import { API_KEY } from "../../secret";

export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}`;
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
