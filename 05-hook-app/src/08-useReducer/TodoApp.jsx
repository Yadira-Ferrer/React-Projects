import { useEffect } from 'react';
import { useReducer } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const initialState = [];

const init = () => {
  return JSON.parse(localStorage.getItem('todos')) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const handleNewToDo = (todo) => {
    const action = {
      type: '[TODO] Add Item',
      payload: todo,
    };

    dispatch(action);
  };

  const handleRemoveToDo = (id) => {
    dispatch({
      type: '[TODO] Remove Item',
      payload: id,
    });
  };

  const handleToggleToDo = (id) => {
    dispatch({
      type: '[TODO] Toggle Item',
      payload: id,
    });
  };

  return (
    <>
      <h1>
        Todo App 10 <small>pendientes: 2</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={handleRemoveToDo}
            onToggleTodo={handleToggleToDo}
          />
        </div>
        <div className="col-5">
          <h4>Nuevo TODO</h4>
          <hr />
          <TodoAdd onNewTodo={handleNewToDo} />
        </div>
      </div>
    </>
  );
};
