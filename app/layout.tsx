import { Nunito } from "next/font/google";
import { RegisterModal } from "./components/modals/RegisterModal";
import { Navbar } from "./components/navbar/Navbar";
import "./globals.css";
import { ToasterProvider } from "./providers/ToasterProvider";

const font = Nunito({ subsets: ["latin"] });

export const metadata = {
  title: "Airbnb",
  description: "Airbnb NextJs clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
