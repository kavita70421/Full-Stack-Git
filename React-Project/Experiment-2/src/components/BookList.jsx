import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books, onRemoveBook }) => {
  return (
    <div>
      {books.length === 0 ? (
        <p style={styles.noResults}>No books found.</p>
      ) : (
        books.map((book, index) => (
          <BookItem
            key={index}
            index={index}
            title={book.title}
            author={book.author}
            onRemove={onRemoveBook}
          />
        ))
      )}
    </div>
  );
};

const styles = {
  noResults: {
    marginTop: '20px',
    fontStyle: 'italic',
    color: '#777',
  },
};

export default BookList;
