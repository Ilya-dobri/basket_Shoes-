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
import Shouse from "../sample/Shose.json";
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
            <div>
              {Shouse.filter((shose) => shose.brand === NameShoes).map(
                (shose, id) => (
                  <React.Fragment key={id}>
                  <p>
                    {shose.name} {shose.brand}
                  </p>
                  <img src={shose.img} alt="" />
                </React.Fragment>
                )
              )}
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
