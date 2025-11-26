import { collection } from '../constants';
import { CategoryCard } from '../components';

const Collections = () => {
  return (
    <section className="w-full max-container">
      <h1 className="text-3xl md:text-5xl font-helvetica font-extrabold leading-10 md:leading-17 mb-10">
        &mdash; Explore Our{' '}
        <span className="text-red-coral inline-block mt-0 md:mt-3">Sports</span>{' '}
        Collections
      </h1>

      <div className="w-full grid grid-cols-3 max-[900px]:grid-cols-1 gap-6">
        {collection.map((category) => (
          <CategoryCard key={category.id} {...category} />
        ))}
      </div>
    </section>
  );
};

export default Collections;
