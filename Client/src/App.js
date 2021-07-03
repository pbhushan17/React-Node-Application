import { readTodos, createTodos } from "./functions";
import Preloader from "./components/Preloader";
import { useEffect, useState } from 'react';

function App() {
  const [todo, setTodo] = useState({ title: '', content: '' });
  const [todos, setTodos] = useState(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await readTodos();
      setTodos(result);
    }
    fetchData();
  }, [])
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const result = await createTodos(todo);
    setTodos([...todos, result])
  }
  return (
    <div className="container">
      <div className="row">
        <form className="col s12" onSubmit={onSubmitHandler}>
          <div className="row">
            <div className="input-field col s6">
              <i className="material-icons prefix">title</i>
              <input id="icon_prefix" type="text" className="validate"
                onChange={e => setTodo({ ...todo, title: e.target.value })} />
              <label htmlFor="icon_prefix">Title</label>
            </div>
            <div className="input-field col s6">
              <i className="material-icons prefix">description</i>
              <input id="description" type="tel" className="validate"
                onChange={e => setTodo({ ...todo, content: e.target.value })} />
              <label htmlFor="description">content</label>
            </div>
          </div>
          <div className="row right-align">
            <button className="button.waves-effect.waves-light btn">Submit</button>
          </div>
        </form>
        <div className="collection">
          { !todos ?  <Preloader /> : todos.map(todo => (
            <li className="collection-item">Title : {todo.title} - Cotent : {todo.content}<a href="#!" class="secondary-content"><i class="material-icons">delete</i></a></li>
  
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
