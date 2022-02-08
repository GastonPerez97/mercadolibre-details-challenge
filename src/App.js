import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import ProductDetails from "./components/ProductDetails/ProductDetails";
import ProductCarousel from "./components/ProductCarousel/ProductCarousel";

const App = () => {
	return (
		<>
			<main>
				<Navbar />
				<Breadcrumbs />
				<ProductDetails />
				<ProductCarousel />
			</main>

			<footer>Desarrollado por&nbsp;
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
