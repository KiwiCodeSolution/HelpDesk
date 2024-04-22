import { useTranslation } from "react-i18next";
import NavDesktop from "../components/navDesktop";
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
      <header className="wrapper h-[56px] tablet:h-[78px] laptop:h-[90px] desktop:h-[111px] flex justify-between relative">
        <p className="text-xs font-bold mt-[7px] tablet:text-base desktop:text-2xl tablet:font-medium tablet:mt-[10px]">
          {t(`title`)}
        </p>
        {isMobile ? <NavMobile /> : <NavDesktop section={"header"} />}
      </header>
    </div>
  );
};

export default Header;
