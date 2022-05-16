import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import BtnGroup from '../BtnGroup';
import imgSobre from '../../assets/sobre.png';

const Home = () => {
	const [heroSlide, setHeroSlide] = React.useState({
		title:
			'A maior plataforma de cursos na área de Coaching do Brasil não para de crescer.',
		text: 'Se o seu objetivo é aprender ou se aperfeiçoar, cada vez mais, neste segmento, a Academia do Coaching é a plataforma ideal para o seu desenvolvimento.',
		btnText: 'SAIBA MAIS',
		btnHref: '/sobre',
		img: imgSobre,
	});
	const [xxlSize, setXxlSize] = React.useState(0);

	React.useEffect(() => {
		window.addEventListener('resize', () => {
			setXxlSize(window.innerWidth);
		});
	}, []);

	return (
		<div style={{ minHeight: '1100px' }}>
			<Container className="hero">
				<BtnGroup
					setHeroSlide={setHeroSlide}
					className="hero--control my-auto"
				/>

				<div className="hero--content my-auto">
					<h1>{heroSlide.title}</h1>
					<p>{heroSlide.text}</p>
					<NavLink to={heroSlide.btnHref} className="hero--button">
						{heroSlide.btnText}
					</NavLink>
				</div>

				{xxlSize >= 1200 && (
					<div className="hero-img-wrapper my-auto">
						<img src={heroSlide.img && heroSlide.img} alt={heroSlide.btnText} />
					</div>
				)}
			</Container>
		</div>
	);
};

export default Home;
