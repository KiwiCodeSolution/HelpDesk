import { useForm } from "react-hook-form";
import TitleSections from "../components/titleSections";
import { Checked, NoChecked, Warning } from "../icons/iconComponent";
import { useState } from "react";
import Button from "../components/UI/buttons";

const Feedback = () => {
  const [isCheck, setIsCheck] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    console.log(data);
    setIsCheck(false);
    reset();
  };

  return (
    <section className="w-full">
      <div className="wrapper pt-10 pb-[118px] bg-navyBlue mx-auto">
        <TitleSections sections={"feedback"}>Запросити ремонт</TitleSections>
        <p className="text-center text-regular-16 my-6">
          Заповніть дані нижче, щоб подати запит на ремонт.
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[600px] mx-auto flex flex-col relative"
        >
          <div className="flex flex-col mb-2">
            <label className="text-medium-14">Прізвище та Ім&apos;я </label>
            <input
              {...register("name", { required: true })}
              className="h-9 rounded-[6px] outline-none py-2 px-3 placeholder:text-xs placeholder:text-grey text-black"
              placeholder="Ваше ім'я"
            />
            {errors.name && (
              <div className="flex gap-x-4 items-center absolute bottom-[106px] left-[10px]">
                <Warning />
                <p className="text-[#FF0000] text-xs">Усі поля мають бути заповненими</p>
              </div>
            )}
          </div>

          <div className="flex flex-col mb-2">
            <label className="text-medium-14">Контактний номер телефону</label>
            <input
              {...register("phone", { required: true })}
              placeholder="+38 0XX XXX XX XX"
              className="h-9 rounded-[6px] outline-none py-2 px-3 placeholder:text-xs placeholder:text-grey text-black"
            />
            {errors.phone && (
              <div className="flex gap-x-4 items-center absolute bottom-[106px] left-[10px]">
                <Warning />
                <p className="text-[#FF0000] text-xs">Усі поля мають бути заповненими</p>
              </div>
            )}
          </div>

          <div className="flex flex-col mb-6">
            <label className="text-medium-14 mb-1">Детально опишіть проблему</label>
            <textarea
              {...register("message", { required: true })}
              className="h-[104px] rounded-[6px] outline-none py-2 px-3 placeholder:text-xs placeholder:text-grey text-black"
              style={{
                resize: "none",
              }}
              placeholder="Ваше повідомлення"
            />
            {errors.message && (
              <div className="flex gap-x-4 items-center absolute bottom-[106px] left-[10px]">
                <Warning />
                <p className="text-[#FF0000] text-xs">Усі поля мають бути заповненими</p>
              </div>
            )}
          </div>

          <label className="pl-[10px] flex gap-x-5 text-regular-16 mb-8">
            <input
              type="checkbox"
              {...register("agree", { required: true })}
              className="appearance-none absolute"
              onClick={() => setIsCheck(!isCheck)}
            />
            {isCheck ? <Checked /> : <NoChecked />}
            Даю згоду на обробку персональних даних
          </label>

          {errors.agree && (
            <div className="flex gap-x-4 items-center absolute bottom-[106px] left-[10px]">
              <Warning />
              <p className="text-[#FF0000] text-xs">Усі поля мають бути заповненими</p>
            </div>
          )}
          <Button type="submit" style={"send"} btnClass={"mx-auto"}>
            Відправити
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Feedback;
