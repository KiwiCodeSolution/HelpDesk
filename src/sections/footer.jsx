import { useState } from "react";
import KiwiCode from "../components/kiwiCode";
import Menu from "../components/menu";

import Overlay from "../components/UI/overlay";
import TermsOfService from "../components/termsOfService";
import PrivacyPolicy from "../components/privacyPolicy";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  const [typeModal, setTypeModal] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  function openInfo(type) {
    setTypeModal(type);
    setIsModalOpen(true);
  }

  const items = Array.from({ length: 22 }, (_, index) => index + 1);

  return (
    <footer className="w-full h-[424px] tablet:h-[448px] laptop:h-[472px] desktop:h-[360px] overflow-hidden">
      <div className="wrapper pt-[21px] laptop:pt-[122px] desktop:pt-[55px] flex flex-col">
        <div className="flex flex-col gap-y-4 tablet:flex-row tablet:gap-y-0 tablet:gap-x-12 laptop:gap-x-7 desktop:gap-x-[118px]">
          <Menu />
          <div className="w-full flex flex-wrap tablet:grid tablet:grid-cols-2 gap-x-3 laptop:grid-cols-3 desktop:grid-cols-4 laptop:gap-y-1 items-center">
            {items.map(el => (
              <p
                key={el}
                className="text-xs font-medium w-[166px] tablet:w-fit tablet:text-base tablet:font-light leading-[16px]"
              >
                {t(`what_do_we_do.${el - 1}`)}
              </p>
            ))}
          </div>
        </div>
        <KiwiCode />

        <div className="flex flex-col tablet:flex-row gap-x-1 text-sm mx-auto leading-[18px]">
          <span>By using this website, you agree to the</span>
          <div className="flex gap-x-1 mx-auto">
            <button onClick={() => openInfo("terms")} className="underline underline-offset-1">
              Terms of Service{" "}
            </button>{" "}
            and
            <button onClick={() => openInfo("policy")} className="underline underline-offset-1">
              Privacy Policy{" "}
            </button>
          </div>
        </div>

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
