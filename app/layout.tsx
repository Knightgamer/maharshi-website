import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import "../static/styles/main.scss";

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Maharshi Packaging Limited",
  description: "Maharshi Packaging Limited",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={sourceSans.className}>{children}</body>
    </html>
  );
}
