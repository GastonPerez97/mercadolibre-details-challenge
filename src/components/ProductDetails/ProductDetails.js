import "./ProductDetails.css";
import ProductPrice from "./ProductPrice/ProductPrice";
import SellerInfo from "./SellerInfo/SellerInfo";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import Gallery from "./Gallery/Gallery";

const ProductDetails = () => {
	return (
		<section className="main-container product-details-grid bg-white">
			<article className="right-column">
				<ProductPrice />
				<SellerInfo />
				<AdditionalInfo />
			</article>

			<article className="left-column">
				<Gallery />
			</article>
		</section>
	);
}

export default ProductDetails;
