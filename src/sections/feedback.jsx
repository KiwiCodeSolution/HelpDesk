import ContactForm from "../components/contactForm";
import TitleSections from "../components/titleSections";

const Feedback = () => {
  return (
    <section className="w-full">
      <div className="wrapper pt-10 pb-[118px] bg-navyBlue mx-auto">
        <TitleSections sections={"feedback"}>Запросити ремонт</TitleSections>

        <ContactForm />
      </div>
    </section>
  );
};

export default Feedback;
