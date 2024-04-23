import PropTypes from "prop-types";
import { useTranslation } from "react-i18next";

const NAV_ELEMENTS = [
  { id: 1, linkId: "#home" },
  { id: 2, linkId: "#services" },
  { id: 3, linkId: "#about" },
  { id: 4, linkId: "#contacts" },
];

const Menu = ({ section, clickFn }) => {
  const { t } = useTranslation();

  return (
    <ul
      className={`flex ${
        section === "header"
          ? "w-[274px] gap-x-4 justify-between laptop:w-[329px] laptop:gap-x-6 desktop:w-[480px] desktop:gap-x-10"
          : section === "mobile"
          ? "w-[73px] h-[156px] flex-col gap-y-1 mx-auto mt-2.5 justify-between"
          : "w-full tablet:w-fit h-9 gap-x-4 justify-around tablet:h-[164px] tablet:flex-col tablet:gap-y-1 tablet:gap-x-0 desktop:ml-10"
      }`}
    >
      {NAV_ELEMENTS.map(el => (
        <li key={el.id} className="h-full flex items-center">
          <a
            href={el.linkId}
            className={`${
              section === "header"
                ? "text-sm"
                : section === "mobile"
                ? ""
                : "text-base tablet:text-xl"
            } cursor-pointer font-medium 
            laptop:text-base 
            desktop:text-xl 
            hover:text-orange hover:underline hover:underline-offset-2`}
            onClick={clickFn}
          >
            {t(`nav.${el.id - 1}`)}
          </a>
        </li>
      ))}
    </ul>
  );
};

Menu.propTypes = {
  section: PropTypes.oneOf(["header", "footer", "mobile"]),
  styles: PropTypes.string,
  clickFn: PropTypes.func,
};

export default Menu;
