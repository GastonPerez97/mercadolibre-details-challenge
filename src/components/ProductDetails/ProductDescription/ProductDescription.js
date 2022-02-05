import "./ProductDescription.css";
import product from "../mock";

const ProductDescription = () => {
	return (
		<section>
			<hr className="product-details-hr" />
			
			<h2 className="product-details-subtitle">Descripci&oacute;n</h2>

			<p className="product-description">{ product.description.value }</p>
		</section>
	);
}

export default ProductDescription;
