import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa'

function List() {
  return <div className='todo-list'>
      <div className="todo-item">
          <p className="title"></p>
          <div className="button-container">
              <button className="btn edit-btn">
                  <FaEdit/>
              </button>
              <button className="btn delete-btn">
                  <FaTrash/>
              </button>
          </div>
      </div>
  </div>;
}

export default List;
