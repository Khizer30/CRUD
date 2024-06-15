import withMT from "@material-tailwind/react/utils/withMT";
import { type Config } from "tailwindcss";

const config: Config =
{
  content:
    [
      "./pages/**/*.{js,ts,jsx,tsx,mdx}",
      "./components/**/*.{js,ts,jsx,tsx,mdx}",
      "./app/**/*.{js,ts,jsx,tsx,mdx}"
    ],
  theme:
  {
    colors:
    {
      "white": "#FFFFFF",
      "black": "#000000"
    },
    fontFamily:
    {
      primary: ["Roboto", "sans-serif"]
    },
    container:
    {
      center: true
    }
  },
  plugins: []
};

export default withMT(config);