import { useTranslation } from "react-i18next";
import Expert from "/images/avatar.png";

const Experts = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full">
      <div className="wrapper tablet:h-[200px] desktop:h-[220px] py-6 tablet:py-4 bg-lightblue">
        <article className="w-[328px] tablet:w-[608px] laptop:w-[640px] desktop:w-[1200px] h-full flex tablet:gap-x-7 laptop:gap-x-[60px] items-center mx-auto desktop:ml-0">
          {/* блоки для мобілки */}
          <ul className="flex flex-col gap-y-5 tablet:hidden mx-auto">
            <li className="w-full flex items-center gap-x-[9px]">
              <img src={Expert} alt="Фото експерта компанії" className="w-[80px] tablet:h-[80px]" />
              <p className="text-xl font-bold">{t(`expert_title`)}</p>
            </li>
            <li className="w-full h-5 text-medium-14 text-black bg-orange px-1 rounded-[4px] text-center">
              {t(`expert_subtitle`)}
            </li>
            <li className="text-regular-16">{t(`expert_text`)}</li>
          </ul>

          {/* блоки відображаються у розмірах від планшету */}
          <img
            src={Expert}
            alt="Фото експерта компанії"
            className="hidden tablet:inline tablet:w-[132px] tablet:h-[132px] desktop:w-[180px] desktop:h-[180px]"
          />
          <div className="hidden w-fit tablet:flex flex-col gap-y-3">
            <p className="text-bold-24">{t(`expert_title`)}</p>
            <p className="w-fit text-medium-14 text-black bg-orange px-1 py-[2px] rounded-[4px]">
              {t(`expert_subtitle`)}
            </p>
            <p className="text-regular-16">{t(`expert_text`)}</p>
            <p className="text-regular-16">{t(`expert_text`)}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Experts;
