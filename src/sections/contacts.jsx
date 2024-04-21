import { useTranslation } from "react-i18next";
import TitleSections from "../components/titleSections";

const Contacts = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full h-[466px] contacts" id="contacts">
      <div className="wrapper py-[60px]">
        <TitleSections styles={"mb-8"}>{t(`contact_title`)}</TitleSections>
        <div className="w-full flex flex-col gap-y-4">
          <a
            className="text-medium-20 hover:text-orange hover:underline hover:underline-offset-2"
            href="https://maps.app.goo.gl/3J4KJiHSBq931qpf8"
            target="_blank"
          >
            {t(`address`)}
          </a>
          <a
            className="text-regular-16 hover:text-orange hover:underline hover:underline-offset-2"
            href="mailto:#"
          >
            bill.sanders@example.com
          </a>
          <a
            className="text-regular-16 hover:text-orange hover:underline hover:underline-offset-2"
            href="tel:#"
          >
            (808) 555-0111
          </a>
          <a
            className="text-regular-16 hover:text-orange hover:underline hover:underline-offset-2"
            href="mailto:#"
          >
            felicia.reid@example.com
          </a>
          <a
            className="text-regular-16 hover:text-orange hover:underline hover:underline-offset-2"
            href="tel:#"
          >
            (270) 555-0117
          </a>
          <a
            className="text-regular-16 hover:text-orange hover:underline hover:underline-offset-2"
            href="mailto:#"
          >
            tim.jennings@example.com
          </a>
          <a
            className="text-regular-16 hover:text-orange hover:underline hover:underline-offset-2"
            href="tel:#"
          >
            (319) 555-0115
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
