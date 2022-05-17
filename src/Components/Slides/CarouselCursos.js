import React from 'react';
import Slider from 'react-slick/lib/slider';
import SlideCursos from './SlideCursos';

const CarouselCursos = () => {
	const [data, setData] = React.useState(null);
	const [activeSlideBefore, setActiveSlideBefore] = React.useState(0);
	const [activeSlideAfter, setActiveSlideAfter] = React.useState(0);

	async function fetchData() {
		const jsonData = await (await fetch('./cursos.json')).json();

		setTimeout(() => {
			setData(jsonData);
		}, 500);
	}

	React.useEffect(() => {
		fetchData();
	}, []);

	React.useEffect(() => {
		setTimeout(() => {
			const current = document.querySelector('.slick-current');
			let dataIndex;

			if (current) {
				dataIndex = current.dataset.index;
			}

			if (current !== 0) {
				const previous = document.querySelector(
					`.slick-slide[data-index="${dataIndex - 1}"]`
				);
				const allContainers = document.querySelectorAll('.slide-container');
				allContainers.forEach((container) => {
					container.classList.remove('slide-previous');
				});
				if (previous) {
					const previousContainer = previous.querySelector('.slide-container');
					previousContainer.classList.add('slide-previous');
				}
			}
		});
	}, [activeSlideAfter, activeSlideBefore]);

	const settings = {
		infinite: false,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		beforeChange: (current, next) => setActiveSlideBefore(next),
		afterChange: (current) => setActiveSlideAfter(current),
		prevArrow: <button className="slide-arrow slide-prev"></button>,
		nextArrow: <button className="slide-arrow slide-next"></button>,
		responsive: [
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};

	if (data)
		return (
			<>
				<Slider {...settings}>
					{data.map(({ curso, categoria, imagem }) => (
						<SlideCursos
							key={curso}
							curso={curso}
							categoria={categoria}
							imagem={imagem}
						/>
					))}
				</Slider>
			</>
		);
};

export default CarouselCursos;
