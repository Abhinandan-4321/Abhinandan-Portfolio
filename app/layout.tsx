import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const space_Grotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000/"),
  title: { template: "%s | Abhinandan's Portfolio", default: "Abhinandan's Portfolio" },
  authors: { name: "Abhinandan" },
  description:
    "Based in Himachal Pradesh, I’m a Fullstack developer who blends creativity with technical expertise to deliver web applications that delight users.",
  openGraph: {
    title: "Daily Vote",
    description:
      "Based in Himachal Pradesh, I’m a Fullstack developer who blends creativity with technical expertise to deliver web applications that delight users.",
    url: "http://localhost:3000/",
    siteName: "Abhinandan's Portfolio",
    images: "/image.png",
    type: "website",
  },
  keywords: ["Portfolio", "Abhinandan", "Abhinandan's Portfolio", "Abhinandan Gupta Linkedin"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={space_Grotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
