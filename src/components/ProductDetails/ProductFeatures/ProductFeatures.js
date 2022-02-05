import "./ProductFeatures.css";
import product from "../mock";

const ProductFeatures = () => {
	const mainFeatures = product.attributes.filter(attribute => attribute.attribute_group_id === "");
	const otherFeatures = product.attributes.filter(attribute => attribute.attribute_group_id === "OTHERS");

	const mainFeatureElements = mainFeatures.map(feature => (
		<tr key={ feature.id }>
			<th className="feature-title">{ feature.name }</th>
			<td className="feature-value">{ feature.value_name }</td>
		</tr>
	));

	const otherFeatureElements = otherFeatures.map(feature => (
		<p key={ feature.id }>
			<b>{ feature.name }: </b>
			{ feature.value_name }
		</p>
	));

	return (
		<section>
			<hr className="product-details-hr" />
			
			<h2 className="product-details-subtitle">Caracter&iacute;sticas principales</h2>

			<table className="features-table">
				<tbody>
					{ mainFeatureElements }
				</tbody>
			</table>

			<div className="other-features-container">
				<h3>Otras caracter&iacute;sticas</h3>

				<div className="other-features">
					{ otherFeatureElements }
				</div>
			</div>
		</section>
	);
}

export default ProductFeatures;
