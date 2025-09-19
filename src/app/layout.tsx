import type { Metadata } from "next";
import { Oswald, Roboto, Abril_Fatface } from "next/font/google";
import "./globals.css";
import FooterSection from "@/components/FooterSection";
import NavBar from "@/components/NavBar";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

const oswald = Oswald({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});
const abriFatface = Abril_Fatface({
  weight: "400",
  subsets: ["latin"],
});
export const metadata: Metadata = {
  title: "Akintunde Teslim- Full Stack Engineer",
  description:
    "I am expert in designing Faster, efficient and SEO-friendly websites as well as transforming concept into seamless user experiences.",
  keywords:
    "Frontend Developer, Full stack developer, Web Development, SEO, UI/UX, JavaScript, React, Next.js, Node.js, Express.js Akintunde Teslim",
  authors: [
    { name: "Akintunde Teslim", url: "https://tesak-full-stack.vercel.app" },
  ],
  robots: "index, follow",
  metadataBase: new URL("https://tesak-full-stack.vercel.app"), // Change this to your actual domain
  openGraph: {
    title: "Meet Akintunde Teslim: A Skilled Full Stack Engineer",
    description:
      "I am expert in designing Faster, efficient and SEO-friendly websites as well as transforming concept into seamless user experiences.",
    url: "https://tesak-full-stack.vercel.app",
    images: [
      {
        url: "/hero-image-full-stack.png",
        width: 1260,
        height: 800,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@yourTwitterHandle", // Replace with your actual Twitter handle
    creator: "@yourTwitterHandle",
    title: "Akintunde Teslim - Full-Stack Engineer",
    description:
      "I specialize in designing fast, efficient, and SEO-friendly websites, creating seamless user experiences.",
    images: "/hero-image-full-stack.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link
          rel="icon"
          href="/Favicon.png"
          sizes="32x32"
          type="image/x-icon"
        />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* <link rel="manifest" href="/site.webmanifest" /> */}

        {/* Canonical URL */}
        <link rel="canonical" href="https://tesak.vercel.app" />
      </head>
      <body
        className={`${roboto.className} ${oswald.className} ${abriFatface.className} antialiased`}
      >
        <NavBar />
        {children}
        <FooterSection />
      </body>
    </html>
  );
}
