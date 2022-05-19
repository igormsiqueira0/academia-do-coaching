import React from 'react';
import { Container } from 'react-bootstrap';
import Head from '../Head';
import Input from '../Input';
import PageBanner from '../PageBanner';

const Contato = () => {
	return (
		<>
			<Head
				title="Contato"
				description="Envie suas dúvidas, feedbacks ou sugestões para nossa central de atendimento."
			/>

			<div>
				<PageBanner title="Contato" />

				<main className="contato">
					<Container>
						<form className="contato--field-holder">
							<Input type="text" label="Nome" required />

							<Input type="email" label="E-mail" required />

							<Input
								type="text"
								label="Telefone"
								pattern="^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$"
							/>

							<Input type="text" label="Assunto" required />

							<Input isTextArea type="text" label="Mensagem" required />

							<button className="contato--button">Enviar mensagem</button>
						</form>
					</Container>
				</main>
			</div>
		</>
	);
};

export default Contato;
