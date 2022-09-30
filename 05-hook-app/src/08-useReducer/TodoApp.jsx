import { useTodos } from '../hooks/useTodos';
import { TodoAdd } from './TodoAdd';
import { TodoList } from './TodoList';

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    pendingTodosCount,
    handleNewToDo,
    handleRemoveToDo,
    handleToggleToDo,
  } = useTodos();

  return (
    <>
      <h1>
        Todo App {todosCount} ,<small>pendientes: {pendingTodosCount}</small>
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
