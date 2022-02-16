import "./InfoHeader.css";

const InfoHeader = () => {
	return (
		<section className="info-header-container">
			<p>
				ATENCI&Oacute;N: Esta web se trata de un&nbsp;
					<a
						href="https://github.com/goncy/mercadolibre-details-challenge"
						target="_blank"
						rel="noreferrer"
					>Frontend Challenge.</a>
			</p>

			<p>No es una p&aacute;gina real de Mercado Libre ni un intento de phishing hacia los usuarios que la visitan.</p>
		</section>
	);
}

export default InfoHeader;