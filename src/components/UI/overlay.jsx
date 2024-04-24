/* eslint-disable react-hooks/exhaustive-deps */
import PropTypes from "prop-types";
import { useEffect } from "react";
import { createPortal } from "react-dom";
import useScrollBlock from "../../hooks/useScrollBlock";
import { Cross } from "../../icons/iconComponent";

const modalRoot = document.querySelector("#modal-root");

const Overlay = ({ children, clickFn, overlayClass, type, step }) => {
  const [blockScroll, allowScroll] = useScrollBlock();

  function closeModal() {
    allowScroll();
    clickFn();
  }

  useEffect(() => {
    blockScroll();
    function keyDown(e) {
      if (e.code !== "Escape") {
        return;
      }
      closeModal();
    }
    window.addEventListener("keydown", keyDown);
    return () => {
      window.removeEventListener("keydown", keyDown);
    };
  }, [blockScroll, clickFn, closeModal]);

  //закриваємо модальне вікно із повідомленням після відправки форми
  // useEffect(() => {
  //   if (step && step === 2) {
  //     setTimeout(() => {
  //       closeModal();
  //     }, 2500);
  //   }
  // }, [step]);

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      closeModal();
    }
    return;
  }

  return createPortal(
    <div
      className={`${
        type === "menu" ? "" : "backdrop-blur"
      } fixed h-screen w-full z-[999] rounded-lg bg-[rgba(0,0,0,0.6)] top-0 left-0 ${overlayClass}`}
      onClick={handleOverlayClick}
    >
      <section
        className={`${
          type === "form"
            ? "w-[360px] tablet:w-[640px] laptop:w-[752px] desktop:w-[952px] top-1/2 left-2/4 -translate-x-1/2 -translate-y-1/2 flex-col rounded-[32px]"
            : type === "menu"
            ? "top-px right-px"
            : "top-1/2 left-2/4 -translate-x-1/2 -translate-y-1/2 flex-col rounded-[32px]"
        } flex absolute z-[999]`}
      >
        {type !== "lang" && (
          <button
            className="w-8 h-8 p-2 bg-[#426073] rounded-full flex items-center justify-center absolute top-4 right-4"
            onClick={closeModal}
          >
            <Cross className={"w-5 h-5 cross"} />
          </button>
        )}
        {children}
      </section>
    </div>,
    modalRoot
  );
};

Overlay.propTypes = {
  children: PropTypes.node.isRequired,
  clickFn: PropTypes.func.isRequired,
  overlayClass: PropTypes.string,
  type: PropTypes.string,
  isOpen: PropTypes.bool,
};

export default Overlay;
