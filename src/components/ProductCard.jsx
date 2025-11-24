const ProductCard = ({ image, name, category, price }) => {
  return (
    <div className="rounded-xl p-5 shadow-sm hover:shadow-md transition">
      <img
        src={image}
        alt={name}
        className="object-contain bg-nike bg-no-repeat flex justify-center items-center w-full h-64 rounded-lg"
      />

      <h2 className="mt-4 text-gray-darkest font-helvetica font-semibold text-2xl line-clamp-1">
        {name}
      </h2>
      <p className="font-rubik text-gray-dark text-sm">{category}</p>

      <div className="mt-3 font-helvetica font-semibold text-xl">{price}</div>
    </div>
  );
};

export default ProductCard;
