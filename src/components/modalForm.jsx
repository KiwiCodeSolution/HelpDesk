import PropTypes from "prop-types";

import Overlay from "./UI/overlay";
import ContactForm from "./contactForm";
import { useState } from "react";

const ModalForm = ({ clickFn, problem }) => {
  const [countStep, setCountStep] = useState(1);

  return (
    <Overlay clickFn={clickFn} type={"form"} step={countStep}>
      <div
        className={`w-[952px] modal-wrapper rounded-[32px] ${
          countStep === 1 ? "h-[748px]" : "h-[528px]"
        }`}
      >
        <h3 className="my-[14px] text-center text-bold-24">Виклик майстра</h3>

        <div className="w-full h-1 vector" />

        {countStep === 1 && <ContactForm problem={problem} clickFn={() => setCountStep(2)} />}

        {countStep === 2 && (
          <div className="w-full flex flex-col items-center mt-[60px]">
            <p className="w-[274px] text-bold-24 text-center mb-2">Дякуємо!</p>
            <p className="w-[274px] text-bold-24 text-center mb-8">Ваш запит прийнято!</p>

            <p className="text-regular-16 text-center mb-[42px]">
              *середній час відповіді на заявку 30 хвилин
            </p>
          </div>
        )}

        <div className="w-full block mt-[22px] mx-auto">
          <p className="text-regular-16 text-center mb-1">Або</p>
          <p className="text-regular-16 text-center mb-2">
            Зв’яжіться з майстром набравши один з номерів
          </p>
          <div className="w-full flex flex-col items-center">
            <a href="tel:#" className="text-bold-24">
              +38 011 111 11 11 Консультант
            </a>
            <a href="tel:#" className="text-bold-24">
              +38 022 222 22 22 Консультант
            </a>
          </div>
        </div>
      </div>
    </Overlay>
  );
};

ModalForm.propTypes = {
  title: PropTypes.string,
  clickFn: PropTypes.func,
  style: PropTypes.string,
  problem: PropTypes.string,
};

export default ModalForm;
