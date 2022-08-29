import logo from "./logo.svg";
import Nav from "./views/Nav";
import "./App.css";
import { useState } from "react";
import Todo from "./views/Todo";
function App() {
   let [name, setName] = useState("tranDuoc");
   let [address, setAddress] = useState("");
   let [todos, setTodos] = useState([
      { id: 1, title: "working here" },
      { id: 2, title: "working here" },
      { id: 3, title: "working here" },
   ]);
   const handleChangeInput = (e) => {
      let changeInput = e.target.value;
      console.log(">>> input", changeInput);
      setAddress(changeInput);
   };

   const deleteDataTodo = (todo) => {
      let current = [...todos];
      console.log(current);
      current = current.filter((item, index) => item.id !== todo.id);
      setTodos(current);
   };

   const handleClick = () => {
      if (!address) {
         console.log("nhap vao thang ngu nay");
         return;
      }
      let newTodo = { id: Math.floor(Math.random() * 1000), title: address };
      setTodos([...todos, newTodo]);
      setAddress("");
   };
   // re-render
   return (
      <div className="App">
         <Nav />
         <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1>hello react Hooks with {name}</h1>
            <input
               type="text"
               onChange={(e) => handleChangeInput(e)}
               name="address"
               value={address || ""}
            />
            <button type="button" onClick={() => handleClick()}>
               click me
            </button>
         <Todo todos={todos} 
           deleteDataTodo = {deleteDataTodo}
         />
         </header>
      </div>
   );
}

export default App;
