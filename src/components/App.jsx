import  React,{useState} from "react";


function App() {
  const [todo, setTodo] = useState("")
   const [items, setItems ]=useState([])
    
    const handleChange = (event ) =>{
        const newValue= event.target.value

        setTodo(newValue )
    }
    
    const handleClick =() =>{
        setItems(prevItem =>{
            return[
                ...prevItem, todo 
            ]
        })
        setTodo ("")
    }
    
  return <div>
      <h3>Todo List</h3>
      <input 
      onChange={handleChange} 
      type="text" 
      value={todo }
/>
      <button 
      onClick={handleClick } >
          Add 
          </button  >
          
          <ul>
               {items.map(item=>{
                   return <li >{item } </li >
               }) }      
              </ul>
  </div>;
}

export default App;
