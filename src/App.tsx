import React, { useCallback, useMemo, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Item } from './components/Item';

function App() {

  const [items, setItems] = useState<string[]>([])
  const [newItem, setNewItem] = useState('')
  const [wishList, setWishList] = useState<string[]>([]);

  function addItemToList() {
    setItems([...items, 'Item ' + (items.length + 1)])
  }

  const addItemToWishList = useCallback((text: string) => {
    setWishList(state => [...state, text]);
  }, [])

  const countItemWithOne = useMemo(() => {
    return { count: items.filter(item => item.includes('1')).length}
  }, [items])

  return (
    <div>
      <input type="text" onChange={e => setNewItem(e.target.value)}  value={newItem}/>
      <button onClick={addItemToList}>Add</button>
      <ul>
        {items.map(item => {
          return <Item countItemWithList={countItemWithOne} onAddToWishList={addItemToWishList} text={item} />
        })}
      </ul>
      <div>contagem: {countItemWithOne.count}</div>
    </div>
  );
}

export default App;
