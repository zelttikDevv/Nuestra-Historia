import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nuestra Historia ❤️‍🩹",
  description: "Una cápsula del tiempo digital para nuestra relación",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
