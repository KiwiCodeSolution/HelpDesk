import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <div className="modal-wrapper rounded-[32px] py-2 px-10 tablet:h-[715px] laptop:h-[748px] desktop:h-fit">
      <h3 className="my-[14px] text-center text-bold-24">{t(`policy_title`)}</h3>

      <div className="w-full h-1 vector mb-3" />
      <ul className="h-[580px] desktop:h-fit overflow-y-auto">
        <li className="mb-4">{t(`policy_subtitle`)}</li>
        <li className="mb-4">
          <span className="font-bold">{t(`policy.0.title`)} </span>
          {t(`policy.0.text`)}
        </li>
        <li className="mb-4">
          <span className="font-bold">{t(`policy.1.title`)} </span>
          {t(`policy.1.text`)}
        </li>
        <li className="mb-4">
          <span className="font-bold">{t(`policy.2.title`)} </span>
          {t(`policy.2.text`)}
        </li>
        <li className="mb-4">
          <span className="font-bold">{t(`policy.3.title`)} </span>
          {t(`policy.3.text`)}
        </li>
        <li className="mb-4">
          <span className="font-bold">{t(`policy.4.title`)} </span>
          {t(`policy.4.text`)}
        </li>
        <li className="mb-4">
          <span className="font-bold">{t(`policy.5.title`)} </span>
          {t(`policy.5.text`)}
        </li>
      </ul>
    </div>
  );
};

export default PrivacyPolicy;
