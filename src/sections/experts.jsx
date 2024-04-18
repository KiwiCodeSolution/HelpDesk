import Expert from "/images/avatar.png";

const Experts = () => {
  return (
    <section className="w-full">
      <div className="wrapper h-[220px] py-4 bg-lightblue">
        <article className="h-full flex gap-x-[60px] items-center">
          <img src={Expert} alt="Фото експерта компанії" />
          <div className="w-[960px] flex flex-col gap-y-3">
            <p className="text-bold-24">Наш технічний експерт Олексій</p>
            <p className="w-fit text-medium-14 text-black bg-orange px-1 py-[2px] rounded-[4px]">
              Сертифікований спеціаліст
            </p>
            <p className="text-regular-16">
              Познайомтеся з кваліфікованою людиною, яка займається вирішенням проблем із вашим
              комп’ютером.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Experts;
