import "./styles.css";

const TrendingSearchTermBadge = ({ title }) => {
  return (
    <div className="trending-search-term-badget">
      <img src="/src/assets/trending.svg" alt="trending-icon" />
      <p>{title}</p>
    </div>
  );
};

export default TrendingSearchTermBadge;
