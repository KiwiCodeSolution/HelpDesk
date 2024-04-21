import { useTranslation } from "react-i18next";
import Expert from "/images/avatar.png";

const Experts = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full">
      <div className="wrapper tablet:h-[200px] desktop:h-[220px] py-4 bg-lightblue">
        <article className="tablet:w-[608px] laptop:w-[640px] desktop:w-[1200px] h-full flex tablet:gap-x-7 laptop:gap-x-[60px] items-center mx-auto">
          <img
            src={Expert}
            alt="Фото експерта компанії"
            className="tablet:w-[132px] tablet:h-[132px] desktop:w-[180px] desktop:h-[180px]"
          />
          <div className="w-fit flex flex-col gap-y-3">
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
