import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const TodoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span>{todo.content}</span>
          <button
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            X
          </button>
        </div>
      );
    })
  ) : (
    <p>Done with todos. yay!!!</p>
  );
  return <div className="collection">{TodoList}</div>;
};

export default Todos;
