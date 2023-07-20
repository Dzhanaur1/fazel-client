import {
  AcademicCapIcon,
  ClockIcon,
  BanknotesIcon,
  ClipboardDocumentCheckIcon,
} from "@heroicons/react/24/outline";

const About = () => (
  <div className="overflow-y-hidden">
    <div className="xl:mx-auto xl:container  xl:px-20 md:px-6 px-4 py-12">
      <div className="lg:flex items-center justify-center lg:space-x-12 2xl:space-x-6">
        <div className>
          <p className="lg:text-4xl text-3xl font-extrabold leading-9 text-gray-800">
            Почему нас выбирают
          </p>
          <p className="text-lg leading-7 text-gray-600 mt-4 xl:w-7/12 w-full">
            Мы стремимся предоставлять лучшие продукты и услуги нашим клиентам.
            Вот несколько причин, почему вы должны выбрать нас:
          </p>
          <div className="lg:hidden lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
            <img
              src="about.jpg"
              alt="ongoing meeting"
              className="w-full obejct-fit object-center object-cover h-full"
            />
          </div>
          <div className="mt-6 md:mt-10 grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 lg:mt-6 2xl:mt-12">
            <div className="flex items-center">
              <div className="w-16 h-16 relative">
                <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                  <ClipboardDocumentCheckIcon className="text-gray-800" />
                </div>
              </div>
              <div className="flex items-start flex-col ml-6 pt-8">
                <h2 className="text-lg font-semibold leading-4 text-gray-800">
                  Качественные продукты
                </h2>
                <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                  Мы используем только высококачественные материалы в
                  производстве
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 relative">
                <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                  <BanknotesIcon className="text-gray-800" />
                </div>
              </div>
              <div className="flex items-start flex-col ml-6 pt-8">
                <h2 className="text-lg font-semibold leading-4 text-gray-800">
                  Доступные цены
                </h2>
                <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                  Мы постоянно отслеживаем цены на рынке для предложения
                  наиболее выгодных условий для вас.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 relative">
                <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                  <ClockIcon className="text-gray-800" />
                </div>
              </div>
              <div className="flex items-start flex-col ml-6 pt-8">
                <h2 className="text-lg font-semibold leading-4 text-gray-800">
                  Быстрое производство
                </h2>
                <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                  Мы используем современное оборудование и технологии.
                </p>
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-16 h-16 relative">
                <div className=" flex-shrink-0 z-20  w-16 h-16 flex items-center justify-center mt-2 mr-3">
                  <AcademicCapIcon className="text-gray-800" />
                </div>
              </div>
              <div className="flex items-start flex-col ml-6 pt-8">
                <h2 className="text-lg font-semibold leading-4 text-gray-800">
                  Опытность
                </h2>
                <p className="lg:w-40 2xl:w-52 text-base leading-6 mt-2 text-gray-600">
                  Наша компания имеет богатый опыт и гарантирует высокое
                  качество всех наших изделий.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-3/5 xl:w-3/5 w-full lg:mt-0 mt-6">
          <img
            src="about.jpg"
            alt="ongoing meeting"
            className="w-full obejct-fit object-center object-fill h-full"
          />
        </div>
      </div>
    </div>
  </div>
);
export default About;
