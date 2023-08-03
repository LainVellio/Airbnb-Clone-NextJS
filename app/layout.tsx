import { Nunito } from "next/font/google";
import Modal from "./components/modals/Modal";
import { Navbar } from "./components/navbar/Navbar";
import "./globals.css";

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
        <Modal
          isOpen
          title="Title"
          body={<div>Body</div>}
          footer={<div>Footer</div>}
        />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
