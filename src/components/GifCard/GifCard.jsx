import { MdVerified } from "react-icons/md";
import PropTypes from "prop-types";
import "./styles.css";

const GifCard = ({ gif }) => {
  return (
    <div key={gif.id} className="gif-card" data-testid="gif-card">
      <img src={gif.url} alt={gif.title} className="gif"/>
      {gif.authorAvatar ? (
        <div className="gif-author-info">
          <img src={gif.authorAvatar} alt="avatar-photo" className="avathar-photo"/>
          <p>{gif.authorName.trim()}</p>
          {gif.is_verified && <MdVerified size={16} />}
        </div>
      ) : (
        <div className="gif-author-info">
          <p>{gif.title}</p>
        </div>
      )}
    </div>
  );
};

export default GifCard;

GifCard.propTypes = {
  gif: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    authorAvatar: PropTypes.string,
    authorName: PropTypes.string,
    is_verified: PropTypes.bool
  }).isRequired
};
