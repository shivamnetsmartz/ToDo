import './App.css';
import React, { useState } from "react";
import ToDoList from './toDoList';

const App = () => {
  const [toDoList, setToDoList] = useState("");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setToDoList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, toDoList];
    });
    setToDoList("");
  };

  const deleteItems =(id) =>{
        console.log("deleted")

      setItems((oldItems)=>{
        return oldItems.filter((arrElement, index)=>{
                  return index !== id;
        })
      })
  };
  return (
    <>
      <div className="App">
        <div className="center_div">
          <br />
          <h1> ToDo List</h1>
          <br />
          <input type="text" placeholder="Add a item" value=
            {toDoList} onChange={itemEvent} />
          <button onClick={listOfItems}>+</button>
          <ol>
            {/* <li> {toDoList}</li> */}

            {Items.map((itemvalue, index) => {
              return <ToDoList
               key={index} 
               id={index}
                text={itemvalue}
                onSelect = {deleteItems}
              />
            })}
          </ol>
        </div>
      </div>
    </>
  );
}

export default App;
