"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import ReactInputMask from "react-input-mask";
import { useDispatch } from "react-redux";
import { clearCart } from "@/redux/cart/slice";
const PopupForm = ({ cartItems }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [sendSuccess, setSuccess] = useState(null);
  // const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (userData) => {
    setIsLoading(true);
    const data = {
      name: userData.name,
      phone: userData.phone,
      email: userData.email,
      description: userData.description || "",
      products: cartItems.map((item) => ({
        name: item.name,
        quantity: item.count,
        price: item.price,
        image: item.image,
      })),
    };

    try {
      const response = await axios.post(
        "https://fazel-server.vercel.app/api/send-order-email",

        data
      );

      if (response.status === 200) {
        setSuccess(true);
        // dispatch(clearCart());
        reset();
      } else {
        setSuccess(false);
      }
    } catch (error) {
      console.error(error);
      alert("Ошибка");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <React.Fragment>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full gap-3 lg:gap-6 flex flex-col justify-center items-center"
      >
        <div className="w-full px-2 lg:px-5">
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Ваше имя
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder=""
            required=""
            autoComplete="given-name"
          />
          {errors.name && <span>Заполните поле</span>}
        </div>
        <div className="w-full px-2 lg:px-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Ваша почта
          </label>
          <input
            type="email"
            id="email"
            name="email"
            {...register("email", { required: true })}
            className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
            placeholder="name@flowbite.com"
            required=""
            autoComplete="email"
          />
          {errors.email && <span>Заполните поле</span>}
        </div>
        <div className="w-full px-2 lg:px-5">
          <label
            htmlFor="phone"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Ваш номер телефона
          </label>
          <ReactInputMask
            mask="+7 (999) 999-99-99"
            id="phone"
            name="phone"
            {...register("phone", { required: true })}
            className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
            placeholder="Введите свой номер телефона"
            required=""
            autoComplete="tel"
          />
          {errors.phone && <span>Заполните поле</span>}
        </div>
        <div className="sm:col-span-2 w-full px-2 lg:px-5">
          <label
            htmlFor="description"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Ваше сообщение
          </label>
          <textarea
            id="description"
            name="description"
            rows={6}
            {...register("description", { required: false })}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
            placeholder="Оставьте комментарий..."
            defaultValue={""}
          />
        </div>
        <button
          type="submit"
          className="py-3 px-5 text-sm font-medium text-center btn btn--out-black text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
        >
          Связаться с нами
        </button>
      </form>
      {isLoading && (
        <div className="fixed w-full h-full z-50 bg-black bg-opacity-10 top-0 left-0 flex justify-center items-center   text-black font-semibold">
          Отправка...
        </div>
      )}
      {sendSuccess !== null && (
        <div className="fixed w-full h-full z-30 bg-black bg-opacity-30 top-0 left-0 flex justify-center items-center   text-white font-semibold">
          <div className="flex w-[300px] h-[300px] justify-center items-center flex-col bg-white rounded-lg">
            <h3 className=" text-black mb-3">
              {sendSuccess
                ? "Успешно отправлено"
                : "Ошбика. Повтотите отправку."}
            </h3>
            <button
              onClick={() => setSuccess(null)}
              className="btn btn--fill-black"
            >
              Закрыть
            </button>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default PopupForm;
