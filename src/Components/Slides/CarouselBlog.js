import React from 'react';
import Slider from 'react-slick/lib/slider';
import SlideBlog from './SlideBlog';

const Carouselblog = () => {
	const [data, setData] = React.useState(null);
	const [activeSlideBefore, setActiveSlideBefore] = React.useState(0);

	async function fetchData() {
		const jsonData = await (await fetch('./blog.json')).json();

		setTimeout(() => {
			setData(jsonData);
		}, 500);
	}

	React.useEffect(() => {
		fetchData();
	}, []);

	React.useEffect(() => {
		// reset actives
		const allActives = document.querySelectorAll('.home--blog .slick-active');
		allActives.forEach((item) => {
			item.classList.remove('first-active');
			item.classList.remove('middle-slide');
			item.classList.remove('last-item');
		});

		// deixar primeiro ativo na esquerda
		const firstActive = allActives[0];

		if (firstActive) {
			firstActive.classList.add('first-active');
			const firstActiveIndex = firstActive.dataset.index;
			// margem no previous
			if (firstActive !== 0) {
				const previous = document.querySelector(
					`.home--blog [data-index="${firstActiveIndex - 1}"]`
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
				{data.map(({ post, categoria, imagem }) => (
					<SlideBlog
						key={post}
						post={post}
						categoria={categoria}
						imagem={imagem}
					/>
				))}
			</Slider>
		);
};

export default Carouselblog;
