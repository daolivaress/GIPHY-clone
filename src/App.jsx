import { useEffect, useState } from "react";
import { NavBar, SearchBar, TrendingSearchTermBadge, GifCard } from "./components";
import {useFetchGifs} from "./hooks/useFetchGifs";
import { getTrendingSearchTerms } from "./helpers/getTrendingSearchTerms";
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";

import "./App.css";

const App = () => {
  const [category, setCategory] = useState("");
  const [trendingSearchTerms, setTrendingSearchTerms] = useState([]);

  const gifs = useFetchGifs(category);

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
      <NavBar onNewCategory={handleNewCategory}/>
      <SearchBar onNewCategory={handleNewCategory} />
      {category === "" && (
        <div className="trending-search-terms">
          <MdArrowBackIosNew className="arrow arrow-back" size={30} onClick={() => {
            document.querySelector('.trending-search-terms').scrollBy({ left: -300, behavior: 'smooth' });
          }}/>
          {trendingSearchTerms.map((term, index) => (
            <TrendingSearchTermBadge title={term} key={index} onNewCategory={handleNewCategory}/>
          ))}
          <MdArrowForwardIos className="arrow arrow-forward" size={30} onClick={() => {
            document.querySelector('.trending-search-terms').scrollBy({ left: 300, behavior: 'smooth' });
          }}/>
        </div>
      )}
      {category === "" && (
        <div className="title">
          <img src="/src/assets/trending.svg" alt="trending-icon" />
          <h1>Trending Now</h1>
        </div>
      )}
      <div className="gifs-container">
        {gifs.map((gif) => (
          <GifCard gif={gif} key={gif.id} />
        ))}
      </div>
    </div>
  );
};

export default App;
