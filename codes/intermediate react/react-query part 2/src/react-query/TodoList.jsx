import React,{useState} from "react";
import useTodo from "./hooks/useTodo";

const PostList = () => {
  const [Page, setPage] = useState(1)
  
  const { data: todos, isLoading, error } = useTodo(Page);

  if (error) return <div>{error.message}</div>;

  return (
    <>
      {isLoading && <div>Loading...</div>}
      <ul className={`list-group mt-3 p-3 w-${'100vh'}`}>
        {todos?.slice().reverse().map((todo) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>

      <button
        className="btn btn-primary m-2" onClick={() => setPage(Page - 1)} disabled={Page === 1}
      > prev Page </button>
      <button
        className="btn btn-primary m-2" onClick={() => setPage(Page + 1)} 
      > Next Page </button>
    </>
  );
};

export default PostList;
