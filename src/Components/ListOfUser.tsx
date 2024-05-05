import { useSelectorHook } from "../Hooks/Store";
import { UseUserAction } from "../Hooks/useUserAction";
// 'use client';
import {
	Badge,
	Card,
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeaderCell,
	TableRow,
	Title,
} from "@tremor/react";

export default function ListOfUsers() {
	const users = useSelectorHook((state) => state.users);
	const { removeUser } = UseUserAction();
	return (
		<>
			<Card>
				<Title>
					{" "}
					Usuarios
					<Badge
						style={{ marginLeft: "8px" }}
						className="inline-flex items-center gap-x-1 rounded-tremor-small px-2 py-1 text-tremor-label font-semibold text-gray-700 ring-1 ring-inset ring-tremor-ring dark:text-gray-400 dark:ring-dark-tremor-ring"
					>
						{" "}
						{users.length}
					</Badge>
				</Title>
				<Table className="mt-4">
					<TableHead>
						<TableRow className="border-b border-tremor-border dark:border-dark-tremor-border">
							<TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
								ID
							</TableHeaderCell>
							<TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
								Name
							</TableHeaderCell>
							<TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
								Email
							</TableHeaderCell>

							<TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
								Status
							</TableHeaderCell>
							<TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
								Occupation
							</TableHeaderCell>
							<TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
								Date
							</TableHeaderCell>
							<TableHeaderCell className="text-tremor-content-strong dark:text-dark-tremor-content-strong">
								Action
							</TableHeaderCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{users.map((item) => (
							<TableRow key={item.id}>
								<TableCell>{item.id}</TableCell>
								<TableCell style={{ display: "flex", alignItems: "center" }}>
									<img
										src={`https://unavatar.io/github/${item.name}`}
										alt={item.name}
										style={{
											width: "32px",
											height: "32px",
											borderRadius: "50%",
											marginRight: "8px",
										}}
									/>
									{item.name}
								</TableCell>
								<TableCell>{item.email}</TableCell>
								<TableCell>{item.status}</TableCell>
								<TableCell>{item.occupation}</TableCell>
								<TableCell>{item.date}</TableCell>
								<TableCell>
									<button type="button">
										{/* rome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
										<svg
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
											/>
										</svg>
									</button>
									<button onClick={() => removeUser(item.id)} type="button">
										{/* rome-ignore lint/a11y/noSvgWithoutTitle: <explanation> */}
										<svg
											aria-label="removeUser"
											xmlns="http://www.w3.org/2000/svg"
											fill="none"
											viewBox="0 0 24 24"
											strokeWidth={1.5}
											stroke="currentColor"
											className="w-6 h-6"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												d="M22 10.5h-6m-2.25-4.125a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0ZM4 19.235v-.11a6.375 6.375 0 0 1 12.75 0v.109A12.318 12.318 0 0 1 10.374 21c-2.331 0-4.512-.645-6.374-1.766Z"
											/>
										</svg>
									</button>
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</Card>
		</>
	);
}
