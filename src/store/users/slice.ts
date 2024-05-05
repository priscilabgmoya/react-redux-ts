import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export type UserId = string; 
const DEFAULT_DATA =   [
	{
		id: "1",
		occupation: "sales_by_day_api",
		name: "John Doe",
		email: "prueba@gmail.com",
		github: "JohnDoe",
		status: "live",
		date: "23/09/2023",
	},
	{
		id: "2",
		occupation: "marketing_campaign",
		name: "Jane Smith",
		email: "prueba@gmail.com",
		github: "JaneSmith",
		status: "live",
		date: "22/09/2023",
	},
	{
		id: "3",
		occupation: "sales_campaign",
		name: "Jane Smith",
		email: "prueba@gmail.com",
		github: "JaneSmith",
		status: "live",
		date: "22/09/2023",
	},
	{
		id: "4",
		occupation: "development_env",
		name: "Mike Johnson",
		email: "prueba@gmail.com",
		github: "MikeJohnson",
		status: "live",
		date: "21/09/2023",
	},
	{
		id: "5",
		occupation: "new_workspace_1",
		name: "Alice Brown",
		email: "prueba@gmail.com",
		github: "AliceBrown",
		status: "live",
		date: "24/09/2023",
	},
	{
		id: "6",
		occupation: "test_environment",
		name: "David Clark",
		email: "prueba@gmail.com",
		github: "DavidClark",
		status: "inactive",
		date: "25/09/2023",
	},
];
export  interface User {
	occupation: string;
	name: string;
	email: string;
	github: string;
	status: string;
	date: string;
}
export  interface UserWithId extends User{
    id: UserId;
}
const initialState: UserWithId[] = (()=>{
    const persistence = localStorage.getItem("persistence"); 
    return persistence ? JSON.parse(persistence).users  : DEFAULT_DATA; 
})()

export const usersSlice = createSlice({
    name:"users",
    initialState,
    reducers:{
		addNewUser: (state, action: PayloadAction<User>) =>{
            const id = crypto.randomUUID(); 
            return [...state,{id , ...action.payload}]; 
        },
        deleteUserById: (state, action: PayloadAction<UserId>) =>{
            const id = action.payload; 
            return state.filter((user)=>{return user.id !== id}); 
        }
    }
})
9
export default usersSlice.reducer

export const {addNewUser,deleteUserById} = usersSlice.actions