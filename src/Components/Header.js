import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

const Header = () => {
	return (
		<header className="container-xxl">
			<div className="logo">
				<img src="" alt="Logo do site" />
			</div>
			<nav>
				<ul>
					<NavLink to="/">Home</NavLink>
					<NavLink to="/sobre">Sobre</NavLink>
					<NavLink to="/cursos">Cursos</NavLink>
					<NavLink to="/blog">Blog</NavLink>
					<NavLink to="/contato">Contato</NavLink>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
