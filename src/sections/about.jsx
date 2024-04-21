import { useState } from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import TitleSections from "../components/titleSections";
import { useTranslation } from "react-i18next";

const INDICATORS = [
  { id: 1, value: "5" },
  { id: 2, value: "1800" },
];

const About = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const { ref, inView } = useInView({ threshold: 0 });

  if (inView && !isVisible) {
    setIsVisible(true);
  }
  return (
    <section className="w-full about relative overflow-hidden" id="about">
      <div className="wrapper">
        <TitleSections styles={"mb-8"}>{t(`about_title`)}</TitleSections>
        <div className="w-[483px] flex flex-col gap-y-4">
          <p className="text-regular-16 leading-6">{t(`about.0`)}</p>
          <p className="text-regular-16 leading-6">{t(`about.1`)}</p>
          <p className="text-regular-16 leading-6">{t(`about.2`)}</p>
        </div>

        <ul className="w-[451px] flex gap-x-5 mt-[117px] mb-[47px]" ref={ref}>
          {isVisible &&
            INDICATORS.map(({ value, id }) => (
              <li key={value} className="flex flex-col gap-y-2 text-center ">
                <p className="text-bold-64 text-orange">
                  <CountUp end={value} />+
                </p>

                <p className="text-bold-24">{t(`indicators_category.${id - 1}`)}</p>
              </li>
            ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
