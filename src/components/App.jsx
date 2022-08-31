import React,{useState} from "react";


function App() {
  const [todo, setTodo] = useState("")
    
    const handleChange = (event ) =>{
        const newValue= event.target.value

        setTodo(newValue )
    }
    
  return <div>
      <h3>Todo List</h3>
      <input 
      onChange={handleChange} 
      type="text" 
      value={todo }
/>
      
  </div>;
}

export default App;
