import { useState } from "react";
import { nanoid } from "nanoid";

import "./Reviews.css";
import product from "../mock";
import Review from "./Review/Review";

import { AiFillStar } from "react-icons/ai";
import { RiErrorWarningFill } from "react-icons/ri";

const Reviews = () => {
	const createEmptyReview = () => {
		return {
			id: nanoid(),
			title: "",
			comments: "",
			rating: 0,
			likes: 0,
			dislikes: 0
		}
	}

	const [reviews, setReviews] = useState(product.reviews);
	const [newReviewFormData, setNewReviewFormData] = useState(createEmptyReview());
	const [showNewReviewErrors, setShowNewReviewErrors] = useState(false);

	const getNumberOfReviewsWithRating = ratingNumber => {
		let count = 0;

		reviews.forEach(review => {
			if (review.rating === ratingNumber)
				count++;
		});

		return count;
	}

	let avgRating = 0;
	reviews.forEach(review => avgRating += review.rating);
	avgRating = (avgRating / reviews.length).toFixed(1);

	const avgRatingStarsElement = [...Array(5)].map((star, index) => (       
        <AiFillStar
			key={ index }
			className={ (index + 1) <= Math.round(avgRating)
				? "review-star-filled"
				: "review-star-empty"
			}
		/>
    ));

	const handleVote = (id, vote, action) => {
		setReviews(prevReviews => {
			return prevReviews.map(prevReview => {
				if (prevReview.id === id) {
					return vote === "like"
						? {
							...prevReview,
							likes: action === "add" ? prevReview.likes + 1 : prevReview.likes - 1
						  }
						: {
							...prevReview,
							dislikes: action === "add" ? prevReview.dislikes + 1 : prevReview.dislikes - 1
						  }
				} else {
					return {...prevReview}
				}
			});
		});
	}

	const reviewElements = reviews.map(review => (
		<Review
			key={ review.id }
			title={ review.title }
			comments={ review.comments }
			rating={ review.rating }
			likes={ review.likes }
			dislikes={ review.dislikes }
			handleLike={ () => handleVote(review.id, "like", "add") }
			handleDislike={ () => handleVote(review.id, "dislike", "add") }
			removeLike={ () => handleVote(review.id, "like", "remove") }
			removeDislike={ () => handleVote(review.id, "dislike", "remove") }
		/>
	));

	const createRatingStarElementOf = numberOfStars => {
		return (
			<div className="review-counter-star">
				{ numberOfStars === 1
					? <p className="review-counter-star-text">{ numberOfStars } estrella</p>
					: <p>{ numberOfStars } estrellas</p>
				}

				<div className="review-counter-bar">
					<span
						className="review-counter-bar-filled"
						style={{width: `${getNumberOfReviewsWithRating(numberOfStars) * 100 / reviews.length}%` }}>
					</span>
				</div>

				<p>{ getNumberOfReviewsWithRating(numberOfStars) }</p>
			</div>
		);
	}

	const handleNewReviewChange = event => {
		const { name, value } = event.target;
		setNewReviewFormData(prevFormData => ({...prevFormData, [name]: value}));
	}

	const handleNewReviewRating = ratingNumber => {
		setNewReviewFormData(prevFormData => ({...prevFormData, rating: ratingNumber}));
	}

	const handleNewReviewSubmit = () => {
		const { title, comments, rating } = newReviewFormData;
		
		if (title !== "" && comments.length >= 30 && comments.length <= 1500 && rating !== 0) {
			setReviews(prevReviews => [{...newReviewFormData}, ...prevReviews]);
			setNewReviewFormData(createEmptyReview());
			setShowNewReviewErrors(false);
		} else {
			setShowNewReviewErrors(true);
		}
	}

	return (
		<section>
			<hr className="product-details-hr" />

			<h2 className="product-details-subtitle">Opiniones sobre { product.title }</h2>

			<div className="reviews-summary-container">
				<div className="reviews-avg">
					<p className="avg-rating">{ avgRating }</p>

					<div>{ avgRatingStarsElement }</div>

					<p className="review-counter-text">Promedio entre { reviews.length } opiniones</p>
				</div>

				<div className="review-counter-container">
					{ createRatingStarElementOf(5) }
					{ createRatingStarElementOf(4) }
					{ createRatingStarElementOf(3) }
					{ createRatingStarElementOf(2) }
					{ createRatingStarElementOf(1) }
				</div>
			</div>

			<div className="new-review-container">
				<h3>Cont&aacute; lo que pens&aacute;s de este producto</h3>

				<div className="new-review-stars">
					<AiFillStar
						className={`new-review-star review-star-${newReviewFormData.rating >= 1 ? "filled" : "empty"}`}
						onClick={ () => handleNewReviewRating(1) }
					/>

					<AiFillStar 
						className={`new-review-star review-star-${newReviewFormData.rating >= 2 ? "filled" : "empty"}`}
						onClick={ () => handleNewReviewRating(2) }
					/>

					<AiFillStar 
						className={`new-review-star review-star-${newReviewFormData.rating >= 3 ? "filled" : "empty"}`}
						onClick={ () => handleNewReviewRating(3) }
					/>

					<AiFillStar 
						className={`new-review-star review-star-${newReviewFormData.rating >= 4 ? "filled" : "empty"}`}
						onClick={ () => handleNewReviewRating(4) }
					/>
					
					<AiFillStar 
						className={`new-review-star review-star-${newReviewFormData.rating >= 5 ? "filled" : "empty"}`}
						onClick={ () => handleNewReviewRating(5) }
					/>
					{ (showNewReviewErrors && newReviewFormData.rating === 0) &&
						<small className="new-review-error">
							<RiErrorWarningFill />
							Ingres&aacute; una puntuaci&oacute;n.
						</small>
					}
				</div>
				
				<div className="new-review-input-container">
					<label htmlFor="title">En pocas palabras, &iquest;Qu&eacute; te pareci&oacute;?</label>

					<input
						type="text"
						name="title"
						onChange={ handleNewReviewChange }
						value={ newReviewFormData.title }
						placeholder="El producto..."
					/>
					{ (showNewReviewErrors && newReviewFormData.title === "") &&
						<small className="new-review-error">
							<RiErrorWarningFill />
							Complet&aacute; este campo.
						</small>
					}
				</div>

				<div className="new-review-input-container">
					<label htmlFor="comments">Contale un poco m&aacute;s a otras personas sobre el producto</label>

					<textarea
						type="text"
						name="comments"
						onChange={ handleNewReviewChange }
						value={ newReviewFormData.comments }
						placeholder="El producto me pareci&oacute;..."
						rows="5"
						maxLength={1500}
						minLength={30}
					/>

					<div className="new-review-characters-text">
						{ showNewReviewErrors
							&& (newReviewFormData.comments.length < 30 || newReviewFormData.comments.length > 1500)
							? <small className="new-review-error">
								<RiErrorWarningFill />
								Escrib&iacute; al menos 30 caracteres.
							  </small>
							: <small>Escrib&iacute; al menos 30 caracteres.</small>
						}
						<small>{ newReviewFormData.comments.length } / 1500</small>
					</div>
				</div>

				<button className="btn-blue btn-new-review" onClick={ handleNewReviewSubmit }>Opinar</button>
			</div>

			<div>
				<div className="reviews-main-buttons">
					<button className="btn-review-category">Todas</button>
					<button className="btn-review-category">Positivas</button>
					<button className="btn-review-category">Negativas</button>
				</div>

				{ reviewElements }
			</div>
		</section>
	);
}

export default Reviews;
