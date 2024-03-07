import { useState } from "react";
import Button from "../../components/Button/Button";
import s from "./Registration.module.css";
import { useForm } from "react-hook-form";

function Registration() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const [feedback, setfeedback] = useState({
    name: "",
    company: "",
    tel: "",
    mail: "",
  });

  const functionSubmit = (data) => {
    if (data) {
      setfeedback({
        ...feedback,
        name: data.name,
        company: data.company,
        tel: data.tel,
        mail: data.mail,
      });
    }
  };

  return (
    <div className={s.main}>
      <div className={s.header}>Регистрация</div>
      <form className={s.forma} onSubmit={handleSubmit(functionSubmit)}>
        <div className={s.item}>
          <div className={s.label}> Ваше имя*: </div>
          <div className={s.input_item}>
            <input
              type="text"
              className={s.input}
              {...register("name", {
                required: "Введите имя",
                pattern: {
                  value: /^[A-Za-zА-Яа-я0-9\s]+$/i,
                  message: "Некорректное имя",
                },
              })}
            />
            {errors.name && (
              <span className={s.message}>{errors.name.message}</span>
            )}
          </div>
        </div>
        <div className={s.item}>
          <div className={s.label}>Компания: </div>
          <div className={s.input_item}>
            <input type="text" className={s.input} {...register("company")} />
          </div>
        </div>
        <div className={s.item}>
          <div className={s.label}>Телефон*: </div>
          <div className={s.input_item}>
            <input
              type="text"
              className={s.input}
              {...register("tel", {
                required: "Введите телефон",
                pattern: {
                  value:
                    /^(\+)?((\d{2,3}) ?\d|\d)(([ -]?\d)|( ?(\d{2,3}) ?)){5,12}\d$/,
                  message: "Некорректный номер",
                },
              })}
            />
            {errors.tel && (
              <span className={s.message}>{errors.tel.message}</span>
            )}
          </div>
        </div>
        <div className={s.item}>
          <div className={s.label}>E-mail*: </div>
          <div className={s.input_item}>
            <input
              type="text"
              className={s.input}
              {...register("mail", {
                required: "Введите e-mail",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Некорректный e-mail",
                },
              })}
            />
            {errors.mail && (
              <span className={s.message}>{errors.mail.message}</span>
            )}
          </div>
        </div>

        <div className={s.item}>
          <div className={s.label}>Применить:</div>
          <div className={s.input_item}>
            <Button onClickHandler={functionSubmit} />
          </div>
        </div>
      </form>
      {feedback.name.length > 0 && (
        <div className={s.item}>
          <div className={s.label}>Ваши данные:</div>
          <div className={s.message}>
            <p>{feedback.name} </p>
            <p>{feedback.company}</p>
            <p>{feedback.tel}</p>
            <p>{feedback.mail}</p>
          </div>
        </div>
      )}
    </div>
  );
}
export default Registration;
