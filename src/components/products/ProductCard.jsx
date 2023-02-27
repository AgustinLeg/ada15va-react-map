import './Product.css';

export const ProductCard = ({ product }) => {
	const { title, type, price, img, rating, onSale, isAvailable } = product;

	return (
		<div className="card">
			<img src={img} alt={title} />
			{onSale && <span className="onSale">OFERTA</span>}
			<h3>{title}</h3>
			<p>{type}</p>
			<span>${price}</span>
			<div>
				{[...Array(rating)].map((_, index) => (
					<span key={index}>⭐️</span>
				))}
			</div>
			<button disabled={!isAvailable}>Add to Cart</button>
		</div>
	);
};
