import {  Middleware, configureStore } from "@reduxjs/toolkit";
import userReducer from "./users/slice";

const persistence: Middleware = (store ) => (next) => (action) => {
	next(action);
	localStorage.setItem("persistence", JSON.stringify(store.getState()));
};

export const store = configureStore({
	reducer: {
		users: userReducer,
	},
	middleware: [persistence],
});

//obtenemos el tipo de dato  que estamos guardando
export type RootState = ReturnType<typeof store.getState>;
//obtemos el tipo de dato que usamos en el dispatch
export type AppDispatch = typeof store.dispatch;
