import { type Metadata } from "next";
import "@fontsource/roboto";
//
import { type Children } from "@lib/interfaces";
import "./globals.css";

// Metadata
export const metadata: Metadata =
{
  title: "CRUD",
  keywords: ["CRUD"],
  description: "A Simple CRUD App",
  authors:
  {
    name: "Syed Muhammad Khizer",
    url: "https://syedmuhammadkhizer.vercel.app"
  },
  icons:
  {
    icon:
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/images/favicon.png"
    }
  }
};

// Layout
export default function Layout({ children }: Children): JSX.Element
{
  return (
    <html lang="en-PK">
      <body>
        { children }
      </body>
    </html>
  );
}