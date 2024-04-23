import { useTranslation } from "react-i18next";
import ContactForm from "../components/contactForm";
import TitleSections from "../components/titleSections";

const Feedback = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full">
      <div className="wrapper h-[580px] py-8 tablet:pt-14 tablet:pb-[59px]  laptop:pt-10 tablet:h-[620px] laptop:pb-[60px] desktop:h-[678px] desktop:pb-[118px] bg-navyBlue mx-auto">
        <TitleSections sections={"feedback"}>{t(`feedback_title`)}</TitleSections>

        <ContactForm />
      </div>
    </section>
  );
};

export default Feedback;
