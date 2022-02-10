import "./ProductCarousel.css";

import ProductCard from "../ProductCard/ProductCard";

import productImgFour from "../../assets/img/products/product4.jpg";
import productImgFive from "../../assets/img/products/product5.jpg";
import productImgSix from "../../assets/img/products/product6.jpg";
import productImgSeven from "../../assets/img/products/product7.jpg";
import productImgEight from "../../assets/img/products/product8.jpg";
import productImgNine from "../../assets/img/products/product9.jpg";
import productImgTen from "../../assets/img/products/product10.jpg";
import productImgEleven from "../../assets/img/products/product11.jpg";
import productImgTwelve from "../../assets/img/products/product12.jpg";
import productImgThirteen from "../../assets/img/products/product13.jpg";


const ProductCarousel = props => {
	return (
		<section className="main-container product-carousel">
			<h2 className="product-carousel-title">Productos promocionados</h2>

			<div className="products-carousel-container mb-40px">
				<ProductCard
					title="Las Pistas De Blue Peluche Sonido Y Mov Int Original"
					picture={ productImgFour }
					price={ 14990 }
					freeShipping={ false }
				/>

				<ProductCard
					title="El Perrito De Julieta, Ladra Y Mueve La Cola Cuando Camina!"
					picture={ productImgFive }
					price={ 12800 }
					freeShipping={ true }
				/>

				<ProductCard
					title="Peluche Gigante Cienpies Didactico 1.5 Mts"
					picture={ productImgSix }
					price={ 15600 }
					freeShipping={ false }
				/>

				<ProductCard
					title="Lorito Pepe Granja Zenon Sonido Interactivo Camina Y Repite"
					picture={ productImgSeven }
					price={ 7499 }
					freeShipping={ true }
				/>

				<ProductCard
					title="Perro Mascota Puppy Dog Interactivo Ladra Gru&ntilde;e 2052 Ditoys"
					picture={ productImgEight }
					price={ 8715 }
					freeShipping={ true }
				/>
			</div>

			<h2 className="product-carousel-title">Quienes compraron este producto tambi&eacute;n compraron</h2>

			<div className="products-carousel-container pb-90px">
				<ProductCard
					title="Mu&ntilde;eco Lilo & Stitch X1 Coleccionable 8cm"
					picture={ productImgNine }
					price={ 999 }
					freeShipping={ false }
				/>

				<ProductCard
					title="Cubo Dado Anti Stress Ansiedad Y Nervios Color A Elecci&oacute;n"
					picture={ productImgTen }
					price={ 475 }
					freeShipping={ false }
				/>

				<ProductCard
					title="Cubo M&aacute;gico Juego Laberinto De 6 Lados 3d Juego De Ingenio"
					picture={ productImgEleven }
					price={ 299 }
					freeShipping={ false }
				/>

				<ProductCard
					title="Juego De Magia 100 Trucos Edici&oacute;n Plateada"
					picture={ productImgTwelve }
					price={ 4490 }
					freeShipping={ true }
				/>

				<ProductCard
					title="Mini Pop It Pack X10 Silicona Popit Colgante Nacional"
					picture={ productImgThirteen }
					price={ 1220 }
					freeShipping={ false }
				/>
			</div>
		</section>
	);
}

export default ProductCarousel;