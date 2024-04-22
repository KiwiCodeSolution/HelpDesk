import { useState } from "react";
import Button from "../components/UI/buttons";
import ServiceItem from "../components/serviceItem";
import TitleSections from "../components/titleSections";
import items from "../data/services.json";
import ModalForm from "../components/modalForm";
import { useTranslation } from "react-i18next";

const Services = () => {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [problem, setIsProblem] = useState("");

  function openingModalForm(theme) {
    setIsModalOpen(true);
    setIsProblem(theme);
  }

  const newServices = items.filter(el => el.isNew);
  const services = items.filter(el => !el.isNew);

  return (
    <section className="w-full" id="services">
      <div className="wrapper py-10">
        <TitleSections styles={"tablet:mb-8 desktop:mb-10"}>{t(`services_title`)}</TitleSections>
        <div className="grid tablet:grid-cols-3 laptop:grid-cols-4 gap-x-4 gap-y-8 z-0 mb-10">
          {newServices.map(item => (
            <ServiceItem key={item.id} item={item} clickFn={openingModalForm} />
          ))}
        </div>

        <div className="grid tablet:grid-cols-3 laptop:grid-cols-4 gap-x-4 gap-y-8 z-0 mb-10">
          {services.map(item => (
            <ServiceItem key={item.id} item={item} clickFn={openingModalForm} />
          ))}
        </div>
        <Button
          style={"blue"}
          btnClass={"mx-auto"}
          clickFn={() => openingModalForm("Проблеми немає у переліку")}
        >
          {t(`service_button`)}
        </Button>
      </div>
      {isModalOpen && <ModalForm clickFn={() => setIsModalOpen(false)} problem={problem} />}
    </section>
  );
};

export default Services;
