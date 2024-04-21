import { useTranslation } from "react-i18next";
import ContactForm from "../components/contactForm";
import TitleSections from "../components/titleSections";

const Feedback = () => {
  const { t } = useTranslation();

  return (
    <section className="w-full">
      <div className="wrapper pt-10 pb-[118px] bg-navyBlue mx-auto">
        <TitleSections sections={"feedback"}>{t(`feedback_title`)}</TitleSections>

        <ContactForm />
      </div>
    </section>
  );
};

export default Feedback;
