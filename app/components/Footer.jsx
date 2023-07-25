import Link from "next/link";
import React from "react";
import { BsWhatsapp, BsTelegram, BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className=" bg-neutral-900 w-full mt-6 lg:mt-12 flex-[0_0_auto]  xl:px-20 lg:px-12 sm:px-6 px-4 py-12">
      <div className="flex flex-col items-center justify-center">
        <div>
          <svg
            width="59"
            height="22"
            viewBox="0 0 59 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.36 22L4.89 0.579999H13.62L13.14 2.8H6.9L5.28 10.6H11.1L10.62 12.82H4.8L2.85 22H0.36ZM9.47719 22L19.2572 0.519999H22.2572L23.0972 22H20.5772L20.3372 15.25H15.2072L12.2072 22H9.47719ZM16.1372 12.97H20.3372L20.2772 6.37C20.2572 5.81 20.2372 5.24 20.2172 4.66C20.2172 4.08 20.2272 3.56 20.2472 3.1H20.1572C19.9972 3.56 19.8072 4.07 19.5872 4.63C19.3872 5.19 19.1472 5.78 18.8672 6.4L16.1372 12.97ZM23.9423 22L24.3623 20.08L35.0723 2.8H28.2023L28.6823 0.579999H38.4023L38.0123 2.53L27.2423 19.78H34.5623L34.1123 22H23.9423ZM37.069 22L41.599 0.579999H50.299L49.849 2.8H43.609L42.169 9.7H47.959L47.509 11.92H41.689L40.009 19.78H46.249L45.769 22H37.069ZM49.3737 22L53.9037 0.579999H56.3937L52.3137 19.78H58.4637L58.0137 22H49.3737Z"
              fill="#FFF"
            />
          </svg>
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8">
          <Link
            href=""
            className="hover:text-gray-500 text-base cursor-pointer leading-4  text-neutral-100"
          >
            О компании
          </Link>
          <Link
            href=""
            className="hover:text-gray-500 text-base cursor-pointer leading-4  text-neutral-100"
          >
            Связатья с нами
          </Link>
          <Link
            href=""
            className="hover:text-gray-500 text-base cursor-pointer leading-4  text-neutral-100"
          >
            Проекты
          </Link>
          <Link
            href=""
            className="hover:text-gray-500 text-base cursor-pointer leading-4  text-neutral-100"
          >
            Наши работы
          </Link>
        </div>
        <div className="flex items-center gap-x-8 mt-6">
          <Link
            href="https://wa.me/+79183923328"
            className="cursor-pointer flex "
          >
            <BsWhatsapp className="cursor-pointer h-[24px] w-[24px]  text-neutral-50" />
          </Link>
          <Link href="https://t.me/sandalya1972" className="cursor-pointer">
            <BsTelegram className="cursor-pointer h-[24px] w-[24px]  text-neutral-50" />
          </Link>
          <Link href="" className="cursor-pointer">
            <BsInstagram className="cursor-pointer h-[24px] w-[24px]  text-neutral-50" />
          </Link>
        </div>
        <div className="flex items-center mt-6">
          <p className="text-base leading-4  text-neutral-100">
            2021 <span className="font-semibold">Fazel</span>
          </p>
          <div className="border-l border-gray-800 pl-2 ml-2">
            <p className="text-base leading-4  text-neutral-100">
              &#169; Все права защищены
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
