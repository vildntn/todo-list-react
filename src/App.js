import React, {useState} from "react";
import List from "./List";
import './index.css';

function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState([])
  const [alert, setAlert] = useState({ 
    show:false,
    type:'',
    message:''
    })
  const [isEditing, setIsEditing] = useState(false)
  const [editId, setEditId] = useState(null)

  console.log(name);

const handleSubmit=(e)=>{
e.preventDefault()

if(!name){
  //when the user does not type anything
  //show alert

}else if(name &&isEditing){
//user type something but for editing
}
else{
  //add item to todo list 
  //show alert for successfully added the item
}

}

  return <>
  <section className="section-center">
    <form  className="todo-form" onSubmit={handleSubmit}>
     <h3>Todo List</h3>
      <div className="form-control">
        <input type="text" className="todo" value={name} onChange={(e)=>setName(e.target.value)} placeholder="e.g. watering flowers"/>
        <button className="submit-btn"></button>
      </div>
    </form>
    <List/>
    <button className="clear-btn">Clear Items</button>
  </section>
  </>;
}

export default App;
