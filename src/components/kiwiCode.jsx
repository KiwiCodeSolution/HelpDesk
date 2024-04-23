import Logo from "/images/LogoKiwiCode.png";

const KiwiCode = () => {
  return (
    <div className="w-[345px] mx-auto my-4 tablet:mt-[54px] tablet:mb-4 laptop:my-4 desktop:mt-[42px] desktop:mb-[25px] flex items-center justify-between">
      <p className="text-base text-[#FFF5DA] opacity-60">Designed and Development by </p>
      <a href="https://www.linkedin.com/company/kiwicodesolution" target="_blank">
        <img src={Logo} alt="Логотип компанії-розробника KiwiCode Solutions" />
      </a>
    </div>
  );
};

export default KiwiCode;
