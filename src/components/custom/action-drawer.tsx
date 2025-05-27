import * as React from "react";

import { SquareX } from "lucide-react";

import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";

interface ActionDrawer {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const ActionDrawer: React.FC<ActionDrawer> = ({
  isOpen,
  onClose,
  children,
}) => {
  return (
    <Drawer open={isOpen} onOpenChange={onClose}>
      <DrawerContent className="p-4 pb-20 h-[90vh]">
        <DrawerHeader className="flex w-full justify-end">
          <DrawerTitle></DrawerTitle>
          <SquareX size={25} onClick={onClose} />
        </DrawerHeader>
        {children}
      </DrawerContent>
    </Drawer>
  );
};

export default ActionDrawer;
