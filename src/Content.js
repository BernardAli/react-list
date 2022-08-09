import React, {useState} from 'react'
import ItemList from './ItemList';

const Content = ({items, handleDelete, hanldeCheck}) => {
    // console.log(items);
    return (
        
        <>
            {items.length ? (
              <ItemList items={items} handleDelete={handleDelete} hanldeCheck={hanldeCheck} />
            ) : (
              <p>Your list is empty</p>
            )}
        </>
    )
}

export default Content