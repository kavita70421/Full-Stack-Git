import React, { useState } from 'react';

const AddBookForm = ({ onAddBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = () => {
    if (title.trim() === '' || author.trim() === '') return;
    onAddBook(title.trim(), author.trim());
    setTitle('');
    setAuthor('');
  };

  return (
    <div style={styles.form}>
      <input
        type="text"
        placeholder="New book title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        style={styles.input}
      />
      <input
        type="text"
        placeholder="New book author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleSubmit} style={styles.button}>
        Add Book
      </button>
    </div>
  );
};

const styles = {
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
    marginBottom: '20px',
  },
  input: {
    flex: '1',
    padding: '8px',
    boxSizing: 'border-box',
  },
  button: {
    padding: '8px 12px',
    cursor: 'pointer',
  },
};

export default AddBookForm;
