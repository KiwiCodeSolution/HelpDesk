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
    <section className="w-full min-h-[832px] pl-[100px] pt-[173px] hero-wrapper">
      <div className="w-[725px]">
        <h1 className="text-extra-bold uppercase">
          <span className="text-orange"> {t(`hero.${0}`)}</span> {t(`hero.${1}`)}{" "}
          <span className="text-orange">{t(`hero.${2}`)}</span> {t(`hero.${3}`)}
        </h1>
        <h2 className="text-bold-24 mt-2 mb-10">
          {t(`hero.${4}`)} <span className="text-orange">{t(`hero.${5}`)}</span> {t(`hero.${6}`)}
        </h2>
        <div className="flex gap-x-4 items-center text-medium-20">
          <Tools />
          <h3 className="w-[443px]">{t(`hero_subtitle`)}</h3>
        </div>

        <Button
          style={"orange"}
          btnClass={"ml-[60px] mt-[60px] h-[60px]"}
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
