import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Head from '../Head';

const NotFound = () => {
	return (
		<>
			<Head title="Página não encontrada" />

			<main className="page-404">
				<Container>
					<h1>Página não Encontrada - Erro 404</h1>
					<p>
						Essa página não existe. Se você está procurando algum curso,
						pesquise no curso específico na páginas de cursos.
					</p>
					<NavLink to="cursos">Cursos</NavLink>
				</Container>
			</main>
		</>
	);
};

export default NotFound;
