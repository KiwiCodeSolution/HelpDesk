import { useState } from "react";
import Button from "../components/UI/buttons";
import { Tools } from "../icons/iconComponent";
import ModalForm from "../components/modalForm";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [problem, setIsProblem] = useState("");

  function openingModalForm(theme) {
    setIsModalOpen(true);
    setIsProblem(theme);
  }
  return (
    <section
      className="w-full h-[660px] pl-4 pr-[14px] pt-[107px] hero-wrapper overflow-hidden
    tablet:h-[728px] tablet:pl-[52px] tablet:pt-[130px] 
    laptop:pl-[60px] laptop:pt-[170px] 
    desktop:h-[832px] desktop:pl-[100px] desktop:pt-[183px] z-0"
    >
      <div
        className="w-[345px] 
      tablet:w-[593px] 
      laptop:w-[725px]"
      >
        <h1
          className="w-full text-[23px] font-extrabold uppercase leading-[31px] 
        tablet:text-[32px] tablet:leading-[48px] 
        laptop:text-4xl 
        desktop:text-[40px]"
        >
          <span className="text-orange"> {t(`hero.${0}`)},</span> {t(`hero.${1}`)}{" "}
          <span className="text-orange">{t(`hero.${2}`)}</span> {t(`hero.${3}`)} <br />{" "}
          <span className="text-orange">{t(`hero.${4}`)}</span> {t(`hero.${5}`)}{" "}
        </h1>
        <h2
          className="text-base font-bold my-4 leading-[22px] 
        tablet:w-[439px] tablet:text-xl tablet:my-5 tablet:leading-6
        laptop:w-full 
        desktop:text-2xl desktop:mt-2 desktop:mb-10"
        >
          {t(`hero.${6}`)} <span className="text-orange">{t(`hero.${7}`)}</span> {t(`hero.${8}`)}
        </h2>
        <div className="flex gap-x-1.5 tablet:gap-x-3 items-center">
          <Tools />
          <h3
            className="w-[262px] text-base font-semibold leading-[22px]
          tablet:w-[443px] tablet:text-xl tablet:font-medium tablet:leading-6
          desktop:w-[446px]"
          >
            {t(`hero_subtitle`)}
          </h3>
        </div>

        {isModalOpen && <ModalForm clickFn={() => setIsModalOpen(false)} problem={problem} />}
      </div>
      <Button
        style={"orange"}
        btnClass={
          "w-[280px] mx-auto mt-[197px] rounded-lg h-12 text-xl tablet:mt-[46px] tablet:ml-0 laptop:ml-[120px] laptop:mt-[46px] desktop:mt-[60px] desktop:w-[304px] desktop:h-[60px] desktop:text-2xl"
        }
        clickFn={() => openingModalForm("Проблеми немає у переліку")}
      >
        {t(`hero_button`)}
      </Button>
    </section>
  );
};

export default Hero;
