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
  const popularServices = items.filter(el => el.isPopular);
  // const otherServices = items.filter(el => !el.isNew && !el.isPopular);
  const services = items.filter(el => !el.isNew);

  const sortedServices = items.sort((a, b) => {
    // Спочатку порівнюємо, чи обидва елементи не популярні і не нові
    if (!a.isPopular && !a.isNew && !b.isPopular && !b.isNew) {
      return 0; // якщо обидва елементи не популярні і не нові, то порядок не змінюється
    }
    // Потім порівнюємо, чи обидва елементи нові
    if (a.isNew && b.isNew) {
      return 0; // якщо обидва елементи нові, то порядок не змінюється
    }
    // Потім порівнюємо, чи обидва елементи популярні
    if (a.isPopular && b.isPopular) {
      return 0; // якщо обидва елементи популярні, то порядок не змінюється
    }
    // В інших випадках визначаємо порядок
    if (!a.isPopular && !a.isNew) {
      return -1; // елемент 'a' не популярний і не новий, тому він йде першим
    }
    if (!b.isPopular && !b.isNew) {
      return 1; // елемент 'b' не популярний і не новий, тому він йде першим
    }
    if (a.isNew) {
      return -1; // елемент 'a' новий, тому він йде першим
    }
    if (b.isNew) {
      return 1; // елемент 'b' новий, тому він йде першим
    }
    if (a.isPopular) {
      return -1; // елемент 'a' популярний, тому він йде першим
    }
    if (b.isPopular) {
      return 1; // елемент 'b' популярний, тому він йде першим
    }
  });

  return (
    <section className="w-full" id="services">
      <div className="pl-4 tablet:px-4 laptop:px-8 desktop:px-[100px] mx-auto py-10">
        <TitleSections styles={"mb-9 tablet:mb-8 desktop:mb-10"}>
          {t(`services_title`)}
        </TitleSections>

        {/* нові */}
        <p className="text-sm font-medium tablet:hidden">{t(`services_subtitle.${0}`)}</p>
        <div className="overflow-x-auto mb-8 tablet:hidden">
          <div className="w-max flex gap-x-4 border-t-[2px] border-white pt-2">
            {newServices.map(item => (
              <ServiceItem key={item.id} item={item} clickFn={openingModalForm} />
            ))}
          </div>
        </div>

        {/* популярні */}
        <p className="text-sm font-medium tablet:hidden">{t(`services_subtitle.${1}`)}</p>
        <div className="overflow-x-auto mb-8 tablet:hidden">
          <div className="w-max flex gap-x-4 border-t-[2px] border-white pt-2">
            {popularServices.map(item => (
              <ServiceItem key={item.id} item={item} clickFn={openingModalForm} />
            ))}
          </div>
        </div>

        {/* всі інші */}
        <p className="text-sm font-medium tablet:hidden">{t(`services_subtitle.${2}`)}</p>
        <div className="overflow-x-auto tablet:hidden">
          <div className="w-max flex gap-x-4 border-t-[2px] border-white pt-2">
            {sortedServices.map(item => (
              <ServiceItem key={item.id} item={item} clickFn={openingModalForm} />
            ))}
          </div>
        </div>

        {/* блоки карток розміру від планшету. немає горизонтального скролу */}
        <div className="hidden tablet:grid tablet:grid-cols-3 laptop:grid-cols-4 gap-x-4 gap-y-8 z-0 mb-10">
          {newServices.map(item => (
            <ServiceItem key={item.id} item={item} clickFn={openingModalForm} />
          ))}
        </div>
        <div className="hidden tablet:grid tablet:grid-cols-3 laptop:grid-cols-4 gap-x-4 gap-y-8 z-0">
          {services.map(item => (
            <ServiceItem key={item.id} item={item} clickFn={openingModalForm} />
          ))}
        </div>

        <Button
          style={"blue"}
          btnClass={"mt-10 mx-auto"}
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
