import React from 'react';
import PageBanner from '../PageBanner';

const Cursos = () => {
	const [data, setData] = React.useState([]);
	const [categorias, setCategorias] = React.useState([]);

	async function fetchData() {
		const jsonData = await (await fetch('./cursos.json')).json();

		setTimeout(() => {
			setData(jsonData);
		}, 500);
	}

	React.useEffect(() => {
		fetchData();
	}, []);

	return (
		<div>
			<PageBanner title="Cursos" />

			<nav>
				<ul>
					{/* {data.map(({ categoria }) => {
						setCategorias((state) => [...state, categoria]);
						if (categorias.includes(categoria))
							return <li key={categoria}>{categoria}</li>;
						return null;
					})} */}
				</ul>
			</nav>
		</div>
	);
};

export default Cursos;
