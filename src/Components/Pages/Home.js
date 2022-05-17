import React from 'react';
import { Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import HomeNav from '../HomeNav';
import imgSobre from '../../assets/sobre.png';
import AcademiaOverview from '../AcademiaOverview';
import Title from '../Title';
import SlideCursos from '../Slides/SlideCursos';

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
		setXxlSize(window.innerWidth);
	}, []);

	React.useEffect(() => {
		const content = document.querySelector('.hero--content');
		const image = document.querySelector('.img-wrapper');

		if (content) {
			content.classList.remove('hero--content');
			setTimeout(() => {
				content.classList.add('hero--content');
			});
		}

		if (image) {
			image.classList.remove('img-wrapper');
			setTimeout(() => {
				image.classList.add('img-wrapper');
			});
		}
	}, [heroSlide]);

	return (
		<div>
			<main>
				<Container className="hero">
					<HomeNav
						setHeroSlide={setHeroSlide}
						className="hero--control my-auto"
					/>

					<div className="hero--content my-auto">
						<h1 aria-live="polite">{heroSlide.title}</h1>
						<p aria-live="polite">{heroSlide.text}</p>
						<NavLink to={heroSlide.btnHref} className="hero--button">
							{heroSlide.btnText}
						</NavLink>
					</div>

					{xxlSize >= 1200 && (
						<div className="img-wrapper my-auto">
							<img
								src={heroSlide.img && heroSlide.img}
								alt={heroSlide.btnText}
								aria-live="polite"
							/>
						</div>
					)}
				</Container>
			</main>

			<AcademiaOverview type={1} />

			<section className="home--section">
				<Container>
					<Title content="Cursos" />

					<SlideCursos />
				</Container>
			</section>

			<section className="home--section">
				<Container>
					<Title content="Depoimentos" />
				</Container>
			</section>

			<section className="home--section">
				<Container>
					<Title content="Últimas postagens" span="BLOG" />
				</Container>
			</section>
		</div>
	);
};

export default Home;
