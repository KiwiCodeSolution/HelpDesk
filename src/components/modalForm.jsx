import PropTypes from "prop-types";

import Overlay from "./UI/overlay";
import ContactForm from "./contactForm";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const ModalForm = ({ clickFn, problem }) => {
  const { t } = useTranslation();
  const [countStep, setCountStep] = useState(1);

  return (
    <Overlay clickFn={clickFn} type={"form"} step={countStep}>
      <div
        className={`modal-wrapper rounded-[32px] ${
          countStep === 1 ? "tablet:h-[715px] laptop:h-[748px]" : "h-[528px]"
        }`}
      >
        <h3 className="my-[14px] text-center text-bold-24">{t(`modal_title`)}</h3>

        <div className="w-full h-1 vector" />

        {countStep === 1 && <ContactForm problem={problem} clickFn={() => setCountStep(2)} />}

        {countStep === 2 && (
          <div className="w-full flex flex-col items-center mt-[60px]">
            <p className="w-[274px] text-bold-24 text-center mb-2">{t(`modal_text.0`)}</p>
            <p className="w-[274px] text-bold-24 text-center mb-8">{t(`modal_text.1`)}</p>

            <p className="text-regular-16 text-center mb-[42px]">*{t(`modal_text.2`)}</p>
          </div>
        )}

        <div className="w-full block mt-[22px] mx-auto">
          <p className="text-regular-16 text-center mb-1">{t(`modal_text.3`)}</p>
          <p className="text-regular-16 text-center mb-2">{t(`modal_text.4`)}</p>
          <div className="w-full flex flex-col items-center">
            <a href="tel:#" className="text-bold-24">
              +38 011 111 11 11 {t(`modal_text.5`)}
            </a>
            <a href="tel:#" className="text-bold-24">
              +38 022 222 22 22 {t(`modal_text.6`)}
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
