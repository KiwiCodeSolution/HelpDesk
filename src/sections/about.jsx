import { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import TitleSections from "../components/titleSections";

const INDICATORS = [
  { value: "5", category: "Років роботи" },
  { value: "1800", category: "Задоволених клієнтів" },
];

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0 });

  if (inView && !isVisible) {
    setIsVisible(true);
  }
  return (
    <section className="w-full about relative overflow-hidden" id="about">
      <div className="wrapper">
        <TitleSections styles={"mb-8"}>Про нашу компанію</TitleSections>
        <div className="w-[483px] flex flex-col gap-y-4">
          <p className="text-regular-16 leading-6">
            Наша місія – зробити ваше життя простіше, забезпечуючи швидкий та надійний ремонт
            комп&apos;ютерів за доступними цінами. Ми цінуємо ваш час і прагнемо, щоб ви могли
            швидко повернутися до своїх справ, маючи працююче обладнання.
          </p>
          <p className="text-regular-16 leading-6">
            Не важливо, чи зламався ваш комп&apos;ютер, чи потрібна профілактика ноутбука або
            допомога в налаштуванні програмного забезпечення – зверніться до нас, і ми із
            задоволенням вам допоможемо.
          </p>
          <p className="text-regular-16 leading-6">
            Ми гарантуємо професійний підхід до кожного випадку, а також надаємо повну прозорість та
            чесність у всіх наших діях. Наша мета – не просто виправити вашу техніку, а й встановити
            з вами довгострокові стосунки на основі довіри та поваги.
          </p>
        </div>

        <ul className="w-[451px] flex gap-x-5 mt-[117px] mb-[47px]" ref={ref}>
          {isVisible &&
            INDICATORS.map(({ value, category }) => (
              <li key={value} className="flex flex-col gap-y-2 text-center ">
                <p className="text-bold-64 text-orange">
                  <CountUp end={value} />+
                </p>

                <p className="text-bold-24">{category}</p>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
