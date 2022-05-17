import React from 'react';

const Title = ({ content, span }) => {
	return (
		<div className="main-title-holder">
			{span && <span>{span}</span>}
			<h1 className="main-title">{content}</h1>
		</div>
	);
};

export default Title;
