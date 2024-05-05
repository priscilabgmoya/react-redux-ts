import { Toaster } from "sonner";
import "./App.css";
import CreateNewUser from "./Components/CreateNewUser";
import ListOfUsers from "./Components/ListOfUser";
function App() {
	return (
		<>
			<h1>Nuestro Proyecto con Redux</h1>
			<CreateNewUser/>
			<ListOfUsers/>
			<Toaster richColors/>
		</>
	);
}

export default App;
