import useWindowWidth from "../../hooks/useWindowWidth";

import "./ProductDetails.css";

import ProductPrice from "./ProductPrice/ProductPrice";
import SellerInfo from "./SellerInfo/SellerInfo";
import AdditionalInfo from "./AdditionalInfo/AdditionalInfo";
import Gallery from "./Gallery/Gallery";
import SellerPosts from "./SellerPosts/SellerPosts";
import ProductFeatures from "./ProductFeatures/ProductFeatures";
import ProductDescription from "./ProductDescription/ProductDescription";
import QuestionsAndAnswers from "./QuestionsAndAnswers/QuestionsAndAnswers";
import Reviews from "./Reviews/Reviews";

const ProductDetails = () => {
	const width = useWindowWidth();

	return (
		<section className="main-container product-details-grid bg-white">
			<article className="right-column">
				{ width <= 1200 && <Gallery /> }
				<ProductPrice />
				<SellerInfo />
				<AdditionalInfo />
			</article>

			<article className="left-column">
				{ width > 1200 && <Gallery /> }
				
				<div className="mx-30px">
					<SellerPosts />
					<ProductFeatures />
					<ProductDescription />
					<QuestionsAndAnswers />
					<Reviews />
				</div>
			</article>
		</section>
	);
}

export default ProductDetails;
