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
    <section className="w-full tablet:min-h-[728px] desktop:min-h-[832px] pl-4 pr-[14px] pt-[107px] tablet:pl-[52px] tablet:pt-[130px] laptop:pt-[170px] desktop:pl-[100px] desktop:pt-[173px] hero-wrapper overflow-hidden">
      <div className="w-[332px] tablet:w-[593px] desktop:w-[725px]">
        <h1 className="w-full text-xl tablet:text-[32px] tablet:font-extrabold laptop:text-4xl desktop:text-extra-bold uppercase leading-[27px] tablet:leading-[48px]">
          <span className="text-orange"> {t(`hero.${0}`)}</span> {t(`hero.${1}`)}{" "}
          <span className="text-orange">{t(`hero.${2}`)}</span> {t(`hero.${3}`)}
        </h1>
        <h2 className="text-base font-medium tablet:w-[439px] tablet:text-xl tablet:font-bold desktop:w-full desktop:text-bold-24 mt-2 mb-4 tablet:my-5 desktop:mb-10">
          {t(`hero.${4}`)} <span className="text-orange">{t(`hero.${5}`)}</span> {t(`hero.${6}`)}
        </h2>
        <div className="flex gap-x-4 items-center text-medium-20">
          <Tools />
          <h3 className="w-[262px] tablet:w-[443px] text-base font-medium tablet:text-xl desktop:">
            {t(`hero_subtitle`)}
          </h3>
        </div>

        <Button
          style={"orange"}
          btnClass={
            "mx-auto mt-[279px] tablet:mt-[46px] tablet:ml-0 rounded-[32px] h-12 laptop:ml-[60px] laptop:mt-[46px] laptop:rounded-[6px] desktop:mt-[60px] desktop:h-[60px]"
          }
          clickFn={() => openingModalForm("Проблеми немає у переліку")}
        >
          {t(`hero_button`)}
        </Button>
        {isModalOpen && <ModalForm clickFn={() => setIsModalOpen(false)} problem={problem} />}
      </div>
    </section>
  );
};

export default Hero;
