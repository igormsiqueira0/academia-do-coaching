import React from 'react';
import { Container } from 'react-bootstrap';
import { ReactComponent as Cursos } from '../assets/cursos.svg';
import { ReactComponent as Alunos } from '../assets/alunos.svg';
import { ReactComponent as Horas } from '../assets/horas.svg';

const AcademiaOverview = ({ type }) => {
	const [data, setData] = React.useState(null);
	const [cursoNum, setCursoNum] = React.useState(0);
	const [alunosNum, setAlunosNum] = React.useState(0);
	const [horasNum, setHorasNum] = React.useState(0);

	async function FetchData() {
		const jsonData = await (await fetch('./overview.json')).json();

		setData(jsonData);
	}

	React.useEffect(() => {
		FetchData();
	}, []);

	React.useEffect(() => {
		if (data) {
			const cursoInterval = setInterval(() => {
				setCursoNum((state) => {
					if (state >= data[0].quantidade) {
						return data[0].quantidade;
					}
					clearInterval(cursoInterval);
					return state + Math.round(data[0].quantidade / 100);
				});
			}, 25 * Math.random());
		}
	}, [data, cursoNum]);

	React.useEffect(() => {
		if (data) {
			const alunosInterval = setInterval(() => {
				setAlunosNum((state) => {
					if (state >= data[1].quantidade) {
						return data[1].quantidade;
					}
					clearInterval(alunosInterval);
					return state + Math.round(data[1].quantidade / 100);
				});
			}, 25 * Math.random());
		}
	}, [data, alunosNum]);

	React.useEffect(() => {
		if (data) {
			const horasInterval = setInterval(() => {
				setHorasNum((state) => {
					if (state >= data[2].quantidade) {
						return data[2].quantidade;
					}
					clearInterval(horasInterval);
					return state + Math.round(data[2].quantidade / 100);
				});
			}, 25 * Math.random());
		}
	}, [data, horasNum]);

	if (data)
		return (
			<section className={`overview type-${type}`}>
				<Container>
					<div
						className={`d-flex flex-lg-row flex-column justify-content-between align-items-center ${
							type === 1 ? 'gap-5' : 'gap-3'
						}`}
					>
						<div className="overview--item">
							<Cursos />
							<p>
								{cursoNum === data[0].quantidade
									? `+ de ${cursoNum}`
									: `${cursoNum}`}
								{type === 1 ? <br /> : ' '}
								{data[0].nome}
							</p>
						</div>
						<span></span>
						<div className={`overview--item type-${type}`}>
							<Alunos />
							<p>
								{alunosNum === data[1].quantidade
									? `+ de ${alunosNum}`
									: `${alunosNum}`}
								{type === 1 ? <br /> : ' '}
								{data[1].nome}
							</p>
						</div>
						<span></span>
						<div className={`overview--item type-${type}`}>
							<Horas />
							<p>
								{horasNum === data[2].quantidade
									? `+ de ${horasNum}`
									: `${horasNum}`}
								{type === 1 ? <br /> : ' '}
								{data[2].nome}
							</p>
						</div>
					</div>
				</Container>
			</section>
		);
};

export default AcademiaOverview;
