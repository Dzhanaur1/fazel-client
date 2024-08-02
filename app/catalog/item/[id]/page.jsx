// app/catalog/item/[id]/page.js

import React from "react";
import {
  Container,
  Grid,
  Typography,
  Box,
  Button as MuiButton,
  Rating,
} from "@mui/material";

import { getProductByID } from "@/utils/getData";
import Link from "next/link";
import ProductPageSlider from "@/app/components/ProductPage/ProductPageSlider";
import Button from "@/app/components/AddToCartButtom";

// Функция для получения метаданных страницы
export async function generateMetadata({ params }) {
  const id = params.id;
  const product = await getProductByID(id);

  if (!product) {
    return {
      title: "Товар не найден",
      description: "Этот товар недоступен",
    };
  }

  return {
    title: `${product.name} - Купить по лучшей цене`,
    description: `${product.name} от производителя. Купите от ${product.price} руб. Доступно для заказа онлайн.`,
    openGraph: {
      title: `${product.name} - Купить по лучшей цене`,
      description: `${product.name} от производителя. Купите от ${product.price} руб. Доступно для заказа онлайн.`,
      images: [
        {
          url: product.image,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
      url: `https://fazel-client.vercel.app/item/${id}`,
      siteName: "Fazel",
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.name} - Купить по лучшей цене`,
      description: `${product.name} от производителя. Купите от ${product.price} руб. Доступно для заказа онлайн.`,
      images: [product.image],
    },
  };
}

// Компонент страницы товара
const ItemPage = async ({ params: { id } }) => {
  const product = await getProductByID(id);

  if (!product) {
    return (
      <Typography variant="h6" color="error">
        Товар не найден
      </Typography>
    );
  }

  return (
    <main className="grow">
      <section>
        <div className="items-center px-8 pb-12 mx-auto max-w-7xl md:px-12 lg:pb-24 pt-36">
          <h1 className="text-3xl md:text-5xl lg:text-7xl text-balance text-black font-display">
            {product.name}
          </h1>
          <div className="mx-auto mt-12">
            <div className="lg:gap-x-8 lg:gap-y-10 lg:grid lg:grid-cols-7 lg:grid-rows-1 xl:gap-x-16">
              <div className="lg:col-span-4 lg:row-end-1 space-y-3">
                <ProductPageSlider image={product.image} />
              </div>
              <div className="mx-auto lg:col-span-3 lg:max-w-none lg:mt-0 lg:row-end-2 lg:row-span-2 max-w-2xl mt-14 sm:mt-16">
                <p className="text-black font-bold md:text-lg">
                  Цена:{" "}
                  {product.price === 0 ? "По запросу" : product.price + " ₽  "}
                </p>
                <div className="mt-10 gap-2 grid grid-cols-1 sm:grid-cols-2">
                  <Button {...product} />
                  <Link
                    href="#_"
                    title="link to your page"
                    aria-label="your label"
                    class="items-center text-sm active:bg-gray-100 active:text-black/60 active:transition-none border font-medium gap-2 inline-flex justify-center outline-offset-2 px-6 py-3 transition w-full bg-white hover:bg-gray-50 text-black lg:w-auto rounded-lg"
                  >
                    Связаться с нами
                  </Link>
                </div>
                <div className="border-t mt-10 pt-10">
                  <h3 className="text-base font-semibold text-black">
                    Параметры
                  </h3>
                  <div className="text-gray-600 mt-4 prose prose-sm">
                    <ul role="list">
                      <li>
                        <b>Габариты:</b> {product.length}x{product.width}x
                        {product.height} мм
                      </li>
                      <li>
                        <b>Материал</b>: дерево, металл
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="border-t mt-10 pt-10">
                  <h3 className="text-base font-semibold text-black">
                    Доставка
                  </h3>
                  <p className="text-sm text-gray-600 mt-4">
                    Доставка производится в течение 5 рабочих дней и более с
                    момента подтверждения заказа. Время доставки зависит от
                    вашего региона и доступности товара на складе. <br />{" "}
                    <b>**Обратите внимание**:</b> Стоимость доставки
                    рассчитывается отдельно и не включена в стоимость
                    оборудования.
                  </p>
                </div>
                <dl className="flex flex-col gap-2 mt-8">
                  {/* <div className="border p-6 rounded-lg hover:shadow-2xl duration-200 bg-gray-50">
                    <dt>
                      <span className="text-sm font-semibold text-black">
                        ГАРАНТИЯ
                      </span>
                    </dt>
                    <dd className="text-gray-600 mt-1 text-sm text-pretty">
                      Imagine the sleek, unobtrusive feel of our skins, designed
                      to enhance the iPhone 14 Pro Max’s slim profile without
                      compromising on protection.
                    </dd>
                  </div> */}
                  <div className="border p-6 rounded-lg hover:shadow-2xl duration-200 bg-gray-50">
                    <dt>
                      <span className="text-sm font-semibold text-black">
                        УСТАНОВКА
                      </span>
                    </dt>
                    <dd className="text-gray-600 mt-1 text-sm text-pretty">
                      Мы предоставляем профессиональные услуги по монтажу,
                      которые гарантируют качественную и безопасную установку
                      оборудования. Наши специалисты обладают необходимыми
                      знаниями и опытом, чтобы обеспечить лучший результат.{" "}
                      <br />
                      <b>**Обратите внимание**</b>: Стоимость монтажа не
                      включена в цену оборудования и рассчитывается отдельно.
                      Цена монтажа составляет от 20% от стоимости оборудования.
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="px-8 py-12 mx-auto max-w-7xl md:px-12">
          <div className="bg-neutral-900 p-8 lg:p-10 lg:pt-36 xl:pt-64 rounded-3xl">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 items-end">
              <div className="md:col-span-3">
                <p className="text-2xl text-white lg:text-6xl text-balance font-display">
                  Свяжитесь с нами <br />
                  <span className="text-gray-400">
                    <span className=" whitespace-nowrap">
                      и получите индивидуальное
                    </span>{" "}
                    предложение.
                  </span>
                </p>
              </div>
              <div className="md:ml-auto">
                <Link
                  href="/pricing/pricing-tiers"
                  className="items-center text-sm size-12 group active:bg-gray-100 active:text-gray-900/60 active:transition-none border font-medium gap-2 inline-flex justify-center outline-offset-2 px-6 py-3 transition w-full bg-white hover:bg-gray-50 text-black lg:w-auto rounded-lg"
                >
                  →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ItemPage;
