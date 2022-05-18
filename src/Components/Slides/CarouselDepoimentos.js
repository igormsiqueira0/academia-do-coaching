import React from 'react';
import Slider from 'react-slick/lib/slider';
import SlideDepoimentos from './SlideDepoimentos';

const CarouselDepoimentos = () => {
	const [data, setData] = React.useState(null);
	const [activeSlideBefore, setActiveSlideBefore] = React.useState(0);

	async function fetchData() {
		const jsonData = await (await fetch('./depoimentos.json')).json();

		setTimeout(() => {
			setData(jsonData);
		}, 500);
	}

	React.useEffect(() => {
		fetchData();
	}, []);

	React.useEffect(() => {
		// reset actives
		const allActives = document.querySelectorAll(
			'.home--depoimentos .slick-active'
		);
		allActives.forEach((item) => {
			item.classList.remove('first-active');
			item.classList.remove('middle-slide');
		});

		// deixar primeiro ativo na esquerda
		const firstActive = allActives[0];

		if (firstActive) {
			firstActive.classList.add('first-active');
			const firstActiveIndex = firstActive.dataset.index;
			// margem no previous
			if (firstActive !== 0) {
				const previous = document.querySelector(
					`.home--depoimentos [data-index="${firstActiveIndex - 1}"]`
				);

				if (previous) {
					previous.classList.add('previous-slide');
				}
			}
			// centraliza o do meio
			if (allActives.length > 1) allActives[1].classList.add('middle-slide');
			// n deixa o ultimo ter classes current
			allActives.forEach((slide) => {
				if (+slide.dataset.index === data.length - 1) {
					slide.classList.add('last-item');
				}
			});
		}
	}, [data, activeSlideBefore]);

	const settings = {
		infinite: false,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 3,
		beforeChange: (current, next) => setActiveSlideBefore(next),
		prevArrow: <button className="slide-arrow slide-prev"></button>,
		nextArrow: <button className="slide-arrow slide-next"></button>,
		responsive: [
			{
				breakpoint: 1399,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	if (data)
		return (
			<Slider {...settings}>
				{data.map(({ nome, profissao, depoimento, imagem }) => (
					<SlideDepoimentos
						key={nome}
						nome={nome}
						profissao={profissao}
						depoimento={depoimento}
						imagem={imagem}
					/>
				))}
			</Slider>
		);
};

export default CarouselDepoimentos;
