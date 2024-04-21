import PropTypes from "prop-types";

const buttonsStyle = {
  orange:
    "w-[304px] bg-orange text-xl desktop:text-bold-24 tablet:py-[6px] tablet:px-[45px] desktop:py-3 desktop:px-9 font-bold orange-button",
  send: "w-[160px] h-[48px] bg-orange text-base font-bold py-3 px-9 rounded-lg orange-button",
  blue: "tablet:w-[320px] desktop:w-[460px] tablet:h-[48px] desktop:h-[60px] tablet:py-3 tablet:px-[44px] desktop:py-[18px] desktop:px-[84px] bg-lightblue tablet:text-base tablet:font-medium desktop:text-medium-20 tablet:rounded-full laptop:rounded-lg button-blue",
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
