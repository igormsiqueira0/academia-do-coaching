import React from 'react';
import { ButtonGroup } from 'react-bootstrap';

import imgSobre from '../assets/sobre.png';
import imgCursos from '../assets/cursos.jpg';
import imgBlog from '../assets/blog.jpg';

const HomeNav = ({ setHeroSlide, ...rest }) => {
	const SLIDE_1_CONTENT = {
			title:
				'A maior plataforma de cursos na área de Coaching do Brasil não para de crescer.',
			text: 'Se o seu objetivo é aprender ou se aperfeiçoar, cada vez mais, neste segmento, a Academia do Coaching é a plataforma ideal para o seu desenvolvimento.',
			btnText: 'SAIBA MAIS',
			btnHref: '/sobre',
			img: imgSobre,
		},
		SLIDE_2_CONTENT = {
			title: 'A maior experiência de coaching e psicologia positiva!',
			text: 'Confira os melhores cursos de coaching que o Brasil tem a oferecer para que você possa evoluir em sua carreira.',
			btnText: 'VEJA OS CURSOS',
			btnHref: '/cursos',
			img: imgCursos,
		},
		SLIDE_3_CONTENT = {
			title:
				'A grande procura por coaching é a partir da necessidade de desenvolvimento profissional e pessoal.',
			text: 'Além da troca de inúmeros conhecimentos e vivências, a importância do coaching também pode ser descrita por meio da busca e desenvolvimento de resultados extraordinários, que visam mudar para positivo a engrenagem que dá sentido e foco às pessoas.',
			btnText: 'EXPLORE MAIS',
			btnHref: '/blog',
			img: imgBlog,
		};

	const allBtn = document.querySelectorAll('.hero--control button');

	function handleClick(e) {
		allBtn.forEach((btnEl) => btnEl.classList.remove('active'));

		e.currentTarget.classList.add('active');

		dispatch({ type: e.currentTarget.dataset.index });
	}

	const [state, dispatch] = React.useReducer(reducer, SLIDE_1_CONTENT);
	function reducer(slide, { type }) {
		switch (type) {
			case '1':
				return SLIDE_1_CONTENT;
			case '2':
				return SLIDE_2_CONTENT;
			case '3':
				return SLIDE_3_CONTENT;
			default:
				throw new Error();
		}
	}

	React.useEffect(() => {
		setHeroSlide(state);
	}, [setHeroSlide, state]);

	return (
		<div {...rest}>
			<ButtonGroup className="hero--control--inner">
				<button onClick={handleClick} data-index="1" className="active">
					1
				</button>
				<span></span>
				<button onClick={handleClick} data-index="2">
					2
				</button>
				<span></span>
				<button onClick={handleClick} data-index="3">
					3
				</button>
			</ButtonGroup>
		</div>
	);
};

export default HomeNav;
