import React from 'react';
import { Container } from 'react-bootstrap';
import PageBanner from '../PageBanner';
import SlideBlog from '../Slides/SlideBlog';

const Blog = () => {
	const [data, setData] = React.useState([]);
	const [categories, setCategories] = React.useState([]);
	const [preference, setPreference] = React.useState(null);

	async function fetchData() {
		const jsonData = await (await fetch('./blog.json')).json();

		// setTimeout(() => {
		setData(jsonData);
		// }, 500);
	}

	function handleNavItemClick(e) {
		const role = e.currentTarget.dataset.role;
		const navItems = document.querySelectorAll('.blog--nav--item');

		navItems.forEach((item) => item.classList.remove('active'));

		e.currentTarget.classList.add('active');

		setPreference(role);
	}

	React.useEffect(() => {
		const cursoHolder = document.querySelector('.blog--holder');
		if (cursoHolder) {
			cursoHolder.classList.remove('blog--holder');
			setTimeout(() => {
				cursoHolder.classList.add('blog--holder');
			});
		}
	}, [preference]);

	React.useEffect(() => {
		const firstNavItem = document.querySelector('.blog--nav--item');

		if (firstNavItem) {
			setTimeout(() => {
				firstNavItem.click();
			});
		}
	}, [categories]);

	React.useEffect(() => {
		const uniqueCategories = new Set(data.map((blog) => blog.categoria));
		setCategories(uniqueCategories);
	}, [data]);

	React.useEffect(() => {
		fetchData();
	}, []);

	if (data)
		return (
			<main className="blog">
				<PageBanner title="Blog" />

				<nav className="blog--nav">
					<ul className="container">
						{[...categories].map((categoria) => (
							<li
								key={categoria}
								className="blog--nav--item"
								data-role={categoria}
								onClick={handleNavItemClick}
							>
								{categoria}
							</li>
						))}
					</ul>
				</nav>

				<Container style={{ minHeight: '600px' }}>
					<div className="blog--holder">
						{data
							.filter(({ categoria }) => categoria === preference)
							.map(({ post, categoria, imagem }) => (
								<SlideBlog
									key={post}
									post={post}
									categoria={categoria}
									imagem={imagem}
								/>
							))}
						{data.filter(({ categoria }) => categoria === preference).length %
							3 !==
							0 && <span style={{ width: '340px' }}></span>}
					</div>
				</Container>
			</main>
		);
};

export default Blog;
