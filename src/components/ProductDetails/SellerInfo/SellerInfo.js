import "./SellerInfo.css";
import product from "../mock";

import { BiMessage } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { FaMedal, FaCheckCircle } from "react-icons/fa";
import { MdTimer } from "react-icons/md";

const SellerInfo = () => {
	return (
		<div className="seller-info mt-15px">
			<h3>Informaci&oacute;n sobre el vendedor</h3>

			<div className="location-and-mercadoLider">
				<GoLocation className="location-and-mercadoLider-icon" />

				<div className="fs-14px">
					<p className="fs-16px">Ubicaci&oacute;n</p>
					<p className="text-grey">{ product.seller_address.city.name }, { product.seller_address.state.name } </p>
				</div>
			</div>

			<div className="location-and-mercadoLider">
				<FaMedal className="location-and-mercadoLider-icon text-green" />

				<div className="fs-14px">
					<p className="fs-16px text-green">MercadoL&iacute;der Platinum</p>
					<p className="text-grey">&iexcl;Es uno de los mejores del sitio!</p>
				</div>
			</div>

			<ul className="reputation-bar">
				<li></li>
				<li></li>
				<li></li>
				<li></li>
				<li></li>
			</ul>

			<div className="reputation">
				<div className="rep-section">
					<p className="fs-24px">5504</p>
					<p className="fs-12px mt-8px">Ventas en los &uacute;ltimos 60 d&iacute;as</p>
				</div>

				<div className="rep-section">
					<div>
						<BiMessage className="rep-main-icon" />
						<FaCheckCircle className="rep-check-icon" />
					</div>

					<p className="fs-12px mt-8px">Brinda buena atenci&oacute;n</p>
				</div>

				<div className="rep-section">
					<div>
						<MdTimer className="rep-main-icon" />
						<FaCheckCircle className="rep-check-icon" />
					</div>

					<p className="fs-12px mt-8px">Despacha sus productos a tiempo</p>
				</div>
			</div>

			<p className="more-info">Ver m&aacute;s datos de este vendedor</p>
		</div>
	);
}

export default SellerInfo;
