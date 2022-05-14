import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo-1.png';

const Header = () => {
	return (
		<Navbar collapseOnSelect expand="lg" className="header">
			<Container>
				<Navbar.Brand>
					<img src={logo} alt="Logo do site" />
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="ms-auto d-flex">
						<NavLink to="/">Home</NavLink>
						<NavLink to="/sobre">Sobre</NavLink>
						<NavLink to="/cursos">Cursos</NavLink>
						<NavLink to="/blog">Blog</NavLink>
						<NavLink to="/contato">Contato</NavLink>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};

export default Header;
