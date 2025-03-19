"use client";
import React, { useEffect, useState } from "react";
import Logo2 from "./img/Logo2.svg";
import Image from "next/image";
import { useThemeStore } from "../zustand/themeStore";
import { getCookie } from "cookies-next";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "../ui/drawer";
import { Button } from "../ui/button";
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
    <div className="w-full ">
      <div className="flex w-[60%] h-[100px] m-auto justify-between items-center   ">
        <div className=" gap-2 flex w-auto p-3 text-2xl font-bold   ">
          <Image src={Logo2} alt="Логотип" className="w-6 " />
          <h1 className="hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50  ">BShose</h1>
        </div>
        <div className="flex  justify-center items-center gap-10 w-[60%] ">
          <div className="flex items-center   gap-10 text-2xl font-medium">
            <Button variant={"ghost"} >Nike</Button>
            <Button  variant={"ghost"}>Adidas</Button>
            <Button  variant={"ghost"}>Puma</Button>
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant={"ghost"}  >New Balanse</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>Меню</DrawerTitle>
                  <DrawerDescription>Выберите бренд</DrawerDescription>
                </DrawerHeader>
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">Закрыть</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
            <button
              onClick={toggleTheme}
              className={`p-2  row-auto rounded-4xl transition-colors duration-300 cursor-pointer  ${
                theme === "light"
                  ? "bg-black text-white"
                  : "bg-white text-black"
              }`}
            >
              {theme === "light" ? `🌙` : "☀️ "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
