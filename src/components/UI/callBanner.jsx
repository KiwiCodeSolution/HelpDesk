/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from "prop-types";
import { createPortal } from "react-dom";
import { Call, Cross } from "../../icons/iconComponent";
import { useTranslation } from "react-i18next";

const modalRoot = document.querySelector("#call-modal-root");

const CallBanner = ({ clickFn }) => {
  const { t } = useTranslation();
  function closeModal() {
    clickFn();
  }

  return createPortal(
    <div className="w-full h-fit z-[500] fixed bottom-0 left-0 call-banner px-8 md:px-20 xl:px-[120px] py-8 flex justify-center">
      <button
        className="w-8 h-8 p-2 bg-[#426073] rounded-full flex items-center justify-center absolute top-4 right-4"
        onClick={closeModal}
      >
        <Cross className={"w-5 h-5 cross"} />
      </button>
      <a
        href="https://t.me/+380633136420"
        className="w-fit h-fit px-5 py-3 border border-white rounded-lg text-white flex gap-x-2 md:gap-x-4 xl:gap-x-10 items-center justify-center hover:bg-orange hover:border-orange"
      >
        <Call className={"animate-[bell_2.5s_ease-in-out_infinite] call-icon"} />
        <p className="text-lg md:text-xl xl:text-3xl font-semibold text-center">
          {t(`call_banner`)}
        </p>
      </a>
    </div>,
    modalRoot
  );
};

CallBanner.propTypes = {
  children: PropTypes.node.isRequired,
  clickFn: PropTypes.func.isRequired,
};

export default CallBanner;
