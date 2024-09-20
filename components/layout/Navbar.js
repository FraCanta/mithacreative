import Image from "next/image";
import React from "react";
import Logo from "@/public/assets/logo.png";
import Link from "next/link";
import { Icon } from "@iconify/react";
import { useTheme } from "next-themes";
import Mobile from "./mobile";
import Cta from "../Cta/Cta";

function Navbar() {
  const { systemTheme, theme, setTheme } = useTheme();

  const renderThemeChanger = () => {
    const currentTheme = theme === "system" ? systemTheme : theme;

    if (currentTheme === "dark") {
      return (
        <button
          onClick={() => setTheme("light")}
          title="dark-mode "
          aria-label="dark-mode"
        >
          <Icon
            icon="akar-icons:sun-fill"
            color="#ffff"
            width={30}
            height={30}
          />
        </button>
      );
    } else {
      return (
        <button
          title="dark-mode"
          aria-label="dark-mode"
          onClick={() => setTheme("dark")}
        >
          <Icon
            icon="clarity:moon-solid"
            color="#0D161E"
            width={30}
            height={30}
          />
        </button>
      );
    }
  };
  return (
    <nav className="w-[90%] h-[80px] lg:h-[100px] py-8 mx-auto flex items-center justify-between text-primary dark:text-white ">
      <div>
        <Link href="/" title="Home Page">
          <Image
            src={Logo}
            alt="logo"
            width={80}
            height={80}
            className="w-[60px] h-[60px] lg:w-[80px] lg:h-[80px]"
          />
        </Link>
      </div>

      <div className="flex items-center gap-6">
        {renderThemeChanger()}

        <div className="hidden">
          <Cta link="/inizia-il-progetto">Inizia un progetto</Cta>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
