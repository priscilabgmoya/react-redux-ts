import { User, UserId, addNewUser, deleteUserById } from "../store/users/slice";
import { useAppDispatch } from "./Store";

export const UseUserAction = () => {
	const dispatch = useAppDispatch();
	const addUser =  (obj: User) => {
		dispatch(addNewUser(obj));
	};
	const removeUser = (id: UserId) => {
		dispatch(deleteUserById(id));
	};
	return { addUser, removeUser };
};
