/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

import Overlay from "./UI/overlay";
import ContactForm from "./contactForm";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { firstTell, firstTellShow, secondTell, secondTellShow } from "../sections/contacts";
import { Life, Vodafone } from "../icons/iconComponent";

const ModalForm = ({ clickFn, problem, currentStep }) => {
  const { t } = useTranslation();
  const [countStep, setCountStep] = useState(currentStep || 1);

  const PhoneBlock = ({ className }) => {
    return (
      <div className={`w-[270px] desktop:w-full mx-auto ${className}`}>
        <p className="text-base text-center mb-1">{t(`modal_text.3`)}</p>
        <p className="text-base text-center mb-4 desktop:mb-2">{t(`modal_text.4`)}</p>
        <div className="w-full flex flex-col items-center gap-y-1">
          <a
            href={`tel:${firstTell}`}
            className="text-2xl font-bold flex items-center gap-x-2 text-[#FF000A] hover:underline hover:underline-offset-2"
          >
            <Vodafone />
            {firstTellShow}
            {countStep === 1 && <span className="hidden tablet:block">{t(`modal_text.5`)}</span>}
          </a>
          <a
            href={`tel:${secondTell}`}
            className="text-2xl font-bold flex items-center gap-x-2 text-[#FFC40C] hover:underline hover:underline-offset-2"
          >
            <Life />
            {secondTellShow}
            {countStep === 1 && <span className="hidden tablet:block">{t(`modal_text.6`)}</span>}
          </a>
          {countStep === 2 && <span className="text-2xl font-bold mt-1">{t(`modal_text.5`)}</span>}
        </div>
      </div>
    );
  };

  return (
    <Overlay clickFn={clickFn} type={"form"} step={countStep}>
      <div
        className={`modal-wrapper rounded-[32px] ${
          countStep === 1
            ? "h-[584px] tablet:h-[715px] laptop:h-[748px]"
            : "h-[584px] desktop:h-[528px]"
        }`}
      >
        <h3 className="my-[14px] text-center text-2xl font-bold">{t(`modal_title`)}</h3>

        <div className="w-full h-1 vector" />

        {countStep === 1 && <ContactForm problem={problem} clickFn={() => setCountStep(2)} />}

        {countStep === 2 && (
          <>
            <div className="w-[270px] flex flex-col items-center mt-[60px] mx-auto desktop:w-[335px]">
              <p className="w-full text-2xl font-bold text-center mb-2">{t(`modal_text.0`)}</p>
              <p className="w-full text-2xl font-bold text-center mb-8 desktop:mb-[30px]">
                {t(`modal_text.1`)}
              </p>

              <p className="w-full text-base text-center mb-10 desktop:mb-[42px]">
                *{t(`modal_text.2`)}
              </p>
            </div>

            <PhoneBlock className={"block tablet:hidden"} />
          </>
        )}

        <PhoneBlock
          className={`hidden tablet:block tablet:w-full ${countStep === 1 ? "mt-[22px]" : ""} `}
        />
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
