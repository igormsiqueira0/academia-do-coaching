import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/css/main.css';

import Footer from './Components/Footer';
import Header from './Components/Header';
import Blog from './Components/Pages/Blog';
import Contato from './Components/Pages/Contato';
import Cursos from './Components/Pages/Cursos';
import Home from './Components/Pages/Home';
import NotFound from './Components/Pages/NotFound';
import Sobre from './Components/Pages/Sobre';

function App() {
	return (
		<div className="App">
			<BrowserRouter basename={`/${process.env.PUBLIC_URL}`}>
				<Header />
				<Routes>
					<Route path="" element={<Home />} />
					<Route path="sobre" element={<Sobre />} />
					<Route path="cursos" element={<Cursos />} />
					<Route path="blog" element={<Blog />} />
					<Route path="contato" element={<Contato />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
