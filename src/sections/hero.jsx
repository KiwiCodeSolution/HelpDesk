import Button from "../components/UI/buttons";
import { Tools } from "../icons/iconComponent";

const Hero = () => {
  return (
    <section className="w-full min-h-[832px] pl-[100px] pt-[173px] hero-wrapper">
      <div className="w-[725px]">
        <h1 className="text-extra-bold uppercase">
          <span className="text-orange">ремонт</span> та обслуговування{" "}
          <span className="text-orange">комп&apos;ютерів</span> у Харкові
        </h1>
        <h2 className="text-bold-24 mt-2 mb-10">
          З <span className="text-orange">безкоштовними</span> діагностикою та виїздом до дому
        </h2>
        <div className="flex gap-x-4 items-center text-medium-20">
          <Tools />
          <h3 className="w-[443px]">
            Швидко вирішуємо всі проблеми, пов&apos;язані з вашим комп&apos;ютером.
          </h3>
        </div>

        <Button style={"orange"} btnClass={"ml-[60px] mt-[60px] h-[60px]"}>
          Викликати майстра
        </Button>
      </div>
    </section>
  );
};

export default Hero;
