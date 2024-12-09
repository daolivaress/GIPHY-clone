import { MdVerified } from "react-icons/md";
import "./styles.css";

const GifCard = ({ gif }) => {
  return (
    <div key={gif.id} className="gif-card">
      <img src={gif.url} alt={gif.title} />
      {gif.authorAvatar ? (
        <div className="gif-author-info">
          <img src={gif.authorAvatar} alt="avatar-photo" />
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
