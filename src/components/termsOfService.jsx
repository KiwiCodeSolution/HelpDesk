import { useTranslation } from "react-i18next";

const TermsOfService = () => {
  const { t } = useTranslation();

  return (
    <ul className="w-[70%} modal-wrapper h-fit py-7 px-10 rounded-[32px]">
      <li className="my-[14px] text-center text-bold-24">{t(`terms_title`)}</li>
      <li className="w-full h-1 vector mb-3" />
      <li className="mb-4">{t(`terms_subtitle`)}</li>
      <li className="mb-4">
        <span className="font-bold">{t(`terms.0.title`)} </span>
        {t(`terms.0.text`)}
      </li>
      <li className="mb-4">
        <span className="font-bold">{t(`terms.1.title`)} </span>
        {t(`terms.1.text`)}
      </li>
      <li className="mb-4">
        <span className="font-bold">{t(`terms.2.title`)} </span>
        {t(`terms.2.text`)}
      </li>
      <li className="mb-4">
        <span className="font-bold">{t(`terms.3.title`)} </span>
        {t(`terms.3.text`)}
      </li>
      <li className="mb-4">
        <span className="font-bold">{t(`terms.4.title`)} </span>
        {t(`terms.4.text`)}
      </li>
      <li className="mb-4">
        <span className="font-bold">{t(`terms.5.title`)} </span>
        {t(`terms.5.text`)}
      </li>
    </ul>
  );
};

export default TermsOfService;
