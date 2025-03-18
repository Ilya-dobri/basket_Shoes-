'use client'
import React, { useEffect, useState }  from "react";
import Logo2 from "./img/Logo2.svg";
import Image from 'next/image';
import { useThemeStore } from "../zustand/themeStore";
import { getCookie } from "cookies-next";


type Props = {
  props?: string;
};

const Header: React.FC<Props> = () => {
  const { theme, toggleTheme, setTheme } = useThemeStore();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const savedTheme = (getCookie("theme") as "light" | "dark") || "light";
    setTheme(savedTheme);
    setIsMounted(true); 
  }, [setTheme]);

  // Ждём, пока тема загрузится
  if (!isMounted) {
    return <div className="w-full h-16 bg-gray-200 animate-pulse"></div>;
  }

  return (
    <div className="w-full bg-amber-50">
      <div className="flex headerglobal justify-between items-center ">
        <div className=" gap-2 flex w-auto p-3 text-2xl font-bold text-black  ">
          
          <Image src={Logo2} alt="Логотип" className="w-6 " />
          <h1>BShose</h1>

        </div>
        <div className="flex gap-10 w-[50%] bg-amber-800">
          <div className=" ">
            <h1>Header</h1>
            <h1>Header</h1>
            <button onClick={toggleTheme} className="p-2 bg-gray-200 rounded">
            {theme === "light" ? "🌙 " : "☀️ "}
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
