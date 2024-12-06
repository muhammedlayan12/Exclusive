import { Metadata } from "next";
// import { Poppins, Nunito, Jost } from "next/font/google";
import "./globals.css";

// const poppins = Poppins({
//   subsets: ["latin"],
//   variable: "--font-poppins",
//   weight: ["400", "700"],
  
// });

// const nunito = Nunito({
//   subsets: ["latin"],
//   variable: "--font-nunito",
//   weight: ["400", "700"], 
  
// });

// const jost = Jost({
//   subsets: ["latin"],
//   variable: "--font-jost",
//   weight: ["400", "700"], 
  
// });

export const metadata: Metadata = {
  title: "Exclusive",
  description: "Hachkathon Assigment Of Giaic",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`    antialiased`}
      ><link href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700&display=swap" rel="stylesheet"/>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>


        {children}
      </body>
    </html>
  );
}
