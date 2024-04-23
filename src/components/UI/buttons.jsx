import PropTypes from "prop-types";

const buttonsStyle = {
  orange: "bg-orange py-1.5 font-bold tablet:px-[42px] desktop:py-3 desktop:px-9 orange-button",
  send: "w-[160px] h-10 bg-orange text-base font-medium py-3 px-9 desktop:h-12 rounded-lg orange-button",
  blue: "w-[260px] h-10 tablet:w-[320px] desktop:w-[460px] tablet:h-12 desktop:h-[60px] tablet:py-3 tablet:px-[44px] desktop:py-[18px] desktop:px-[84px] bg-lightblue text-base tablet:font-medium desktop:text-xl rounded-lg button-blue",
};

const Button = ({ children, style, btnType, icon, clickFn, btnClass, ...restProps }) => {
  const handleClick = () => (clickFn ? clickFn() : null);
  const additionalStyle = btnClass || "";

  const currentStyle = `text-white ${buttonsStyle[style]} ${additionalStyle}`;

  return (
    <button
      type={btnType || "button"}
      className={currentStyle}
      onClick={handleClick}
      {...restProps}
    >
      {children}
      {icon}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.oneOf(["orange", "blue", "send"]).isRequired,
  btnType: PropTypes.string,
  icon: PropTypes.element,
  clickFn: PropTypes.func,
  btnClass: PropTypes.string,
};

export default Button;
