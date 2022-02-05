import "./AdditionalInfo.css";
import PaymentMethods from "./PaymentMethods/PaymentMethods"
import Returns from "./Returns/Returns"
import Warranty from "./Warranty/Warranty";

const AdditionalInfo = () => {
	return (
		<section className="additional-info-container mt-15px">
			<Returns />
			<hr />
			<Warranty />
			<hr />
			<PaymentMethods />
		</section>
	);
}

export default AdditionalInfo;