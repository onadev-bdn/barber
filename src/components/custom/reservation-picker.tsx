"use client";

import * as React from "react";
import { addDays } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ReservationPicker() {
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="flex justify-between items-center">
      <span className="text-lg font-bold">¡Reserva ya!</span>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={"outline"}>
            <CalendarIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="flex w-auto flex-col space-y-2 p-2"
        >
          <Select
            onValueChange={(value) =>
              setDate(addDays(new Date(), parseInt(value)))
            }
          >
            <SelectTrigger>
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent position="popper">
              <SelectItem value="0">Hoy</SelectItem>
              <SelectItem value="1">Mañana</SelectItem>
              <SelectItem value="3">En 3 días</SelectItem>
              <SelectItem value="7">En una semana</SelectItem>
              <SelectItem value="28">En un mes</SelectItem>
            </SelectContent>
          </Select>
          <div className="rounded-md border">
            <Calendar mode="single" selected={date} onSelect={setDate} />
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
