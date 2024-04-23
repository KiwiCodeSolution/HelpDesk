import { useTranslation } from "react-i18next";
import Expert from "/images/avatar.png";

const Experts = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full">
      <div className="wrapper h-[260px] py-6 tablet:py-8 tablet:h-[200px] desktop:h-[220px] desktop:py-5 bg-lightblue">
        <article className="w-[328px] flex flex-col gap-y-5 tablet:w-[608px] tablet:flex-row tablet:gap-y-0 laptop:w-[640px] desktop:w-[1200px] h-full tablet:gap-x-7 laptop:gap-x-[60px] items-center mx-auto">
          {/* блоки для мобілки */}

          <div className="w-full flex items-center gap-x-[9px] tablet:hidden">
            <img
              src={Expert}
              alt="Фото експерта компанії"
              className="w-[80px] tablet:h-[80px] tablet:hidden"
            />
            <p className="text-xl font-bold leading-7 tablet:hidden">{t(`expert_title`)}</p>
          </div>
          <p className="w-full h-5 text-sm font-medium text-black bg-orange px-1 text-center rounded border-[0.5px] border-black border-opacity-10 leading-6 tablet:hidden">
            {t(`expert_subtitle`)}
          </p>
          <p className="text-base tablet:hidden">{t(`expert_text`)}</p>

          {/* блоки відображаються у розмірах від планшету */}
          <img
            src={Expert}
            alt="Фото експерта компанії"
            className="hidden tablet:inline tablet:w-[132px] tablet:h-[132px] desktop:w-[180px] desktop:h-[180px]"
          />
          <div className="hidden w-fit tablet:flex flex-col gap-y-3">
            <p className="text-2xl font-bold leading-8">{t(`expert_title`)}</p>
            <p className="w-fit text-sm font-medium leading-4 text-black bg-orange px-1 py-[2px] rounded border-[0.5px] border-black border-opacity-10">
              {t(`expert_subtitle`)}
            </p>
            <p className="text-base leading-6">{t(`expert_text`)}</p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Experts;
