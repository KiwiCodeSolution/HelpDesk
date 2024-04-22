import { useTranslation } from "react-i18next";
import TitleSections from "../components/titleSections";

export const firstTell = "+380936526910";
export const firstTellShow = "+38 (093) 652 69 10";
export const secondTell = "+380505171154";
export const secondTellShow = "+38 (050) 517 11 54";

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full h-[466px] contacts" id="contacts">
      <div className="wrapper tablet:py-6 laptop:py-[67px] desktop:py-[60px]">
        <TitleSections styles={"tablet:mb-2 laptop:mb-4 desktop:mb-8"}>
          {t(`contact_title`)}
        </TitleSections>
        <div className="w-full flex flex-col tablet:gap-y-2 laptop:gap-y-4">
          <a
            className="tablet:text-base tablet:font-medium desktop:text-medium-20 hover:text-orange hover:underline hover:underline-offset-2"
            href="https://maps.app.goo.gl/3J4KJiHSBq931qpf8"
            target="_blank"
          >
            {t(`address`)}
          </a>

          <a
            className="tablet:text-base tablet:font-medium desktop:text-regular-16 hover:text-orange hover:underline hover:underline-offset-2"
            href={`tel:${firstTell}`}
          >
            {firstTellShow}
          </a>

          <a
            className="tablet:text-base tablet:font-medium desktop:text-regular-16 hover:text-orange hover:underline hover:underline-offset-2"
            href={`tel:${secondTell}`}
          >
            {secondTellShow}
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
