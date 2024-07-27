import React, { useState } from "react";
import usePosts from "./hooks/usePosts";

const PostList = () => {
//   const [userId, setUserId] = useState();
const pageSize = 20;
// const [Page, setPage] = useState(1)

// const [PageSize, setPageSize] = useState(10)
  const { data: posts, isLoading, error,fetchNextpage,isFetchingNextPage } = usePosts(/*userId*/{pageSize});

  if (error) return <div>{error.message}</div>;

  return (
    <>
      {/* <select
        value={userId}
        onChange={(e) => setUserId(parseInt(e.target.value))}
        className="form-select mb-3"
        name=""
        id=""
      >
        <option value=""></option>
        <option value="1">user 1</option>
        <option value="2">user 2</option>
        <option value="3">user 3</option>
      </select> */}
      {isLoading && <div>Loading...</div>}
      <ul className="list-group">
        {posts?.map((posts) => (
          <li className="list-group-item" key={posts.id}>
            {posts.title}
          </li>
        ))}
      </ul>
      {/* <button className="btn btn-primary m-3" onClick={() => setPage(Page-1)} disabled={Page===1} type="button">Prev</button>
      <button className="btn btn-primary m-3" onClick={() => setPage(Page+1)} disabled={Page===5} type="button">Next</button> */}
    <button className="btn btn-primary m-3" onClick={() => fetchNextpage()} disabled={isFetchingNextPage} type="button">Load More</button>

    </>
  );
};

export default PostList;
