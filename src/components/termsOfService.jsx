import { useTranslation } from "react-i18next";

const TermsOfService = () => {
  const { t } = useTranslation();

  return (
    <div className="modal-wrapper rounded-[32px] py-2 px-10 min-w-[340px] tablet:w-fit h-[80%] desktop:h-fit">
      <h3 className="my-[14px] text-center text-2xl font-bold">{t(`terms_title`)}</h3>

      <div className="w-full h-1 vector mb-3" />
      <ul className="h-[500px] desktop:h-fit overflow-y-auto">
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
    </div>
  );
};

export default TermsOfService;
