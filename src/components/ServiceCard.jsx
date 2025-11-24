const ServiceCard = ({ icon, label, subtext }) => {
  return (
    <div className="rounded-[20px] shadow-deep px-7 py-12">
      <div className="w-12 h-12 flex justify-center items-center bg-red-coral rounded-full">
        <img src={icon} alt={label} width={25} height={25} />
      </div>

      <h3 className="mt-5 font-helvetica text-gray-darkest text-3xl leading-normal font-bold">
        {label}
      </h3>

      <p className="mt-3 text-info wrap-break-word">{subtext}</p>
    </div>
  );
};

export default ServiceCard;
