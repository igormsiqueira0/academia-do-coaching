import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import logo from '../assets/logo.png';

const Footer = () => {
	return (
		<footer>
			<Container className="d-flex justify-content-between">
				<div>
					<img
						src={logo}
						alt="Logo do site"
						className="footer-first-col-item"
					/>
					<div
						style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}
					>
						<p>Av. Edson Arantes, 1234, Pinheirois, São Paulo, SP</p>
						<p>2020 - Todos os direitos reservados</p>
						<p>(11) 1234-5678</p>
					</div>
				</div>
				<div>
					<h2 className="footer-first-col-item">Academia do Coaching</h2>
					<nav>
						<ul>
							<NavLink to="/">Home</NavLink>
							<NavLink to="/sobre">Sobre</NavLink>
							<NavLink to="/cursos">Cursos</NavLink>
							<NavLink to="/blog">Blog</NavLink>
							<NavLink to="/contato">Contato</NavLink>
						</ul>
					</nav>
				</div>
				<div>
					<h2 className="footer-first-col-item">Redes sociais</h2>
					<div className="social">
						<a href="https://facebook.com" className="social-item">
							Facebook
						</a>
						<a href="https://instagram.com" className="social-item">
							Instagram
						</a>
					</div>
				</div>
			</Container>
		</footer>
	);
};

export default Footer;
