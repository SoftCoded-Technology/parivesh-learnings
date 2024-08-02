import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
const BASE_URL = "http://localhost:3000";

const tasksSlice = createApi({
    baseQuery:fetchBaseQuery({
        baseUrl: BASE_URL
    }),
    tagTypes:['Tasks'],
    endpoints:(builder)=>({
        getTasks:builder.query({
            query:()=> '/tasks',
            transformResponse:(tasks)=>tasks.reverse(),
            providesTags:['Tasks']
        }),
        addTask:builder.mutation({
            query:(task)=>({
                url:'/tasks',
                method:'POST',
                body:task
            })
            ,invalidatesTags:['Tasks'],
            async onQueryStarted(task,{dispatch,queryFulfilled}){
                dispatch(
                    api.util.updateQueryData("getTasks",undefined,(draft)=>{
                        draft.unshift({id:crypto.randomUUID(),...task})
                    })
                )
                try{
                    await queryFulfilled;
                }catch{
                    patchResult.undo();
                }
            }
        }),
        deleteTask:builder.mutation({
            query:(id)=>({
                url:`/tasks/${id}`,
                method:'DELETE'
            }),
            invalidatesTags:['Tasks']
        }),
        updateTask:builder.mutation({
            query:(task)=>({
                url:`/tasks/${task.id}`,
                method:'PATCH',
                body:task
            }),
            invalidatesTags:['Tasks']
        })
    })
})

export default tasksSlice
export const {useGetTasksQuery,useAddTaskMutation,useDeleteTaskMutation,useUpdateTaskMutation} = tasksSlice