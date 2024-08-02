import { ReduxProvider } from "../redux/provider";
import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";
import { Noto_Sans } from "next/font/google";

const inter = Noto_Sans({ subsets: ["cyrillic"], weight: "400" });

export default function RootLayout({ children }) {
  return (
    <html lang="ru" className=" h-full">
      <head>
        <meta
          name="google-site-verification"
          content="qwDLp0ssqVm-yU3rg5Ljt2O-pNK1C-4qJcPW0ENBYRw"
        />
        <link
          rel="icon"
          href="https://fazel-client.vercel.app/icons/Fazel.svg"
          type="image/svg+xml"
        />
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
