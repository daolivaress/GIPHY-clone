import PropTypes from 'prop-types';
import "./styles.css";

const TrendingSearchTermBadge = ({ title, onNewCategory }) => {
  return (
    <div className="trending-search-term-badge" data-testid="trending-search-term-badge" onClick={() => {
      onNewCategory(title.trim())
    }}>
      <img src="src/assets/trending.svg" alt="trending-icon" />
      <p>{title}</p>
    </div>
  );
};

export default TrendingSearchTermBadge;

TrendingSearchTermBadge.propTypes = {
  title: PropTypes.string.isRequired,
  onNewCategory: PropTypes.func.isRequired
};
