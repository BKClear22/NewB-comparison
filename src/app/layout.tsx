import type { Metadata } from "next";
import { Crimson_Text } from "next/font/google";
import "./globals.css";
import StickyCallButton from "@/components/StickyCallButton";

const crimsonText = Crimson_Text({
  variable: "--font-crimson",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "New Beginnings Detox & Recovery | Personalized Addiction Treatment",
  description: "Your journey to recovery starts here. With only 6 residents, we provide truly personalized care for substance use and mental health challenges.",
  keywords: "detox, recovery, rehabilitation, substance abuse, mental health, addiction treatment, personalized care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-WXRGQ6HW');`,
          }}
        />
      </head>
      <body className={`${crimsonText.variable} antialiased`}>
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WXRGQ6HW"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {children}
        <StickyCallButton />
      </body>
    </html>
  );
}
