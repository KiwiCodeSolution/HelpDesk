import { useTranslation } from "react-i18next";
import NavDesktop from "../components/navDesktop";
import NavMobile from "../components/navMobile";

import useMatchMedia from "../hooks/useScrollBlock";

const Header = () => {
  const { t } = useTranslation();

  const { isMobile } = useMatchMedia();
  return (
    <div className="w-full bg-header absolute top-0 left-1/2 -translate-x-1/2 z-[100]" id="home">
      <header className="wrapper flex justify-between">
        <p className="text-2xl font-medium mt-[10px]">{t(`title`)}</p>
        {isMobile ? <NavMobile /> : <NavDesktop section={"header"} />}
      </header>
    </div>
  );
};

export default Header;
