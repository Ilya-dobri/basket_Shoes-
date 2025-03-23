import React from "react";
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
import { Button } from "@/ui/button";
import categories from "../sample/categories.json";
import DraverCategoriesShosesForBrand from "./DraverCategoriesShosesForBrand";
type Props = {
  ButtonVariant:
    | "link"
    | "header"
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost";
  NameShoes: number | string;
  children?: React.ReactNode;
};

const CustomDrawer: React.FC<Props> = ({ ButtonVariant, NameShoes }) => {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant={ButtonVariant}>{NameShoes}</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle>
            Меню
            <div className="p-4">
          {Object.entries(categories.brands).filter(([brand]) => brand === NameShoes).map(([brand, data]) => (
            <DraverCategoriesShosesForBrand key={brand} brand={brand} categories={data} />
          ))}
        </div>
          </DrawerTitle>
          <DrawerDescription>бренд: {NameShoes}</DrawerDescription>
        </DrawerHeader>
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="secondary" className="w-[200px] m-auto">
              Закрыть
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
