import "./PaymentMethods.css";

import mercadoCredito from "../../../../assets/img/payment-methods/credit/mercado-credito.png";
import visaCredit from  "../../../../assets/img/payment-methods/credit/visa.png";
import americanCredit from  "../../../../assets/img/payment-methods/credit/american-express.png";
import masterCredit from  "../../../../assets/img/payment-methods/credit/master-card.png";
import naranjaCredit from  "../../../../assets/img/payment-methods/credit/naranja.png";
import visaDebit from "../../../../assets/img/payment-methods/debit/visa.png";
import masterDebit from "../../../../assets/img/payment-methods/debit/master-card.png";
import cabalDebit from "../../../../assets/img/payment-methods/debit/cabal.png";
import maestroDebit from "../../../../assets/img/payment-methods/debit/maestro.png";
import rapipago from "../../../../assets/img/payment-methods/cash/rapipago.png";
import pagoFacil from "../../../../assets/img/payment-methods/cash/pago-facil.png";

const PaymentMethods = () => {
	return (
		<div>
			<h2 className="additional-info-title">Medios de pago</h2>

			<h3 className="additional-info-subtitle mb-8px mt-0">Hasta 12 cuotas sin tarjeta</h3>
			<img src={ mercadoCredito } alt="Mercado Credito" />

			<h3 className="additional-info-subtitle mb-4px mt-24px">Tarjetas de cr&eacute;dito</h3>
			<p className="text-grey mb-8px">&iexcl;Cuotas sin inter&eacute;s con bancos seleccionados!</p>
			<img src={ visaCredit } alt="Tarjeta de credito Visa" className="mr-24px" />
			<img src={ americanCredit } alt="Tarjeta de credito American Express" className="mr-24px" />
			<img src={ masterCredit } alt="Tarjeta de credito Master Card" className="mr-24px" />
			<img src={ naranjaCredit } alt="Tarjeta de credito Naranja" />

			<h3 className="additional-info-subtitle mb-4px">Tarjetas de d&eacute;bito</h3>
			<img src={ visaDebit } alt="Tarjeta de Debito Visa" className="mr-24px" />
			<img src={ masterDebit } alt="Tarjeta de Debito Master Card" className="mr-24px" />
			<img src={ cabalDebit } alt="Tarjeta de Debito Cabal" className="mr-24px" />
			<img src={ maestroDebit } alt="Tarjeta de Debito Maestro" />

			<h3 className="additional-info-subtitle mb-4px">Efectivo</h3>
			<img src={ rapipago } alt="Efectivo Rapipago" className="mr-24px" />
			<img src={ pagoFacil } alt="Efectivo Pago Facil" className="mr-24px" />

			<p className="blue-anchor mt-24px d-inline-block">Conoc&eacute; otros medios de pago</p>
		</div>
	);
}

export default PaymentMethods;