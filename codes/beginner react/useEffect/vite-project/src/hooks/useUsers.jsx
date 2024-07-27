import { useEffect, useState } from "react";
import { CanceledError } from "axios";
import Services from "../sevices/use-services";

const useUsers = () =>{
    const [users, setUsers] = useState([]);
    const [error, seterror] = useState("");
    const [isLoading, setIsLoading] = useState(false);
  
    useEffect(() => {
      // const fetechUsers = async () => {
      //   try {
      //     const res = await axios.get(
      //       "https://jsonplaceholder.typicode.com/users"
      //     );
      //     setUsers(res.data);
      //   } catch (err) {
      //     console.log(err);
      //   }
      // };
  
      // fetechUsers();
  
      setIsLoading(true);
      const { request, cancel } = Services.getAllUsers();
      request
        .then((res) => {
          setUsers(res.data);
          console.log(res.data);
          setIsLoading(false);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          seterror(err.message);
          setIsLoading(false);
          console.log(err);
        });
      // .finally(() => setIsLoading(false));
  
      return () => {
        cancel();
      };
    }, []);
  
    return {isLoading,users,error,setUsers,seterror}
}

export default useUsers