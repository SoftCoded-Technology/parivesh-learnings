import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const usePosts = (query) =>
/*userId
    query
    
    */
  {
  const Id = userId || null;
console.log(query);
const getPosts = async () => {
  const res = await axios.get(
    "https://jsonplaceholder.typicode.com/posts",
     {
       params: { userId: Id },
     },
    // {
    //   params: {
    //     _start:(pageParam-1)*query.pageSize,
    //     _limit: query.pageSize,
    //   },
    }
  );
  return res.data;
};

return useQuery({
  // queryKey: Id ? ["users", userId, "posts"] :["posts"],
  queryKey: ["posts", query],
  queryFn: getPosts,
  keepPreviousData: true,
});
};

// const usePosts = (query) => ({

        
//   queryKey: ["posts", query],
//   queryFn:({pageParams = 1})=> axios.get("https://jsonplaceholder.typicode.com/posts", {
//       params:{
//         _start:(pageParams-1)*query.pageSize,
//         _limit: query.pageSize,
//       }
//   })
//   .then((res) => res.data),
//   staleTime: 10_000,
//   keepPreviousData: true,
//   getNextPageParam: (lastPage, allPages) => {
//     return lastPage.length > 0 ? allPages.length + 1 : undefined;
//   }
// });

export default usePosts;
