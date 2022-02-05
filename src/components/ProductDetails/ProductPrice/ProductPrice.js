import "./ProductPrice.css";
import product from "../mock";

import { BsHeart } from "react-icons/bs";
import { BiTrophy } from "react-icons/bi";
import { HiOutlineTruck } from "react-icons/hi";
import { IoReturnDownBack, IoShieldCheckmarkOutline } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

const ProductPrice = () => {
	const formattedPrice = new Intl.NumberFormat('es-AR').format(product.price);
	const paymentTwelveMonths = Math.trunc(product.price / 12);
	const paymentTwelveMonthsDecimals = (product.price / 12 % 1).toFixed(2).substring(2);

	return (
		<section className="product-details">
			<p className="sold-quantity">Nuevo&nbsp;&nbsp;|&nbsp;&nbsp;{product.sold_quantity} vendidos</p>

			<div className="product-title">
				<h1>{ product.title }</h1>
				<BsHeart className="fav-icon" />
			</div>

			<div className="product-price">
				<h2>$ { formattedPrice }</h2>

				<div className="payment-twelve-months">
					<p>en 12x $ { paymentTwelveMonths }</p>
					<sup>{ paymentTwelveMonthsDecimals }</sup>
				</div>

				<p className="blue-anchor">Ver los medios de pago</p>
			</div>

			<div className="free-shipping-and-return">
				<HiOutlineTruck className="green-icon" />
				
				<div>
					<p>Llega gratis el <b>lunes</b></p>
					<p className="blue-anchor">Ver m&aacute;s formas de entrega</p>
				</div>
			</div>

			<div className="free-shipping-and-return">
				<IoReturnDownBack className="green-icon" />

				<div>
					<p>Devoluci&oacute;n gratis</p>
					<p className="thirty-days-text">Ten&eacute;s 30 d&iacute;as desde que lo recib&iacute;s.</p>
					<p className="blue-anchor">Conocer m&aacute;s</p>
				</div>
			</div>

			<p className="available-stock">Stock disponible</p>

			<span className="stock">
				<p>Cantidad:&nbsp;</p>
				<b>1 unidad</b>
				<MdKeyboardArrowDown className="stock-down-arrow" />
				<p className="available-quantity">({ product.available_quantity } disponibles)</p>
			</span>

			<button className="btn-blue product-details-btn mb-8px">Comprar ahora</button>
			<button className="btn-light-blue product-details-btn">Agregar al carrito</button>

			<div className="purchase-benefits">
				<div className="compra-protegida">
					<IoShieldCheckmarkOutline className="benefits-icon" />
					<p><span className="blue-anchor">Compra Protegida, </span>recib&iacute; tu producto que esperabas o te devolvemos tu dinero.</p>
				</div>
				
				<div className="mercado-puntos">
					<BiTrophy className="benefits-icon" />
					<p><span className="blue-anchor">Mercado Puntos. </span>Sum&aacute;s 135 puntos.</p>
				</div>
			</div>
		</section>
	);
}

export default ProductPrice;
