import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const NAV_ELEMENTS = [
  { id: 1, linkId: "#home" },
  { id: 2, linkId: "#services" },
  { id: 3, linkId: "#about" },
  { id: 4, linkId: "#contacts" },
];

const NavDesktop = ({ section, styles }) => {
  const { t } = useTranslation();

  return (
    <ul
      className={`flex flex-col justify-between ${
        section === "header"
          ? "w-[480px] xl:flex-row items-center gap-x-10 h-[111px]"
          : "h-[164px] gap-y-1 ml-10 "
      } ${styles}`}
    >
      {NAV_ELEMENTS.map(el => (
        <li key={el.id} className="mx-auto md:ml-0">
          <a
            href={el.linkId}
            className="cursor-pointer text-medium-20 hover:text-orange hover:underline hover:underline-offset-2"
          >
            {t(`nav.${el.id - 1}`)}
          </a>
        </li>
      ))}
    </ul>
  );
};

NavDesktop.propTypes = {
  section: PropTypes.oneOf(["header", "footer"]),
  styles: PropTypes.string,
};

export default NavDesktop;
