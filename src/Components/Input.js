import React from 'react';

const Input = ({ isTextArea, type, label, ...rest }) => {
	return (
		<div className="input-container">
			<label htmlFor="">{label}</label>
			{isTextArea ? (
				<textarea name={label} id={label} {...rest}></textarea>
			) : (
				<input type={type} id={label} name={label} {...rest} />
			)}
		</div>
	);
};

export default Input;
