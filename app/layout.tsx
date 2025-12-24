import type { Metadata } from "next";
import { Source_Sans_3 } from "next/font/google";
import Script from "next/script";
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
      <body className={sourceSans.className}>
        {/* Google tag (gtag.js) */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-48NGPTZBC3" strategy="afterInteractive" />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-48NGPTZBC3');
            `,
          }}
        />

        {children}
      </body>
    </html>
  );
}
