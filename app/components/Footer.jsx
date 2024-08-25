import Link from "next/link";
import React from "react";
import { BsWhatsapp, BsTelegram, BsInstagram } from "react-icons/bs";
const Footer = () => {
  return (
    <footer className=" bg-neutral-900 w-full mt-6 lg:mt-12 flex-[0_0_auto]  xl:px-20 lg:px-12 sm:px-6 px-4 py-12">
      <div className="flex flex-col items-center justify-center">
        <div>
          <img className=" max-h-[60px]" src="/icons/logo-white.svg" />
        </div>
        <div className="flex flex-wrap sm:gap-10 gap-8 items-center justify-center mt-8">
          <Link
            href="/about"
            className="hover:text-gray-500 text-base cursor-pointer leading-4  text-neutral-100"
          >
            О компании
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-500 text-base cursor-pointer leading-4  text-neutral-100"
          >
            Связатья с нами
          </Link>
          <Link
            href="/projects"
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
            2021 <span className="font-semibold">UDO</span>
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
