import tellMyFlexSpaceTo from "../../api/axios.config";
import { useEffect, useState } from "react";

export default function Homies() {
	const [homies, setHomies] = useState([]);

	const fetchHomies = async () => {
		await tellMyFlexSpaceTo.get("/users").then((res) => {
			setHomies(res.data.data);
		});
	};

	useEffect(() => {
		fetchHomies();
	}, []);

	return (
		<div>
			{homies.map((user) => {
				return <h3>{user.firstName}</h3>;
			})}
		</div>
	);
}
