import React from "react";
import { FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";

const AboutPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold mb-8">О нас</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaMapMarkerAlt className="text-3xl mb-4" />
            <h2 className="text-xl font-bold mb-2">Адрес</h2>
            <p>г. Москва, ул. Ленина, д. 10</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaPhone className="text-3xl mb-4" />
            <h2 className="text-xl font-bold mb-2">Телефон</h2>
            <p>+7 (495) 123-45-67</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <FaEnvelope className="text-3xl mb-4" />
            <h2 className="text-xl font-bold mb-2">Email</h2>
            <p>info@ourcompany.com</p>
          </div>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Наша миссия</h2>
          <p className="text-lg leading-relaxed">
            Мы стремимся создавать комфортные и функциональные общественные
            пространства, которые будут радовать людей своим уютом и красотой.
          </p>
        </div>
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Наша продукция</h2>
          <p className="text-lg leading-relaxed">
            Мы выпускаем широкий ассортимент продукции, включающий в себя
            лавочки, урны, столы, скамейки, парковые зоны отдыха и многое
            другое. Все наши изделия отличаются высоким качеством,
            долговечностью и эстетичным дизайном.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
