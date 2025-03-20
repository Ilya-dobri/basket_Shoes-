"use client";
import React, { useEffect, useState } from "react";
import Logo2 from "./img/Logo2.svg";
import Image from "next/image";
import { useThemeStore } from "../zustand/themeStore";
import { getCookie } from "cookies-next";

import CustomDrawer from "./DrawerContent";
type Props = {
  props?: string;
};

const Header: React.FC<Props> = () => {
  const { theme, toggleTheme, setTheme } = useThemeStore();
  const [isMounted, setIsMounted] = useState(false);
  const Shose = ['Nike', 'Adidas', 'Puma', 'New Balance'];
  useEffect(() => {
    const savedTheme = (getCookie("theme") as "light" | "dark") || "light";
    setTheme(savedTheme);
    setIsMounted(true);
  }, [setTheme]);


  if (!isMounted) {
    return <div className="w-full h-16 bg-gray-200 animate-pulse"></div>;
  }

  return (
    <div className="w-full ">
      <div className="flex w-[60%] h-[100px] m-auto justify-between items-center   ">
        <div className="  flex w-auto p-3 text-2xl font-bold   ">
          <Image src={Logo2} alt="Логотип" className="w-6 " />
          <h1 className="hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50  ">
            BShose
          </h1>
        </div>
        <div className="flex  justify-center items-center gap-10 w-[60%] ">
          <div className="flex items-center   text-2xl font-medium">
           {
              Shose.map((shose, id) => (
                <CustomDrawer key={id} ButtonVariant={"ghost"} NameShoes={shose}>
                  {shose}
                </CustomDrawer>
              ))
           }

            <button
              onClick={toggleTheme}
              className={`p-2  row-auto rounded-4xl transition-colors duration-300 cursor-pointer  ${
                theme === "light"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {theme === "light" ? `🌙` : "☀️"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
