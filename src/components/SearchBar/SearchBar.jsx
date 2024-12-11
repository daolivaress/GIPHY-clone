import { useState } from "react";
import { CgSearch } from "react-icons/cg";
import { IoClose } from "react-icons/io5";
import PropTypes from "prop-types";
import "./styles.css";

const SearchBar = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const clearInputValue = () => {
    setInputValue("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;
    onNewCategory(inputValue.trim());
  };

  return (
    <form className="search-input" onSubmit={handleSubmit} aria-label="form">
      <input
        type="text"
        placeholder="Search all the GIFs"
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit" className="search-btn">
        <CgSearch size={35} />
      </button>
      {inputValue && (
        <button className="clear-input-value-btn" onClick={clearInputValue}>
          <IoClose size={18} />
        </button>
      )}
    </form>
  );
};

export default SearchBar;

SearchBar.propTypes = {
  onNewCategory: PropTypes.func.isRequired,
};


