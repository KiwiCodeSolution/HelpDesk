import PropTypes from "prop-types";

const NAV_ELEMENTS = [
  { name: "Головна", linkId: "#home" },
  { name: "Послуги", linkId: "#services" },
  { name: "Про нас", linkId: "#about" },
  { name: "Контакти", linkId: "#contacts" },
];

const navDesktop = ({ section, styles }) => {
  return (
    <ul
      className={`flex flex-col justify-between ${
        section === "header" ? "w-[480px] xl:flex-row items-center gap-x-10 h-[111px]" : ""
      } ${styles}`}
    >
      {NAV_ELEMENTS.map(el => (
        <li key={el.name} className="mx-auto md:ml-0">
          <a
            href={el.linkId}
            className="cursor-pointer text-medium-20 hover:text-orange hover:underline hover:underline-offset-2"
          >
            {el.name}
          </a>
        </li>
      ))}
    </ul>
  );
};

navDesktop.propTypes = {
  section: PropTypes.oneOf(["header", "footer"]),
  styles: PropTypes.string,
};

export default navDesktop;
