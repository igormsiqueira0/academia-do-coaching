import React from 'react';
import { Container } from 'react-bootstrap';

const PageBanner = ({ title }) => {
	return (
		<section className="page-banner">
			<Container>
				<h1>{title}</h1>
			</Container>
		</section>
	);
};

export default PageBanner;
