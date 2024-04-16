import PropTypes from "prop-types";

const buttonsStyle = {
  orange: "w-[304px] bg-orange text-bold-24 py-3 px-9 hover:shadow-orangeBtnHover button-orange",
  send: "w-[160px] h-[48px] bg-orange text-base font-bold py-3 px-9 hover:shadow-orangeBtnHover button-orange",
  blue: "w-[460px] h-[60px] py-[18px] px-[84px] bg-lightblue text-medium-20 button-blue",
};

const Button = ({ children, style, btnType, icon, clickFn, btnClass, ...restProps }) => {
  const handleClick = () => (clickFn ? clickFn() : null);
  const additionalStyle = btnClass || "";

  const currentStyle = `rounded-lg text-white ${buttonsStyle[style]} ${additionalStyle}`;

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
