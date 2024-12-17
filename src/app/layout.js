import localFont from "next/font/local";
import "./globals.css";
import Nav from "./components/nav/Nav";
import { SearchProvider } from "./context/SearchContext";
import { BasketProvider } from "./context/BasketContext";
import { LikesProvider } from "./context/LikesContext";
import Footer from "./components/footer/Footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <BasketProvider>
        <LikesProvider>
          <SearchProvider>
            <body
              className={`${geistSans.variable} ${geistMono.variable} antialiased  `}
            >
              <Nav />
              {children}
              <Footer />
            </body>
          </SearchProvider>
        </LikesProvider>
      </BasketProvider>
    </html>
  );
}
