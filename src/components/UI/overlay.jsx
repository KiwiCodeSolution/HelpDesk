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
    clickFn();
    allowScroll();
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
  useEffect(() => {
    if (step && step === 2) {
      setTimeout(() => {
        closeModal();
      }, 2500);
    }
  }, [step]);

  function handleOverlayClick(e) {
    if (e.target === e.currentTarget) {
      clickFn();
    }
    return;
  }

  return createPortal(
    <div
      className={`fixed h-screen w-full z-[999] rounded-lg top-0 left-0 backdrop-blur ${overlayClass}`}
      onClick={handleOverlayClick}
    >
      <section
        className={`bg-black flex flex-col absolute top-1/2 left-2/4 -translate-x-1/2 -translate-y-1/2 z-[999] rounded-[32px]`}
      >
        {type !== "notification" && (
          <button
            className="w-8 h-8 p-2 bg-[#426073] rounded-full flex items-center justify-center absolute top-3 right-10"
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
};

export default Overlay;
