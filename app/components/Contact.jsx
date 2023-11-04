import React from "react";
import Form from "./Form";
const Contact = () => {
  return (
    <section className="bg-white ">
      <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 ">
          Свяжитесь с нами
        </h2>
        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500  sm:text-xl">
          Если у вас есть какие-либо вопросы или предложения, мы всегда рады
          выслушать их. Свяжитесь с нами.
        </p>
        <Form />
      </div>
    </section>
  );
};

export default Contact;
