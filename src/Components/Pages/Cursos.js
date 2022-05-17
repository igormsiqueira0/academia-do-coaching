import React from 'react';
import { Container } from 'react-bootstrap';
import PageBanner from '../PageBanner';
import SlideCursos from '../Slides/SlideCursos';

const Cursos = () => {
	const [data, setData] = React.useState([]);
	const [categories, setCategories] = React.useState([]);
	const [preference, setPreference] = React.useState(null);

	async function fetchData() {
		const jsonData = await (await fetch('./cursos.json')).json();

		// setTimeout(() => {
		setData(jsonData);
		// }, 500);
	}

	function handleNavItemClick(e) {
		const role = e.currentTarget.dataset.role;
		const navItems = document.querySelectorAll('.cursos--nav--item');

		navItems.forEach((item) => item.classList.remove('active'));

		e.currentTarget.classList.add('active');

		setPreference(role);
	}

	React.useEffect(() => {
		fetchData();
	}, []);

	React.useEffect(() => {
		const cursoHolder = document.querySelector('.cursos--holder');
		if (cursoHolder) {
			cursoHolder.classList.remove('cursos--holder');
			setTimeout(() => {
				cursoHolder.classList.add('cursos--holder');
			});
		}
	}, [preference]);

	React.useEffect(() => {
		const firstNavItem = document.querySelector('.cursos--nav--item');

		if (firstNavItem) {
			setTimeout(() => {
				firstNavItem.click();
			});
		}
	}, [categories]);

	React.useEffect(() => {
		const uniqueCategories = new Set(data.map((curso) => curso.categoria));
		setCategories(uniqueCategories);
	}, [data]);

	if (data)
		return (
			<div className="cursos">
				<PageBanner title="Cursos" />

				<nav className="cursos--nav">
					<ul className="container">
						{[...categories].map((categoria) => (
							<li
								key={categoria}
								className="cursos--nav--item"
								data-role={categoria}
								onClick={handleNavItemClick}
							>
								{categoria}
							</li>
						))}
					</ul>
				</nav>

				<Container>
					<div className="cursos--holder d-flex justify-content-between flex-wrap">
						{data
							.filter(({ categoria }) => categoria === preference)
							.map(({ curso, categoria, imagem }) => (
								<SlideCursos
									key={curso}
									curso={curso}
									categoria={categoria}
									imagem={imagem}
								/>
							))}
					</div>
				</Container>
			</div>
		);
};

export default Cursos;
