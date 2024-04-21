import { useTranslation } from "react-i18next";

const PrivacyPolicy = () => {
  const { t } = useTranslation();

  return (
    <ul className="w-[70%} modal-wrapper h-fit py-7 px-10 rounded-[32px]">
      <li className="my-[14px] text-center text-bold-24">{t(`policy_title`)}</li>
      <li className="w-full h-1 vector mb-3" />
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
  );
};

export default PrivacyPolicy;
