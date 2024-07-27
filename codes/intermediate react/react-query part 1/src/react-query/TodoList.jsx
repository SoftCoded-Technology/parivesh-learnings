import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import useTodos from "./hooks/useTodos";

const TodoList = () => {
  

  const { data: todos,error,isLoading } = useTodos();

  if (error) return <div>{error.message}</div>;

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <ul className="list-group">
        {todos?.map((todo) => (
          <li className="list-group-item" key={todo.id}>{todo.title}</li>
        ))}
      </ul>
    </>
  );
};

export default TodoList;
