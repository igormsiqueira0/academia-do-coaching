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

	const section = React.useRef();

	async function FetchData() {
		const jsonData = await (await fetch('./overview.json')).json();

		setData(jsonData);
	}

	React.useEffect(() => {
		const halfWindow = window.innerHeight * 0.8 + 5;
		const offset = Math.floor(section.current.offsetTop - halfWindow);

		function fetchOnScroll() {
			if (offset < window.scrollY) {
				FetchData();
				window.removeEventListener('scroll', fetchOnScroll);
			}
		}

		window.addEventListener('scroll', fetchOnScroll);

		setTimeout(() => {
			const event = new CustomEvent('scroll', {
				detail: {
					scrollTop: 1,
				},
			});
			window.dispatchEvent(event);
		});
	}, [section]);

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
			}, 50 * Math.random());
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
			}, 50 * Math.random());
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
			}, 50 * Math.random());
		}
	}, [data, horasNum]);

	return (
		<section className={`overview type-${type}`} ref={section}>
			<Container>
				<div
					className={`d-flex flex-lg-row flex-column justify-content-between align-items-center ${
						type === 1 ? 'gap-5' : 'gap-3'
					}`}
				>
					<div className="overview--item">
						<Cursos />
						<p>
							{data && cursoNum === data[0].quantidade
								? `+ de ${cursoNum}`
								: `${cursoNum}`}
							{type === 1 ? <br /> : ' '}
							cursos ativos
						</p>
					</div>
					<span></span>
					<div className={`overview--item`}>
						<Alunos />
						<p>
							{data && alunosNum === data[1].quantidade
								? `+ de ${alunosNum}`
								: `${alunosNum}`}
							{type === 1 ? <br /> : ' '}
							alunos inscritos
						</p>
					</div>
					<span></span>
					<div className={`overview--item`}>
						<Horas />
						<p>
							{data && horasNum === data[2].quantidade
								? `+ de ${horasNum}`
								: `${horasNum}`}
							{type === 1 ? <br /> : ' '}
							horas de aulas
						</p>
					</div>
				</div>
			</Container>
		</section>
	);
};

export default AcademiaOverview;
