import PropTypes from "prop-types";
import Button from "./UI/buttons";
import { useTranslation } from "react-i18next";
import NoImage from "/images/no_picture.jpg";

const ServiceItem = ({ item, clickFn }) => {
  const { t } = useTranslation();

  const text = t(`services.${item.id - 1}.title`) + ": " + t(`services.${item.id - 1}.text`);

  return (
    <article className="w-[252px] h-[232px] tablet:w-full tablet:h-[312px] laptop:h-[304px] desktop:h-[344px] rounded-lg overflow-hidden relative service-item">
      <div className="w-full h-full flex flex-col font-roboto relative service-front">
        {(item.isPopular || item.isNew) && (
          <p
            className={`w-[78px] h-6 py-1 px-2 ${
              item.isPopular ? "bg-orange" : "bg-heavenly"
            }  text-xs font-medium rounded-tl-[6px] rounded-br-[6px] absolute top-0 left-0 z-[10]`}
          >
            {item.isPopular ? t(`services_popular`) : "Новинка"}
          </p>
        )}

        <img
          src={item.image || NoImage}
          alt={`${
            localStorage.getItem("language") === "ua"
              ? "зображення, що описує послугу"
              : "изображение, которое описывает услугу"
          } ${t(`services.${item.id - 1}.title`)}`}
          className="w-full h-[118px] tablet:h-[178px] desktop:h-[240px] object-cover"
        />

        {/* блок із описом під фото */}
        <div className="w-full h-[82px] tablet:h-[86px] desktop:h-[103px] bg-blue pt-1 pl-2 desktop:pl-2 flex relative overflow-hidden">
          <div className="w-full desktop:w-[calc(100%-80px)] h-full">
            <p className="text-base tablet:text-lg font-bold desktop:text-2xl tablet:leading-[21px] desktop:leading-7 desktop:mb-1">
              {t(`services.${item.id - 1}.title`)}
            </p>
            <p className="text-sm tablet:font-medium leading-4">
              {t(`services.${item.id - 1}.text`)}
            </p>
          </div>

          {/* ціна */}
          <div className="top-[4px] right-[2px] text-orange tablet:text-[13px] desktop:text-base desktop:w-[80px] desktop:min-h-full desktop:bg-orange desktop:text-white flex desktop:flex-col gap-x-[2px] desktop:gap-x-0 items-center justify-center absolute desktop:top-0 desktop:right-0 price">
            <p>{localStorage.getItem("language") === "ua" ? "від" : "от"}</p>
            <p> {item.price} грн</p>
          </div>
        </div>

        <Button
          style={"orange"}
          btnClass={"w-full rounded-b-lg h-8 tablet:h-10 text-sm tablet:text-lg desktop:hidden"}
          clickFn={() => clickFn(text)}
        >
          {t(`serviceItem_button`)}
        </Button>
      </div>

      {/* блок, що з'являється на десктопній версії при ховері на картку */}
      <div className="hidden w-full h-[346px] desktop:flex flex-col font-roboto absolute top-0 service-back z-[5]">
        <div className="w-full h-[243px] bg-blue bg-opacity-90 flex flex-col justify-center px-4">
          <p className="w-[70%] text-2xl font-bold">{t(`services.${item.id - 1}.title`)}</p>
          <p className="w-[70%] text-base font-medium">{t(`services.${item.id - 1}.text`)}</p>
        </div>

        <Button
          style={"orange"}
          btnClass={"w-full h-[103px] desktop:text-2xl"}
          clickFn={() => clickFn(text)}
        >
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
    isNew: PropTypes.bool.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
  }),
  clickFn: PropTypes.func,
};

export default ServiceItem;
