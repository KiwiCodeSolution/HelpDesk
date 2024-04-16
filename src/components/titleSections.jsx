import PropTypes from "prop-types";

const TitleSections = ({ children, sections, styles }) => {
  return (
    <h2
      className={`${
        sections === "feedback" ? "text-center" : "text-left"
      } ${styles} w-full text-bold-40`}
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
