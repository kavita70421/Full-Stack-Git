import React from 'react';

const BookItem = ({ title, author, index, onRemove }) => {
  return (
    <div style={styles.bookCard}>
      <span>
        <strong>{title}</strong> by {author}
      </span>
      <button onClick={() => onRemove(index)} style={styles.removeButton}>
        Remove
      </button>
    </div>
  );
};

const styles = {
  bookCard: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px',
    marginBottom: '10px',
    border: '1px solid #ccc',
    borderRadius: '4px',
  },
  removeButton: {
    padding: '5px 10px',
    backgroundColor: '#eee',
    border: '1px solid #aaa',
    cursor: 'pointer',
  },
};

export default BookItem;
