import "./styles.css";

const NavBar = ({onNewCategory}) => {
  return (
    <nav>
      <div className="logo-container" onClick={() => {
        onNewCategory("");
      }}>
        <img src="/Giphy-logo.svg" alt="giphy-logo" />
      </div>
      <ul className="categories">
        <li className="reactions">Reactions</li>
        <li className="entertainment">Entertainment</li>
        <li className="sports">Sports</li>
        <li className="artists">Artists</li>
      </ul>
      <div className="options-list">
        <button id="upload-btn">Upload</button>
        <button id="create-btn">Create</button>
        <div className="user-display">
          <img
            src="https://media.giphy.com/avatars/default5/80h.gif"
            alt="avatar"
          />
          <p>user</p>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
