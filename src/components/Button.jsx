const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
}) => {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-2 py-2 font-rubik text-lg leading-none
            ${
              backgroundColor
                ? `${backgroundColor} ${textColor} ${borderColor}`
                : 'bg-red-coral text-white border-red-coral'
            } rounded-full ${fullWidth && 'w-full'}
            `}
    >
      <span className="font-helvetica font-medium mx-3 text-lg max-sm:text-[16px] max-sm:mx-2">
        {label}
      </span>
      {iconURL && (
        <div className="flex items-center justify-center bg-white rounded-full w-11 h-11 max-sm:w-9 max-sm:h-9">
          <img
            src={iconURL}
            alt="icon"
            className="w-5 h-5 max-sm:w-3 rotate-320"
          />
        </div>
      )}
    </button>
  );
};

export default Button;
