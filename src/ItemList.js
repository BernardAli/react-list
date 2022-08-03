import React from 'react'
import LineItem from './LineItem';

const ItemList = ({items, handleDelete, hanldeCheck}) => {
  return (
    <ul>
        {items.map((item) => (
            <LineItem  key={item.id} item={item} handleDelete={handleDelete} hanldeCheck={hanldeCheck}/>
        ))}
    </ul>
  )
}

export default ItemList