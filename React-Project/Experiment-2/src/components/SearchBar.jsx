import React from 'react';

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <input
      type="text"
      placeholder="Search by title or author"
      value={searchTerm}
      onChange={(e) => onSearchChange(e.target.value)}
      style={styles.input}
    />
  );
};

const styles = {
  input: {
    padding: '8px',
    width: '100%',
    marginBottom: '15px',
    boxSizing: 'border-box',
  },
};

export default SearchBar;
