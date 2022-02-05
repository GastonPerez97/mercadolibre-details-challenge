import "./ProductCard.css";

const ProductCard = props => {
	const formattedPrice = new Intl.NumberFormat('es-AR').format(props.price);

	return (
		<section className="card-container">
			<img src={props.picture} alt="Imagen de producto" />

			<div className="card-body">
				<h3>$ { formattedPrice }</h3>
				{ props.freeShipping && 
					<p class="card-free-shipping">Env&iacute;o gratis</p>
				}
				<p>{ props.title }</p>
			</div>
		</section>
	);
}

export default ProductCard;
