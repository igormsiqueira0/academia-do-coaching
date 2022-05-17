import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick/lib/slider';

const SlideCursos = () => {
	const [data, setData] = React.useState(null);
	const [activeSlideBefore, setActiveSlideBefore] = React.useState(0);
	const [activeSlideAfter, setActiveSlideAfter] = React.useState(0);

	const navigateTo = useNavigate();

	function handleSlideClick() {
		navigateTo('/cursos');
	}

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
				const previousContainer = previous.querySelector('.slide-container');
				previousContainer.classList.add('slide-previous');
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
						<div key={curso}>
							<div className="slide-container" onClick={handleSlideClick}>
								<div className="slide-img-wrapper">
									<img src={imagem} alt={curso} />
								</div>
								<div className="slide-content">
									<span>{categoria}</span>
									<h2>{curso}</h2>
								</div>
								<button onClick={handleSlideClick}></button>
							</div>
						</div>
					))}
				</Slider>
			</>
		);
};

export default SlideCursos;
