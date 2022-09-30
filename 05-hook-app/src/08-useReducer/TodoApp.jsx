import { useReducer } from 'react';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';
import { todoReducer } from './todoReducer';

const initialState = [
  {
    id: new Date().getTime,
    description: 'Aprender SOLID',
    done: false,
  },
  {
    id: new Date().getTime * 2,
    description: 'Aprender GraphQL',
    done: false,
  },
];

export const TodoApp = () => {
  const [todos, dispatchTodo] = useReducer(todoReducer, initialState);

  const handleNewToDo = (todo) => {
    console.log({ todo });
  };

  return (
    <>
      <h1>
        Todo App 10 <small>pendientes: 2</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-7">
          {/* TODOLIST */}
          <TodoList todos={todos} />
          {/* END TODOLIST */}
        </div>
        <div className="col-5">
          <h4>Nuevo TODO</h4>
          <hr />
          {/* TODO ADD (onNewToDo) */}
          {/* { id: new Date(), description: '', done: false} */}
          <TodoAdd onNewTodo={handleNewToDo} />
          {/* END TODO ADD */}
        </div>
      </div>
    </>
  );
};
