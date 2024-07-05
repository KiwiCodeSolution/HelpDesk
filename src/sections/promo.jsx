import { useTranslation } from "react-i18next";

const Promo = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full h-fit border-b-[1px] border-white">
      <div className="wrapper py-3 laptop:py-[67px] desktop:py-[60px] flex flex-col gap-y-5">
        <h2 className="text-3xl uppercase font-extrabold text-center text-white leading-[1.4]">
          {t(`promo.0`)}{" "}
          <span className="inline-block animate-color-pulse font-black text-4xl">-15%</span>{" "}
          {t(`promo.1`)}
        </h2>
        <p className="text-3xl uppercase font-extrabold text-center text-white leading-[1.4]">
          {t(`promo.2`)}
        </p>
      </div>
    </section>
  );
};

export default Promo;
