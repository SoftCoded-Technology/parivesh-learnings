import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useTodo = (query) => {
  console.log(query);
  const fetchTodos = async (Page) => {
    const { data } = await axios.get(
      `https://jsonplaceholder.typicode.com/todos?_limit=50&${Page ? `_page=${Page}` : ""}`
    );
    return data;
  };
  return useQuery({
    queryKey: ["todos", query],
    queryFn:() => fetchTodos(query),
  });
};

export default useTodo;