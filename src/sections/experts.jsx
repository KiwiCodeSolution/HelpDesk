import { useTranslation } from "react-i18next";
import Expert from "/images/avatar.png";

const Experts = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full">
      <div className="wrapper h-[220px] py-4 bg-lightblue">
        <article className="h-full flex gap-x-[60px] items-center">
          <img src={Expert} alt="Фото експерта компанії" />
          <div className="w-[960px] flex flex-col gap-y-3">
            <p className="text-bold-24">{t(`expert_title`)}</p>
            <p className="w-fit text-medium-14 text-black bg-orange px-1 py-[2px] rounded-[4px]">
              {t(`expert_subtitle`)}
            </p>
            <p className="text-regular-16">{t(`expert_text`)}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Experts;
