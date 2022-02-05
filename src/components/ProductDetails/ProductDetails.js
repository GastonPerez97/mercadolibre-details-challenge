import "./ProductDetails.css";
import ProductPrice from "./ProductPrice/ProductPrice";
import SellerInfo from "./SellerInfo/SellerInfo";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import Gallery from "./Gallery/Gallery";
import SellerPosts from "./SellerPosts/SellerPosts";
import ProductFeatures from "./ProductFeatures/ProductFeatures";
import ProductDescription from "./ProductDescription/ProductDescription";
import QuestionsAndAnswers from "./QuestionsAndAnswers/QuestionsAndAnswers";

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
				
				<div className="mx-30px">
					<SellerPosts />
					<ProductFeatures />
					<ProductDescription />
					<QuestionsAndAnswers />
				</div>
			</article>
		</section>
	);
}

export default ProductDetails;
