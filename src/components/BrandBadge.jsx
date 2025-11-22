const BrandBadge = ({ icon_1, icon_2 }) => {
  return (
    <div className="flex items-center bg-gray-darkest text-white rounded-full px-4 py-2 w-fit max-lg:hidden">
      <div className="flex items-center -space-x-3">
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow">
          <img
            src={icon_1}
            alt="brand logo"
            className="w-5 h-5 object-contain"
          />
        </div>

        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow">
          <img
            src={icon_2}
            alt="brand logo"
            className="w-5 h-5 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default BrandBadge;
