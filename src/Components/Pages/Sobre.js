import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import AcademiaOverview from '../AcademiaOverview';
import PageBanner from '../PageBanner';
import Title from '../Title';

import Objetivos from '../../assets/img.png';
import Diferenciais from '../../assets/Imagem 7.png';
import Aprovacao from '../../assets/Imagem 9.png';
import Head from '../Head';

const Sobre = () => {
	return (
		<>
			<Head
				title="Sobre"
				description="Veja aqui tudo o que nossa plataforma tem a oferecer."
			/>
			<div className="sobre">
				<PageBanner title="Sobre a plataforma" />

				<main>
					<Container>
						<Title content="Visão geral" />
						<Row xs={1} lg={2}>
							<Col>
								<p>
									A Academia do Coaching é uma plataforma voltada às pessoas que
									querem evoluir nos mais variados aspectos da vida, desde o
									contexto pessoal até o profissional.
								</p>
							</Col>
							<Col>
								<p>
									Tendo cursos em diversas áreas do segmento, a Academia do
									Coaching é referência na categoria, sendo caracterizada pelo
									alto nível e excelência das formações.
								</p>
							</Col>
						</Row>
					</Container>
				</main>

				<AcademiaOverview type={2} />

				<section className="sobre--section">
					<Container>
						<div className="img-wrapper my-auto">
							<img src={Objetivos} alt="Imagem de dardo em um alvo" />
						</div>

						<div className="sobre--section--content">
							<Title content="Objetivos" />
							<ul>
								<li>Formar coaches de alto nível</li>
								<li>Contribuir para o aumento de performance</li>
								<li>Elevar a qualidade da categoria</li>
								<li>Disponibilizar serviços de apoio</li>
								<li>Maximizar o potencial</li>
							</ul>
						</div>
					</Container>
				</section>

				<section className="sobre--section sobre--section--reverse">
					<Container>
						<div className="sobre--section--content">
							<Title content="Diferenciais" />
							<ul>
								<li>Maior carga horária do segmento</li>
								<li>Metodologia de ensino exclusiva</li>
								<li>Aprovação internacional</li>
								<li>Maior quantidade de cursos ativos</li>
								<li>Módulos abrangentes de várias áreas</li>
							</ul>
						</div>

						<div className="img-wrapper my-auto">
							<img
								src={Diferenciais}
								alt="Imagem de lâmpadas no chão com uma em pé acessa"
							/>
						</div>
					</Container>
				</section>

				<section className="sobre--section">
					<Container>
						<div className="img-wrapper my-auto">
							<img src={Aprovacao} alt="Imagem de um globo holográfico" />
						</div>

						<div className="sobre--section--content">
							<Title content="Aprovação internacional" />
							<p>
								Considerada referência na área de Coaching, as formações da
								plataforma possuem reconhecimento em escala internacional.
							</p>
							<p>
								Ademais, os profissionais que ministram as formações têm
								treinamentos em diversos países.
							</p>
						</div>
					</Container>
				</section>
			</div>
		</>
	);
};

export default Sobre;
