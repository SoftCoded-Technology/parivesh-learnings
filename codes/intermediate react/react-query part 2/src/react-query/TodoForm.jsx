// import axios from "axios";
// import React, { useRef } from "react";
// import { useMutation, useQuery } from "@tanstack/react-query";
// import { useQueryClient } from "@tanstack/react-query";
// import useTodo from "./hooks/useTodo";

// const PostForm = () => {
//   const queryClient = useQueryClient();

//   const ref = useRef(null);
//   const { data: postData } = useTodo();

//   const addTodo = async (todo) => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/todos",{
//       method: "POST",
//       headers: {
//         "Content-type": "application/json; charset=UTF-8",
//       },
//       body: JSON.stringify(todo),
//     });

//     return response.json();
//   };

//   const { mutate, isPending, error, isError, reset } = useMutation({
//     mutationFn: addTodo,
//   });

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const fromData = new FormData(e.target);
//     const title = fromData.get("title");
//     console.log(title);
//     if (!title) return;

//     mutate({ id : postData.length + 1, title, completed: false });
//     e.target.reset();
//   };

//   return (
//     <form className="row mb-3 g-3 p-3" onSubmit={handleSubmit}>
//       <div className="col">
//         <input
//           placeholder="enter your post"
//           ref={ref}
//           className="form-control"
//           type="text"
//           name="title"
//         />
//       </div>
//       <div className="col">
//         <button className="btn btn-primary">Add</button>
//       </div>
//     </form>
//   );
// };

// export default PostForm;

import axios from "axios";
import React, { useRef, useState } from "react";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";
import useTodo from "./hooks/useTodo";

const PostForm = () => {
  const queryClient = useQueryClient();
  

  const ref = useRef(null);
  const { data: postData } = useTodo();

  const addTodo = async (todo) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos?_limit=50&${Page ? `_page=${Page}` : ""}`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(todo),
    });

    return response.json();
  };

  const { mutate, isPending, error, isError, reset } = useMutation({
    mutationFn: addTodo,
    onSuccess: (data) => {
      queryClient.setQueryData(["todos"], (oldData) => [...oldData, data]);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const fromData = new FormData(e.target);
    const title = fromData.get("title");
    console.log(title);
    if (!title) return;

    mutate({ id: postData.length + 1, title, completed: false });
    e.target.reset();
  };

  return (
    <form className="row mb-3 g-3 p-3" onSubmit={handleSubmit}>
      <div className="col">
        <input
          placeholder="enter your post"
          ref={ref}
          className="form-control"
          type="text"
          name="title"
        />
      </div>
      <div className="col">
        <button className="btn btn-primary">Add</button>
      </div>
    </form>
  );
};

export default PostForm;
