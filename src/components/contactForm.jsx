/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import PropTypes from "prop-types";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Checked, NoChecked, Warning } from "../icons/iconComponent";
import { useState } from "react";
import Button from "../components/UI/buttons";
import { useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import Loader from "./loader";
import ModalForm from "./modalForm";

const ContactForm = ({ clickFn, problem }) => {
  const { t } = useTranslation();
  const [isCheck, setIsCheck] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const schema = yup.object({
    name: yup.string().required(t("validation.nameRequired")),
    phone: yup
      .string()
      .required(t("validation.phoneRequired"))
      .matches(/^\+?\d+$/, t("validation.phoneFormat")),
    text: yup.string().required(t("validation.textRequired")),
    agree: yup.boolean().oneOf([true], t("validation.agreeRequired")),
  });

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const text = watch("text");
  const maxTextLength = 250;

  const { VITE_API_TOKEN: TOKEN, VITE_API_CHAT_ID: CHAT_ID } = import.meta.env;

  const API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

  const onSubmit = data => {
    setIsLoading(true);

    const message = problem
      ? `<b>Нове звернення з сайту!</b> %0A<b>Ім'я:</b> ${data.name} %0A<b>Телефон:</b> ${data.phone}%0A<b>Повідомлення:</b> ${data.text} %0A<b>Тема:</b> ${problem}`
      : `<b>Нове звернення з сайту!</b> %0A<b>Ім'я:</b> ${data.name} %0A<b>Телефон:</b> ${data.phone}%0A<b>Повідомлення:</b> ${data.text}`;

    fetch(`${API}?chat_id=${CHAT_ID}&text=${message}&parse_mode=html`)
      .then(res => {
        setIsLoading(false);
        setIsModalOpen(true);
        clickFn && clickFn();
        setIsCheck(false);
        reset();
      })
      .catch(error => {
        setIsLoading(false);
      });
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
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-[328px] tablet:w-[480px] laptop:w-[600px] mx-auto flex flex-col relative"
      >
        <p className="text-center text-base tablet:font-medium my-4 desktop:my-6">
          {t(`feedback_subtitle`)}
        </p>
        <div className="w-full flex flex-col mb-6 mx-auto relative gap-y-1">
          <label className="text-sm font-medium">{t(`name`)}</label>
          <input
            name="name"
            {...register("name")}
            className="h-8 tablet:h-9 rounded-[6px] outline-none py-2 px-1.5 tablet:px-3 text-base placeholder:text-base placeholder:text-grey text-black"
            placeholder={t(`placeholder.name`)}
          />
          {errors.name && <ErrorWrapper text={errors.name.message} />}
        </div>

        <div className="w-full flex flex-col mb-6 mx-auto relative gap-y-1">
          <label className="text-sm font-medium">{t(`phone`)}</label>
          <input
            name="phone"
            {...register("phone")}
            placeholder="+380XXXXXXXXX"
            className="h-8 tablet:h-9 rounded-[6px] outline-none py-2 px-1.5 tablet:px-3 text-base placeholder:text-base placeholder:text-grey text-black"
          />
          {errors.phone && <ErrorWrapper text={errors.phone.message} />}
        </div>

        <div className="w-full flex flex-col mb-8 mx-auto relative gap-y-1">
          <label className="text-sm font-medium mb-1">{t(`text`)}</label>
          <textarea
            name="text"
            {...register("text", { maxLength: maxTextLength })}
            className="h-[90px] rounded-[6px] outline-none py-2 px-1.5 tablet:px-3 text-base placeholder:text-base placeholder:text-grey text-black"
            style={{
              resize: "none",
            }}
            defaultValue={problem ? problem : ""}
            placeholder={t(`placeholder.text`)}
          />
          {errors.text && <ErrorWrapper text={errors.text.message} />}

          {/* рахуємо кількість введених символів */}
          <p className="w-full mt-1 pr-[6px] text-right text-xs tablet:text-base text-grey absolute -bottom-6">
            {text?.length || problem?.length || 0} / {maxTextLength}
          </p>
        </div>

        <label className="w-full flex gap-x-4 text-xs font-medium mb-8 mx-auto relative laptop:text-base laptop:gap-x-4 laptop:font-normal">
          <input
            name="agree"
            type="checkbox"
            {...register("agree", { required: true })}
            className="appearance-none absolute"
            checked={isCheck}
            onClick={() => setIsCheck(!isCheck)}
          />
          {isCheck ? <Checked /> : <NoChecked />}
          {t(`check`)}
          {errors.agree && !isCheck && <ErrorWrapper text={t(`validation.agreeRequired`)} />}
        </label>

        <Button type="submit" style={"send"} btnClass={"mx-auto"}>
          {t(`feedback_button`)}
        </Button>
      </form>
      {isLoading && <Loader />}

      {isModalOpen && <ModalForm currentStep={2} clickFn={() => setIsModalOpen(false)} />}
    </>
  );
};

ContactForm.propTypes = { clickFn: PropTypes.func, problem: PropTypes.string };

export default ContactForm;
