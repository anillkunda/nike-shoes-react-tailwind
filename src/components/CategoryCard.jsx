import Button from './Button';

const CategoryCard = ({ image, title, description }) => {
  return (
    <div className="relative rounded-3xl overflow-hidden h-135 max-sm:h-90 flex items-end">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="relative p-8 max-sm:p-4 text-white max-w-[80%]">
        <h2 className="text-2xl md:text-4xl font-helvetica font-extrabold mb-3 line-clamp-2">
          {title}
        </h2>
        <p className="text-md leading-5 mb-6 font-rubik line-clamp-2">
          {description}
        </p>

        <Button
          label="Shop Now"
          backgroundColor="bg-white"
          textColor="text-black"
        />
      </div>
    </div>
  );
};

export default CategoryCard;
