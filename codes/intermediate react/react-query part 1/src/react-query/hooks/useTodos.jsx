import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const useTodos = () => {
    const getTodos = async () => {
        const res = await axios.get("https://jsonplaceholder.typicode.com/todos");
        return res.data;    
      };

      return useQuery({
        queryKey: ["todos"],
        queryFn: getTodos,
      });
}

export default useTodos