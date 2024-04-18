/* eslint-disable react/no-unknown-property */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import About from "./sections/about";
import Contacts from "./sections/contacts";
import Experts from "./sections/experts";
import Feedback from "./sections/feedback";
import Footer from "./sections/footer";
import Header from "./sections/header";
import Hero from "./sections/hero";
import Services from "./sections/services";
import { useTranslation } from "react-i18next";
import Overlay from "./components/UI/overlay";

export const App = () => {
  const isCurrentLanguage = localStorage.getItem("language");

  console.log(isCurrentLanguage);
  const [isModalOpen, setIsModalOpen] = useState(isCurrentLanguage === null);
  const { i18n } = useTranslation();

  function changeLanguage(language) {
    i18n.changeLanguage(language);
    localStorage.setItem("language", language);
    setIsModalOpen(false);
  }

  const ModalLanguage = ({ clickFn, changeLanguage }) => {
    return (
      <Overlay type={"lang"} clickFn={clickFn}>
        <div className="w-[460px] py-4 px-[65px] modal-wrapper rounded-[32px]">
          <h3 className="my-[14px] text-center text-medium-28">Мова сайту</h3>

          <div className="w-full h-1 vector" />
          <div className="w-full flex gap-x-10 justify-center items-center mt-[52px] mb-[72px]">
            <button
              onClick={() => changeLanguage("ua")}
              className="cursor-pointer hover:text-orange hover:underline hover:underline-offset-2 text-medium-28"
            >
              україньска
            </button>
            <button
              onClick={() => changeLanguage("ru")}
              className="cursor-pointer hover:text-orange hover:underline hover:underline-offset-2 text-medium-28"
            >
              російська
            </button>
          </div>
        </div>
      </Overlay>
    );
  };

  return (
    <div className="mx-auto relative overflow-hidden">
      <Header />
      <Hero />
      <Services />
      <About />
      <Experts />
      <Feedback />
      <Contacts />
      <Footer />
      {isModalOpen && (
        <ModalLanguage changeLanguage={changeLanguage} clickFn={() => setIsModalOpen(false)} />
      )}
    </div>
  );
};

export default App;
