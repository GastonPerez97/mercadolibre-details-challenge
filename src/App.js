import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel";
import InfoHeader from "./components/InfoHeader/InfoHeader";

const App = () => {
	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => setDarkMode(prevState => !prevState);

	return (
		<>
			<InfoHeader />
			
			<header className={darkMode ? "dark-mode" : ""}>
				<Navbar
					darkMode={ darkMode }
					toggleDarkMode={ toggleDarkMode }
				/>
			</header>

			<main className={darkMode ? "dark-mode" : ""}>
				<Breadcrumbs />
				<ProductDetails />
				<ProductCarousel />
			</main>

			<footer className={darkMode ? "dark-mode" : ""}>
				Desarrollado por&nbsp;
				<a href="https://gastonperez.ar/" target="_blank" rel="noreferrer">
					Gast&oacute;n P&eacute;rez
				</a>

				<p>
					ATENCIÓN: Esta web se trata de un&nbsp;
						<a
							href="https://github.com/goncy/mercadolibre-details-challenge"
							target="_blank"
							rel="noreferrer"
						>challenge</a>, no es un intento de phishing hacia los usuarios que la visitan.
				</p>
			</footer>
		</>
	);
}

export default App;
