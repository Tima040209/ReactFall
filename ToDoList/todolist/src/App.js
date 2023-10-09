import React from 'react';
import './App.css';
import ToDoList from './components/ToDoList';

function App() {
   
  // const [newItem, setNewItem] = useState("");
  // const [items, setItem] = useState([]);

  // function addItem(){
  //   if(!newItem){
  //     alert("There is no item");
  //     return;
  //   }
  //   const item = {
  //     id: Math.floor(Math.random()*1000),
  //     value: newItem
  //   }
  //   setItem(oldList => [...oldList,item]);
  //   setNewItem("");
  // }

  // function updateItem(id){


  // }

  // function deleteItem(id){
  //   const newArray = items.filter(item => item.id !== id);
  //   setItem(newArray);
  // }
  return (
    <div className="todo-app">
      <ToDoList></ToDoList>
        {/* 1.header
        <h1>Todo List App</h1>
        {/*2.Input(input)*/}
        {/* <input type='text' 
        placeholder='add an item'
        value={newItem}
        onChange={e => setNewItem(e.target.value)}
        /> */}
        {/* <button onClick={() => addItem()}>Add</button> */}
        {/*3.List of items*/}
        {/* <ul>
          {items.map(item =>{
            return(
              <li key={item.id}>
                {item.value}
              <button onClick={() => deleteItem(item.id)}>delete</button>
              <button onClick = {() => updateItem(item.id)}>update</button>
              </li>
            )
          })}
        </ul> */} 
    </div>
  );
}

export default App;
