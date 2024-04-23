import { useState } from "react";
import Overlay from "./UI/overlay";
import { MenuIcon } from "../icons/iconComponent";
import Menu from "./menu";
import useScrollBlock from "../hooks/useScrollBlock";

const NavMobile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [blockScroll, allowScroll] = useScrollBlock();

  const closeMenu = () => {
    setIsOpen(false);
    allowScroll();
  };

  return (
    <>
      <button
        className="mt-3 mr-0 h-fit"
        onClick={() => setIsOpen(true)}
        style={{ cursor: "pointer" }}
      >
        <MenuIcon />
      </button>
      {isOpen && (
        <Overlay type={"menu"} clickFn={() => setIsOpen(false)}>
          <div className={`menu_mobile`}>
            <p className="text-base ml-3 my-[17px]">Меню</p>
            <div className="w-full h-1 vector" />
            <Menu section={"mobile"} clickFn={closeMenu} />
          </div>
        </Overlay>
      )}
    </>
  );
};

export default NavMobile;
