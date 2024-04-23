import PropTypes from "prop-types";

const TitleSections = ({ children, sections, styles }) => {
  return (
    <h2
      className={`${
        sections === "feedback" ? "text-center" : "text-left"
      } ${styles} w-full text-[23px] font-bold tablet:text-[32px] laptop:text-4x desktop:text-[40px]`}
    >
      {children}
    </h2>
  );
};

TitleSections.propTypes = {
  children: PropTypes.node.isRequired,
  sections: PropTypes.string,
  styles: PropTypes.string,
};

export default TitleSections;
