import { products } from '../constants';
import { ProductCard } from '../components';

const Products = () => {
  return (
    <section className="w-full max-container">
      <h1 className="text-4xl md:text-7xl font-helvetica font-extrabold leading-8 md:leading-17 mb-10">
        STYLE THAT <br />
        <span className="text-red-coral inline-block mt-3 pl-5 md:pl-11">
          TURNS
        </span>{' '}
        HEADS
      </h1>

      <div className="grid grid-cols-4 max-[1279px]:grid-cols-2 max-sm:grid-cols-1 gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
