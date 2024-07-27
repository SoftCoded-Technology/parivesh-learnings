import React from "react";
import { deleteFetchedTodo, setFetchTodo } from "./Todos/Slice/fetchedtodoSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { store } from "./store/store";
import moment from "moment";

const FetchedTodosList = () => {
  const dispatch = useDispatch();

  const { fetchedTodos } = useSelector((state) => state.entitties.fetchTodos);
  
  const {lastFetched} = useSelector((state) => state.entitties.fetchTodos);

  const cacheTime = moment().diff(moment(lastFetched),"minutes")

  console.log("lastFetched", lastFetched);

  // console.log("fetchedTodos", fetchedTodos);

  const handleFetchTodos = (dispatch,getState) => {
    if(cacheTime<10) return;
    store.dispatch({
      type: "FETCH_TODOS",
      payload: {
        url: "/todos?_limit=50",
        method: "GET",
        onSuccess: "todosReceived",
        onError: "todosError",
      }, 
    });

  };

  return (
    <>
      <h2 className="text-center">Fetched Todos</h2>
      <ul className="list-group">
        {fetchedTodos?.map((todo,index) => (
          <li className="list-group-item d-flex align-items-center w-100  justify-content-between" key={todo.id}>
           {index + 1}{"."} {""} {todo.title}
           <button onClick={() => dispatch(deleteFetchedTodo(todo.id))} className='btn btn-outline-danger'>DELETE</button>
          </li>
        ))}
      </ul>
      <button className="btn btn-primary" onClick={handleFetchTodos}>
        Fetch Todos
      </button>
    </>
  );
};

export default FetchedTodosList;
