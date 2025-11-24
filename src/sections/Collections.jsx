import { collection } from '../constants';
import { CategoryCard } from '../components';

const Collections = () => {
  return (
    <section className="w-full max-container">
      <h1 className="text-5xl max-sm:text-3xl font-helvetica font-extrabold leading-17 max-sm:leading-10 mb-10">
        &mdash; Explore Our{' '}
        <span className="text-red-coral inline-block mt-3">Sports</span>{' '}
        Collections
      </h1>

      <div className="w-full grid grid-cols-3 max-[900px]:grid-cols-1 gap-6 max-[900px]:gap-8">
        {collection.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </section>
  );
};

export default Collections;
