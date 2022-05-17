import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick/lib/slider';

const SlideCursos = () => {
	const [data, setData] = React.useState(null);

	const settings = {
		infinite: false,
		speed: 500,
		slidesToShow: 2,
		slidesToScroll: 2,
		prevArrow: <button className="slide-arrow slide-prev"></button>,
		nextArrow: <button className="slide-arrow slide-next"></button>,
	};

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

		const firstImage = document.querySelector('.slide-container');
		firstImage.style.marginLeft = '0px';
	}, []);

	if (data)
		return (
			<Slider {...settings}>
				{data.map(({ curso, categoria, imagem }, index) => (
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
		);
};

export default SlideCursos;
