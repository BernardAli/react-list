import React, {useState} from 'react'

import './App.css';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

function App() {
  const data = [
    {
      id:1,
      checked: false,
      item: "fish"
    }, 
    {
      id:2,
      checked: false,
      item: "tuna"
    },
    {
      id:3,
      checked: false,
      item: "beef"
    },  
  ]
  const [items, setItems] = useState(data);

  const hanldeCheck = (id) => {
    const listItems = items.map((item) => item.id === id 
    ? {...item, checked: !item.checked} 
    : item);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  }
  const handleDelete = (id) => {
    const listItems = items.filter(item => item.id !== id);
    setItems(listItems);
    localStorage.setItem('shoppinglist', JSON.stringify(listItems));
  };

  return (
    <div className="App">
      <Header title="Groceries"/>
      <Content items={items} handleDelete={handleDelete} hanldeCheck={hanldeCheck}/>
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
