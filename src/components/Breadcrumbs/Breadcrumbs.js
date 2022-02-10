import "./Breadcrumbs.css";
import { MdKeyboardArrowRight } from "react-icons/md";

const Breadcrumbs = () => {
	return (
		<section className="main-container pt-15px">
			<div className="text-interest">
				<b>Tambi&eacute;n puede interesarte: </b>
				<span>peluche - peluchestitch</span>
			</div>

			<div className="breadcrumbs-row">
				<section className="breadcrumbs">
					<p>Volver al listado</p>
					<nav>
						<ol className="breadcrumbs-list">
							<li>Juegos y Juguetes </li><MdKeyboardArrowRight className="breadcrumbs-arrow-right" />
							<li>Peluches </li><MdKeyboardArrowRight className="breadcrumbs-arrow-right" />
							<li>Stitch</li>
						</ol>
					</nav>
				</section>
				
				<ul className="share-or-sell">
					<li>Compartir</li>
					<li>Vender uno igual</li>
				</ul>
			</div>
		</section>
	);
}

export default Breadcrumbs;