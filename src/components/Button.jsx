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
      <span className="font-helvetica font-medium mx-2 md:mx-3 text-[16px] md:text-lg">
        {label}
      </span>
      {iconURL && (
        <div className="flex items-center justify-center bg-white rounded-full w-9 h-9 md:w-11 md:h-11">
          <img
            src={iconURL}
            alt="icon"
            className="w-3 h-3 md:w-5 md:h-5 rotate-320"
          />
        </div>
      )}
    </button>
  );
};

export default Button;
