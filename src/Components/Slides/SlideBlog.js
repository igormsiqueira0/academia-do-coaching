import React from 'react';
import { useNavigate } from 'react-router-dom';

const SlideBlog = ({ post, categoria, imagem }) => {
	const navigateTo = useNavigate();

	function handleSlideClick() {
		navigateTo('/blog');
	}

	return (
		<div className="slide-container" onClick={handleSlideClick}>
			<div className="slide-img-wrapper">
				<img src={imagem} alt={`Foto de uma palestra`} />
			</div>
			<div className="slide-content">
				<span>{categoria}</span>
				<h2>{post}</h2>
			</div>
			<button onClick={handleSlideClick}></button>
		</div>
	);
};

export default SlideBlog;
