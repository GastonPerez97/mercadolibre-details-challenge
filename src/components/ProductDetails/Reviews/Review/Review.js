import { useState } from "react"
import "./Review.css";

import { AiFillStar } from "react-icons/ai";
import { HiOutlineThumbUp, HiOutlineThumbDown, HiThumbUp, HiThumbDown } from "react-icons/hi";

const Review = props => {
	const [vote, setVote] = useState({hasVoted: false, value: ""});

	const handleUserVote = userVote => {
		if (vote.hasVoted)
			vote.value === "like" ? props.removeLike() : props.removeDislike();
		
		userVote === "like" ? props.handleLike() : props.handleDislike();
		setVote({hasVoted: true, value: userVote});
	}

	const starsElement = [...Array(5)].map((star, index) => (       
        <AiFillStar
			key={ index }
			className={ (index + 1) <= props.rating
				? "review-star-filled fs-18px"
				: "review-star-empty fs-18px"
			}
		/>
    ));

	return (
		<article className={`review-container ${!props.isVisible ? "review-hidden" : ""}`}>
			{ starsElement }

			<h3>{ props.title }</h3>

			<p>{ props.comments }</p>

			<div className="review-likes-container">
				<div className="review-likes">
					{ vote.value === "like"
						? <>
							  <HiThumbUp className="review-thumb-icon" />
						  </>
						: <>
							  <HiOutlineThumbUp
							  	className="review-thumb-icon"
								onClick={ () => handleUserVote("like") }
							  />
						  </>
					}

					{ props.likes }
				</div>
				
				<div className="review-likes">
					{ vote.value === "dislike"
						? <>
							  <HiThumbDown className="review-thumb-icon" />
						  </>
						: <>
							  <HiOutlineThumbDown
							  	className="review-thumb-icon"
								onClick={ () => handleUserVote("dislike") }
							  />
						  </>
					}
					
					{ props.dislikes }
				</div>
			</div>
		</article>
	);
}

export default Review;
