import "./ProductDetails.css";
import ProductPrice from "./ProductPrice/ProductPrice";
import SellerInfo from "./SellerInfo/SellerInfo";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";

const ProductDetails = () => {
	return (
		<section className="main-container product-details-grid bg-white">
			<article className="right-column">
				<ProductPrice />
				<SellerInfo />
				<AdditionalInfo />
			</article>

			<article className="left-column">
				<p>left column</p>
			</article>
		</section>
	);
}

export default ProductDetails;
