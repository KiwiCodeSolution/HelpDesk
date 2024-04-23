import { useTranslation } from "react-i18next";
import Menu from "../components/menu";
import NavMobile from "../components/navMobile";

import useMatchMedia from "../hooks/useMediaQuery";

const Header = () => {
  const { t } = useTranslation();

  const { isMobile } = useMatchMedia();

  return (
    <div
      className="w-full header-wrapper absolute top-0 left-1/2 -translate-x-1/2 z-[100]"
      id="home"
    >
      <header
        className="wrapper h-14 
      tablet:h-[78px] 
      laptop:h-[90px] 
      desktop:h-[111px] 
      flex justify-between relative"
      >
        <p
          className="text-xs font-bold mt-[7px] 
        tablet:text-base tablet:font-medium tablet:mt-1 
        laptop:mt-2 
        desktop:text-2xl desktop:mt-2.5"
        >
          {t(`title`)}
        </p>
        {isMobile ? <NavMobile /> : <Menu section={"header"} />}
      </header>
    </div>
  );
};

export default Header;
