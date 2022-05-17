import React from 'react';
import { useNavigate } from 'react-router-dom';

const SlideCursos = ({ curso, categoria, imagem }) => {
	const navigateTo = useNavigate();

	function handleSlideClick() {
		navigateTo('/cursos');
	}

	return (
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
	);
};

export default SlideCursos;
