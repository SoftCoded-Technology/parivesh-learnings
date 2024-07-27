import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState ={
    users:[{
        id:1,
        name:"Parivesh"
    },
    {
        id:2,
        name:"Vishal"
    },
    {
        id:3,
        name:"Rohit"
    },
    {
        id:4,
        name:"Sachin"
    },
    {
        id:5,
        name:"Saurav"
    }
]
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {

        addUser: (users, action) => {
            const newUser ={
                id:nanoid,
                name:action.payload.name
            }
            users.push(newUser)
        }
    }
})

export const { addUser } = userSlice.actions
export default userSlice.reducer