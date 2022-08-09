import React from 'react'
import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({item, handleDelete, hanldeCheck}) => {
  return (
    <li className="item">
        <input type="checkbox" checked={item.checked} onChange={() => hanldeCheck(item.id)}/>
        <label onDoubleClick={() => hanldeCheck(item.id)}
            style={item.checked ? {textDecoration: 'line-through'} : null}
        >
            {item.item}
        </label>
            <FaTrashAlt role="button" tabIndex="0" aria-label={`Delete ${item.item}`}
            onClick={() => handleDelete(item.id)}/>
    </li>
  )
}

export default LineItem