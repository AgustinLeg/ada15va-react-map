import { products } from '../../data/products';
import { ProductCard } from './ProductCard';

export const ProductList = () => {
	return (
		<div>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};
