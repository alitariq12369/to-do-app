import logo from './logo.svg';
import react, {useState} from 'react';
import './App.css';
import Todo from "./Components/todo.js"
import Table from "./Components/table.js"

function App() {
  const [itemName,setItemName] = useState("");
  // for Table / List
  const [todoItems, setToDoItem] = useState([''])
  const AddNewItem = (event) => {
    setItemName(event.target.value)
  }

  const AddItemInList = () => {
    var list = todoItems
    list[todoItems.length] = itemName+'\n\n\n\n\n\n\n\n\n';
    setToDoItem(list)
  };
  return (
    <div className="App">
    <h2>TO-DO APP</h2>
   <input type="text" placeholder="Enter to-do" onChange={AddNewItem} value = {itemName}></input>
   <button onClick={AddItemInList} >Add</button>
   {/* <Todo/> */}
   <Table item = {todoItems}/>
    </div>
  );
}
export default App;