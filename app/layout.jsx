import { Provider } from "react-redux";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Noto_Sans } from "next/font/google";
import { store } from "@/redux/store";
import { ReduxProvider } from "@/redux/provider";

const inter = Noto_Sans({ subsets: ["cyrillic"], weight: "400" });

// export const metadata = {
//   title:
//     " Купить Детские площадки - компания по производсту уличного оборудования «Fazel» | Fazel",
//   description:
//     "Рекомендуем купить детские игровые городки и площадки у нас в профильной компании «Детские площадки» в Краснодаре. Осуществляем по желанию Клиента работы по бетонированию и качественную установку под ключ. Предоставляем длительную гарантию и быструю доставку.",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="en" className=" h-full">
      <head>
        <link rel="icon" href="/icons/Fazel.svg" type="image/svg+xml" />
        <meta name="yandex-verification" content="04f7e6e6d5b9a2bb" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="lang" content="ru" />
        <meta name="robots" content="index, follow" />
      </head>
      <body className={`${inter.className}  h-full`}>
        <ReduxProvider>
          <div className="flex flex-col h-full">
            <Header />
            <main className="pt-[48px]  flex-[1_0_auto]">{children}</main>
            <Footer />
          </div>
        </ReduxProvider>
      </body>
    </html>
  );
}
