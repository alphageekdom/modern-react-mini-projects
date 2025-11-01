import ProductCard from './ProductCard';
import { useProducts } from '../hooks/useProducts';

const ProductList = () => {
  const { products, loading, error } = useProducts();

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {loading && <p>Loading...</p>}
      {error && <div className="error">{error}</div>}
      {products.map((product) => (
        <ProductCard product={product} key={product.id} />
      ))}
    </div>
  );
};

export default ProductList;
