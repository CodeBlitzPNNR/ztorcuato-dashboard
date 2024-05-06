import { Inter } from "next/font/google";
import TanstackProvider from "./providers/TanstackProvider";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zingueria Don Torcuato - Sistemas",
  description: "Zingueria Don Torcuato, Acceso a sistemas",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <TanstackProvider>
          {children}        
        </TanstackProvider>
      </body>
    </html>
  );
}
