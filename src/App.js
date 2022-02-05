import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Breadcrumbs from "./components/Breadcrumbs/Breadcrumbs";
import ProductDetails from "./components/ProductDetails/ProductDetails";

const App = () => {
	return (
		<main>
			<Navbar />
			<Breadcrumbs />
			<ProductDetails />
		</main>
	);
}

export default App;
