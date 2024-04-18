import { useState } from "react";
import KiwiCode from "../components/kiwiCode";
import NavDesktop from "../components/navDesktop";
import items from "../data/servicesFooter.json";
import Overlay from "../components/UI/overlay";
import TermsOfService from "../components/termsOfService";
import PrivacyPolicy from "../components/privacyPolicy";

const Footer = () => {
  const [typeModal, setTypeModal] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openInfo(type) {
    setTypeModal(type);
    setIsModalOpen(true);
  }

  return (
    <footer className="w-full min-h-[337px] overflow-hidden">
      <div className="wrapper pt-[55px] flex flex-col">
        <div className="flex items-center">
          <NavDesktop />
          <div className="w-full grid grid-cols-4 ml-[102px] items-center">
            {items.map(el => (
              <p key={el.id} className="text-base font-light leading-[26px]">
                {el.text}
              </p>
            ))}
          </div>
        </div>
        <KiwiCode />

        <p className="flex gap-x-1 text-sm font-medium mx-auto">
          <span>By using this website, you agree to the</span>
          <button onClick={() => openInfo("terms")} className="underline underline-offset-1">
            Terms of Service{" "}
          </button>{" "}
          and
          <button onClick={() => openInfo("policy")} className="underline underline-offset-1">
            Privacy Policy{" "}
          </button>
        </p>

        {isModalOpen && typeModal === "terms" && (
          <Overlay clickFn={() => setIsModalOpen(false)}>
            <TermsOfService />
          </Overlay>
        )}
        {isModalOpen && typeModal === "policy" && (
          <Overlay clickFn={() => setIsModalOpen(false)}>
            <PrivacyPolicy />
          </Overlay>
        )}
      </div>
    </footer>
  );
};

export default Footer;
