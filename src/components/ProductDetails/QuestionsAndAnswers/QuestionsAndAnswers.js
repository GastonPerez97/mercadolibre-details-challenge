import { useState } from "react";
import "./QuestionsAndAnswers.css";

import product from "../mock";
import Question from "./Question/Question";

import { RiErrorWarningFill } from "react-icons/ri";

const QuestionsAndAnswers = () => {
	const [newQuestion, setNewQuestion] = useState("");
	const [newQuestions, setNewQuestions] = useState([]);
	const [showNewQuestionError, setShowNewQuestionError] = useState(false);

	const handleChange = event => setNewQuestion(event.target.value);

	const handleSubmit = () => {
		if (newQuestion !== "") {
			setNewQuestions(prevState => [newQuestion, ...prevState]);
			setNewQuestion("");
			setShowNewQuestionError(false);
		} else {
			setShowNewQuestionError(true);
		}
	};

	const newQuestionElements = newQuestions.map((question, index) => (
		<Question key={ index } question={ question } />
	));

	const questionElements = product.questions.map((question, index) => (
		<Question
			key={ index }
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
				<input
					type="text"
					name="newQuestion"
					onChange={ handleChange }
					value={ newQuestion }
					placeholder="Escrib&iacute; tu pregunta..."
				/>

				<button className="btn-blue" onClick={ handleSubmit }>Preguntar</button>
			</div>

			{ (showNewQuestionError && newQuestion.length <= 0) &&
				<small className="new-review-error">
					<RiErrorWarningFill />
					Complet&aacute; este campo.
				</small>
			}

			<h3>&Uacute;ltimas realizadas</h3>

			<div className="last-questions">
				{ newQuestionElements }
				{ questionElements }
			</div>

			<span className="blue-anchor">Ver todas las preguntas</span>
		</section>
	);
}

export default QuestionsAndAnswers;
