import React from 'react';

const SlideDepoimentos = ({ nome, profissao, depoimento, imagem }) => {
	return (
		<div className="slide-container">
			<div className="slide-img-wrapper">
				<img src={imagem} alt={nome} />
			</div>
			<div className="slide-content">
				<p>{depoimento}</p>
				<div>
					<h3>{nome}</h3>
					<span>{profissao}</span>
				</div>
			</div>
		</div>
	);
};

export default SlideDepoimentos;
