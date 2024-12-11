import { useEffect, useState } from "react";
import {
  NavBar,
  SearchBar,
  TrendingSearchTermsContainer,
  GifCard,
} from "./components";
import { useFetchGifs } from "./hooks/useFetchGifs";
import { getTrendingSearchTerms } from "./helpers/getTrendingSearchTerms";
import "./App.css";

const App = () => {
  const [category, setCategory] = useState("");
  const [trendingSearchTerms, setTrendingSearchTerms] = useState([]);

  const { gifs, loading } = useFetchGifs(category);

  const handleNewCategory = (newCategory) => {
    setCategory(newCategory);
  };

  useEffect(() => {
    getTrendingSearchTerms().then((trendingSearchTerms) => {
      setTrendingSearchTerms(trendingSearchTerms);
    });
  }, []);

  return (
    <div className="container">
      <NavBar onNewCategory={handleNewCategory} />
      <main>
        <SearchBar onNewCategory={handleNewCategory} />
        {loading && <p>Loading...</p>}
        {category === "" && !loading && (
          <>
            <TrendingSearchTermsContainer
              onNewCategory={handleNewCategory}
              trendingSearchTerms={trendingSearchTerms}
            />
            <div className="title">
              <img src="/assets/trending.svg" alt="trending-icon" />
              <h1>Trending Now</h1>
            </div>
          </>
        )}
        <div className="gifs-container">
          {gifs.map((gif) => (
            <GifCard gif={gif} key={gif.id} />
          ))}
        </div>
      </main>
    </div>
  );
};

export default App;
