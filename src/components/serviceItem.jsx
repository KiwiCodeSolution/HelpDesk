import PropTypes from "prop-types";
import Button from "./UI/buttons";
import { useTranslation } from "react-i18next";

const ServiceItem = ({ item, clickFn }) => {
  const { t } = useTranslation();

  return (
    <article className="w-full tablet:h-[312px] laptop:h-[304px] desktop:h-[344px] rounded-lg overflow-hidden relative service-item">
      <div className="w-full h-full flex flex-col font-roboto relative service-front">
        {item.isPopular && (
          <p className="w-[78px] h-6 py-1 px-2 bg-orange text-xs font-medium rounded-tl-[6px] rounded-br-[6px] absolute top-0 left-0 z-[10]">
            {t(`services_popular`)}
          </p>
        )}

        <img
          src={item.image}
          alt={`${
            localStorage.getItem("language") === "ua"
              ? "зображення, що описує послугу"
              : "изображение, которое описывает услугу"
          } ${t(`services.${item.id - 1}.title`)}`}
          className="w-full tablet:h-[178px] desktop:h-[240px] object-cover"
        />

        <div className="w-full tablet:h-24 laptop:h-[86px] desktop:h-[103px] bg-blue tablet:p-[2px] desktop:pl-2 flex relative">
          <div className="tablet:w-full desktop:w-[calc(100%-80px)] h-full">
            <p className="tablet:text-lg tablet:font-bold desktop:text-bold-24">
              {t(`services.${item.id - 1}.title`)}
            </p>
            <p className="tablet:text-sm font-medium desktop:text-base leading-[18.75px]">
              {t(`services.${item.id - 1}.text`)}
            </p>
          </div>

          {/* ціна */}
          <div className="tablet:top-[6px] tablet:right-[2px] tablet:text-orange tablet:text-[13px] desktop:w-[80px] desktop:h-full desktop:bg-orange desktop:text-white flex desktop:flex-col tablet:gap-x-[1px] items-center justify-center absolute top-0 right-0 desktop:price">
            <p>{localStorage.getItem("language") === "ua" ? "від " : "от"}</p>
            <p>{item.price} грн</p>
          </div>
        </div>
        <Button
          style={"orange"}
          btnClass={"w-full rounded-b-lg desktop:hidden"}
          clickFn={() => clickFn(item.title)}
        >
          {t(`serviceItem_button`)}
        </Button>
      </div>

      <div className="hidden w-full h-[346px] desktop:flex flex-col font-roboto absolute top-0 service-back z-[5]">
        <div className="w-full h-[243px] bg-blue bg-opacity-90 flex flex-col justify-center px-4">
          <p className="w-[70%] text-bold-24">{t(`services.${item.id - 1}.title`)}</p>
          <p className="w-[70%] text-base font-medium">{t(`services.${item.id - 1}.text`)}</p>
        </div>

        <Button style={"orange"} btnClass={"w-full h-[103px]"} clickFn={() => clickFn(item.title)}>
          {t(`serviceItem_button`)}
        </Button>
      </div>
    </article>
  );
};

ServiceItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    isPopular: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
  clickFn: PropTypes.func,
};

export default ServiceItem;
