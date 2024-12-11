import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIosNew } from "react-icons/md";
import TrendingSearchTermBadge from "../TrendingSearchTermBadge/TrendingSearchTermBadge";
import PropTypes from "prop-types";
import './styles.css';

const TrendingSearchTermsContainer = ({ onNewCategory, trendingSearchTerms }) => {
  return (
    <div className="trending-search-terms">
      <MdArrowBackIosNew
        className="arrow arrow-back"
        size={30}
        onClick={() => {
          document
            .querySelector(".trending-search-terms")
            .scrollBy({ left: -300, behavior: "smooth" });
        }}
      />
      {trendingSearchTerms.map((term, index) => (
        <TrendingSearchTermBadge
          title={term}
          key={index}
          onNewCategory={onNewCategory}
        />
      ))}
      <MdArrowForwardIos
        className="arrow arrow-forward"
        size={30}
        onClick={() => {
          document
            .querySelector(".trending-search-terms")
            .scrollBy({ left: 300, behavior: "smooth" });
        }}
      />
    </div>
  );
};

export default TrendingSearchTermsContainer;

TrendingSearchTermsContainer.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
  trendingSearchTerms: PropTypes.arrayOf(PropTypes.string).isRequired,
};
