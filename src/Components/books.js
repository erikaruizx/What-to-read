import React from 'react'

const Books = ({books}) => {
  return (
    <div>
    {books.items.map(item => <div key={item.id}>{item.title}</div>)}
    </div>)
};

export default Books;
