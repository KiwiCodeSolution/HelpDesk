import { useTranslation } from "react-i18next";
import ContactForm from "../components/contactForm";
import TitleSections from "../components/titleSections";

const Feedback = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full">
      <div className="wrapper tablet:pt-[56px] tablet:pb-[59px] laptop:pt-10 laptop:pb-[60px] desktop:pb-[118px] bg-navyBlue mx-auto">
        <TitleSections sections={"feedback"}>{t(`feedback_title`)}</TitleSections>

        <ContactForm />
      </div>
    </section>
  );
};

export default Feedback;
