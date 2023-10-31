"use client";
import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const PopupForm = ({ cartItems }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (userData) => {
    const data = {
      name: userData.name,
      phone: userData.phone,
      email: userData.email,
      description: userData.description,
      products: cartItems.map((item) => ({
        name: item.name,
        quantity: item.count,
        price: item.price,
      })),
    };

    try {
      const response = await axios.post(
        "https://fazel-server.vercel.app/api/send-order-email",
        data
      );
      console.log(response.data); // Optionally, you can handle the response from the server
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="w-full gap-3 lg:gap-6 flex flex-col justify-center items-center"
    >
      <div className="w-full px-2 lg:px-5">
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900 "
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
        />
        {errors.name && <span>This field is required</span>}
      </div>
      <div className="w-full px-2 lg:px-5">
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900 "
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
        />
        {errors.email && <span>This field is required</span>}
      </div>
      <div className="w-full px-2 lg:px-5">
        <label
          htmlFor="phone"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Ваш номер телефона
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          {...register("phone", { required: true })}
          className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
          placeholder="Введите свой номер телефона"
          required=""
        />
        {errors.phone && <span>This field is required</span>}
      </div>
      <div className="sm:col-span-2 w-full px-2 lg:px-5">
        <label
          htmlFor="description"
          className="block mb-2 text-sm font-medium text-gray-900 "
        >
          Ваше сообщение
        </label>
        <textarea
          id="description"
          name="description"
          rows={6}
          {...register("description", { required: true })}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
          placeholder="Оставьте комментарий..."
          defaultValue={""}
        />
        {errors.description && <span>This field is required</span>}
      </div>
      <button
        // type="submit"
        className="py-3 px-5 text-sm font-medium text-center btn btn--out-black text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300"
      >
        Связаться с нами
      </button>
    </form>
  );
};

export default PopupForm;
