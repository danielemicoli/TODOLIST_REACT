import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import './App.css';

const App = ()=> {

  const [todos, setTodo] = useState([]);
  const {register, handleSubmit} = useForm()


  const addTodo = (e) => {
    // e.preventDefault();
    // console.log(e.target.value)
  }

  const onSubmit = (values) => {
    
    setTodo([...todos, {id:todos.length+1, todo:values.todo}])
    console.log(todos);
    


  }
function removeTodo(id) {
    setTodo(todos.filter(item => item.id !== id));
    console.log(todos)
}
// function handleEditChange(e) {
//   setTodo([...todos, {id:todos.length+1, todo:values.todo}])

// }
function editTodo(text, id) {
  const items = this.state.todos;
  this.setTodo({
    todos:items.filter(item => item.id !==id),
    currentTodo: {
      text
    }
  })
  console.log(todos)
}


return (
  <div className="todos">
    <h1>Todo List</h1>
    <form onSubmit={handleSubmit(onSubmit)}>
      <input  defaultValue={''} placeholder="Aggiugni il tuo todo" {...register('todo')} />
      <button onClick={() => addTodo()}  type={'submit'}>Add Todo</button>
    </form>

    <ul>
      {todos.map((item => (
        <li key={item.id}>{item.todo} 
            <button className="remove-btn" onClick={() => removeTodo(item.id)}>X</button>
            <button onClick={() => editTodo(item.id)}>Edit</button>

        </li>
)))}
    </ul>
  </div>
)
      }



export default App;

