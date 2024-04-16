import NavDesktop from "../components/navDesktop";
import NavMobile from "../components/navMobile";

import useMatchMedia from "../hooks/useScrollBlock";

const Header = () => {
  const { isMobile } = useMatchMedia();
  return (
    <div className="w-full bg-header absolute top-0 left-0 z-[1000]" id="home">
      <header className="w-full pl-[98px] pr-[100px] flex justify-between">
        <p className="text-2xl font-medium mt-[10px]">Комп&apos;ютерний сервіс</p>
        {isMobile ? <NavMobile /> : <NavDesktop section={"header"} />}
      </header>
    </div>
  );
};

export default Header;
