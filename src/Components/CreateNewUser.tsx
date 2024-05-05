import { Button, Card, TextInput, Title } from "@tremor/react";
import { UseUserAction } from "../Hooks/useUserAction";

export default function CreateNewUser() {
	const { addUser } = UseUserAction();
	//const [result, setResult] = useState<"ok" | "ko" | null>(null)

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		//setResult(null)

		const form = event.target as HTMLFormElement;
		const formData = new FormData(form);

		const name = formData.get("name") as string;
		const email = formData.get("email") as string;
		const github = formData.get("github") as string;

		if (!name || !email || !github) {
			// validaciones que tu quieras
			//return setResult("ko")
		}

		//addUser({ name, email, github });
		//setResult("ok")
		form.reset();
	};
	/**	occupation: string;
	name: string;
	email: string;
	github: string;
	status: string;
	date: string; 
 * 
 * 
*/
	return (
		<Card style={{ marginTop: "16px" }}>
			<Title>Create New User</Title>

			<form onSubmit={handleSubmit} className="">
				<TextInput name="occupation" placeholder="Aquí la ocupación" />
				<TextInput name="name" placeholder="Aquí el nombre" />
				<TextInput name="email" placeholder="Aquí el email" />
				<TextInput name="github" placeholder="Aquí el usuario de GitHub" />
				<TextInput name="status" placeholder="Aquí el estado" />
				<TextInput name="date" placeholder="Aquí la fecha" />
				<div>
					<Button type="submit" style={{ marginTop: "16px" }}>
						Crear usuario
					</Button>
					{/**
                     * 
                     <span>
                         {result === "ok" && (
                             <Badge color='green'>Guardado correctamente</Badge>
                         )}
                         {result === "ko" && <Badge color='red'>Error con los campos</Badge>}
                     </span>
                     * 
                     */}
				</div>
			</form>
		</Card>
	);
}
