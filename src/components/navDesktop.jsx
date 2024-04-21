import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const NAV_ELEMENTS = [
  { id: 1, linkId: "#home" },
  { id: 2, linkId: "#services" },
  { id: 3, linkId: "#about" },
  { id: 4, linkId: "#contacts" },
];

const NavDesktop = ({ section }) => {
  const { t } = useTranslation();

  return (
    <ul
      className={`flex ${
        section === "header"
          ? "w-[274px] laptop:w-[329px] desktop:w-[480px] gap-x-4 laptop:gap-x-6 desktop:gap-x-10 justify-between "
          : "h-[164px] flex-col gap-y-1 desktop:ml-10 "
      }`}
    >
      {NAV_ELEMENTS.map(el => (
        <li key={el.id} className="h-full flex items-center">
          <a
            href={el.linkId}
            className="cursor-pointer text-sm font-medium laptop:text-base desktop:text-medium-20 hover:text-orange hover:underline hover:underline-offset-2"
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
