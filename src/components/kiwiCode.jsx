import Logo from "/images/LogoKiwiCode.png";

const KiwiCode = () => {
  return (
    <div className="w-[345px] mx-auto mt-[42px] mb-[25px] flex items-center justify-between">
      <p className="text-regular-16 text-[#FFF5DA] opacity-60">Designed and Development by </p>
      <a href="https://www.linkedin.com/company/kiwicodesolution" target="_blank">
        <img src={Logo} alt="Логотип компанії-розробника KiwiCode Solutions" />
      </a>
    </div>
  );
};

export default KiwiCode;
