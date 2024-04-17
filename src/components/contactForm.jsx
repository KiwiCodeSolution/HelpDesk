/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Checked, NoChecked, Warning } from "../icons/iconComponent";
import { useState } from "react";
import Button from "../components/UI/buttons";
import { useForm } from "react-hook-form";

const schema = yup.object({
  name: yup.string().required("Ім'я та прізвище є обов'язковими"),
  phone: yup
    .string()
    .required("Номер телефону є обов'язковим")
    .matches(/^\+?\d+$/, "Номер телефону повинен містити лише цифри та знак '+'"),
  text: yup.string().required("Це поле є обов'язковим"),
  agree: yup.boolean().oneOf([true], "Для відправки форми потрібно погодитися з умовами"),
});

const ContactForm = ({ clickFn, problem }) => {
  const [isCheck, setIsCheck] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { VITE_API_TOKEN: TOKEN, VITE_API_CHAT_ID: CHAT_ID } = import.meta.env;

  const API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const onSubmit = data => {
    const message = problem
      ? `<b>Нове звернення з сайту!</b> %0A<b>Ім'я:</b> ${data.name} %0A<b>Телефон:</b> ${data.phone}%0A<b>Повідомлення:</b> ${data.text} 
      %0A<b>Тема:</b> ${problem}`
      : `<b>Нове звернення з сайту!</b> %0A<b>Ім'я:</b> ${data.name} %0A<b>Телефон:</b> ${data.phone}%0A<b>Повідомлення:</b> ${data.text}`;

    fetch(`${API}?chat_id=${CHAT_ID}&text=${message}&parse_mode=html`)
      .then(res => {
        clickFn && clickFn();
      })
      .catch(error => {
        console.log(error);
      });

    console.log(data);
    console.log(message);

    setIsCheck(false);
    reset();
  };

  const ErrorWrapper = ({ text }) => {
    return (
      <div className="flex gap-x-4 items-center absolute -bottom-6 left-[10px]">
        <Warning />
        <p className="text-[#FF0000] text-xs">{text}</p>
      </div>
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-[600px] mx-auto flex flex-col relative">
      <p className="text-center text-regular-16 my-6">
        Заповніть дані нижче, щоб подати запит на ремонт.
      </p>
      <div className="flex flex-col mb-6 relative">
        <label className="text-medium-14">Прізвище та Ім&apos;я </label>
        <input
          name="name"
          {...register("name")}
          className="h-9 rounded-[6px] outline-none py-2 px-3 placeholder:text-xs placeholder:text-grey text-black"
          placeholder="Ваше ім'я"
        />
        {errors.name && <ErrorWrapper text={errors.name.message} />}
      </div>

      <div className="flex flex-col mb-6 relative">
        <label className="text-medium-14">Контактний номер телефону</label>
        <input
          name="phone"
          {...register("phone")}
          placeholder="+380XXXXXXXXX"
          className="h-9 rounded-[6px] outline-none py-2 px-3 placeholder:text-xs placeholder:text-grey text-black"
        />
        {errors.phone && <ErrorWrapper text={errors.phone.message} />}
      </div>

      <div className="flex flex-col mb-8 relative">
        <label className="text-medium-14 mb-1">Детально опишіть проблему</label>
        <textarea
          name="text"
          {...register("text", { maxLength: 250 })}
          className="h-[104px] rounded-[6px] outline-none py-2 px-3 placeholder:text-xs placeholder:text-grey text-black"
          style={{
            resize: "none",
          }}
          placeholder="Ваше повідомлення"
        />
        {errors.text && <ErrorWrapper text={errors.text.message} />}
      </div>

      <label className="pl-[10px] flex gap-x-5 text-regular-16 mb-8 relative">
        <input
          name="agree"
          type="checkbox"
          {...register("agree", { required: true })}
          className="appearance-none absolute"
          checked={isCheck}
          onClick={() => setIsCheck(!isCheck)}
        />
        {isCheck ? <Checked /> : <NoChecked />}
        Даю згоду на обробку персональних даних
        {errors.agree && !isCheck && (
          <ErrorWrapper text={"Для відправки форми потрібно погодитися з умовами"} />
        )}
      </label>

      <Button type="submit" style={"send"} btnClass={"mx-auto"}>
        Відправити
      </Button>
    </form>
  );
};

ContactForm.propTypes = { clickFn: PropTypes.func, problem: PropTypes.string };

export default ContactForm;
