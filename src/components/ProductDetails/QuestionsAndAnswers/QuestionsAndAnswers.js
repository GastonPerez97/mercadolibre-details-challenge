import "./QuestionsAndAnswers.css";
import product from "../mock";
import Question from "./Question/Question";

const QuestionsAndAnswers = () => {
	const questionElements = product.questions.map(question => (
		<Question
			question={ question.question }
			answer={ question.answer }
			answerDate={ question.answerDate }
		/>
	));
	
	return (
		<section className="questAns-container mb-24px">
			<h2 className="product-details-subtitle">Preguntas y respuestas</h2>

			<h3>&iquest;Qu&eacute; quer&eacute;s saber?</h3>

			<div className="faq-buttons">
				<button className="btn-light-blue">Costo y tiempo de env&iacute;o</button>
				<button className="btn-light-blue">Devoluciones gratis</button>
				<button className="btn-light-blue">Medios de pago y promociones</button>
				<button className="btn-light-blue">Garant&iacute;a</button>
			</div>

			<h3>Preguntale al vendedor</h3>

			<div className="question-input">
				<input type="text" placeholder="Escrib&iacute; tu pregunta..." />
				<button className="btn-blue">Preguntar</button>
			</div>

			<h3>&Uacute;ltimas realizadas</h3>

			<div className="last-questions">
				{ questionElements }
			</div>

			<span className="blue-anchor">Ver todas las preguntas</span>
		</section>
	);
}

export default QuestionsAndAnswers;
