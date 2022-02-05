import "./SellerPosts.css";
import ProductCard from "../../ProductCard/ProductCard";

import productImgOne from "../../../assets/img/products/product1.jpg";
import productImgTwo from "../../../assets/img/products/product2.jpg";
import productImgThree from "../../../assets/img/products/product3.jpg";

const SellerPosts = () => {
	return (
		<section>
			<hr className="product-details-hr" />

			<div className="seller-posts-container">
				<h2 className="product-details-subtitle">Publicaciones del vendedor</h2>

				<div className="seller-posts-card-container">
					<ProductCard
						title="Peluche Stitch 20cm Importado Lilo Y Stitch Hermosos"
						price={ 1090 }
						picture={ productImgOne }
					/>

					<ProductCard
						title="Peluche Stitch 55-60cm Importado Lilo Y Stitch Hermosos"
						price={ 6590 }
						picture={ productImgTwo }
						freeShipping={ true }
					/>

					<ProductCard
						title="Peluche Stitch 80cm Sentado Lilo Disney Importado"
						price={ 11450 }
						picture={ productImgThree }
						freeShipping={ true }
					/>
				</div>

				<p className="blue-anchor mt-24px d-inline-block">Ver m&aacute;s publicaciones del vendedor</p>
			</div>
		</section>
	);
}

export default SellerPosts;
