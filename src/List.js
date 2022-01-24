import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'

function List({items,removedItem, editedItem}) {
    
  return <div className='todo-list'>
      {items.map((item)=>{
          const {id,title}=item
     return <div className="todo-item" key={id}>
          <p className="title">{title}</p>
          <div className="button-container">
              <button className="btn edit-btn" onClick={()=>editedItem(id)}>
                  <FaEdit/>
              </button>
              <button className="btn delete-btn" onClick={()=>removedItem(id)}>
                  <FaTrash/>
              </button>
          </div>
      </div>
      })}
  </div>;
}

export default List;
