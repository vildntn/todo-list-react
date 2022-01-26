import React, { useState, useEffect } from "react";
import List from "./List";
import "./index.css";
import Alert from "./Alert";

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({
    show: false,
    type: "",
    message: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

  console.log(name);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name) {
      //when the user does not type anything
      //show alert
      setAlert({
        show: true,
        type: "danger",
        message: "please enter value",
      });
    } else if (name && isEditing) {
      //user type something but for editing -->for edit button
      setList(list.map((item)=>{
        if(item.id===editId){
          return {...item,title:name}
        }
        return item
      }))
      setAlert({
        show:true,
        type:'success',
        message:'Item edited'
      })
      setName('')
      setEditId(null)
      setIsEditing(false)
      
    } else {
      //add item to todo list
      //show alert for successfully added the item
      setAlert({ show: true, type: "success", message: "Item Added To The List" });
      const newItem = { id: new Date().getTime().toString(), title: name };
      setList([...list, newItem]);
      setName("");
    }
  };

  const removedItem = (id) => {
    setAlert({
      show: true,
      type: "danger",
      message: "item removed",
    });
    setList(list.filter((item) => item.id !== id));
  };

  const editedItem = (id) => {
     const editingItem=list.find((item)=>item.id===id)
     setIsEditing(true)
     setEditId(id)
     setName(editingItem.title)

  };


  return (
    <>
      <section className="section-center">
        <form className="todo-form" onSubmit={handleSubmit}>
          {<Alert {...alert} />}
          <h3>Todo List</h3>
          <div className="form-control">
            <input
              type="text"
              className="todo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. watering flowers"
            />
            <button className="submit-btn">{ isEditing? 'Edit' : 'Submit'}</button>
          </div>
        </form>
        <List items={list} removedItem={removedItem} editedItem={editedItem} />
        <button className="clear-btn" >Clear Items</button>
      </section>
    </>
  );
}

export default App;
