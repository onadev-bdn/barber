"use client";

import { useState } from "react";
import { addMinutes, format, setHours, setMinutes } from "date-fns";
import { CircleCheckBig } from "lucide-react";
import GeneralButton from "./general-button";

const generateTimeSlots = () => {
  const startTime = setHours(setMinutes(new Date(), 0), 9);
  const endTime = setHours(setMinutes(new Date(), 0), 21);

  const slots = [];
  let current = startTime;
  while (current < endTime) {
    slots.push(current);
    current = addMinutes(current, 15);
  }

  return slots;
};

const timeSlots = generateTimeSlots();

function TimeTable() {
  const [selectedTime, setSelectedTime] = useState<Date | null>(null);

  return (
    <div className="flex flex-col space-y-4 h-full max-h-[45vh] md:max-h-[60vh]">
      <h2 className="text-lg font-semibold">Selecciona una hora</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2 w-full overflow-y-auto h-full">
        {timeSlots.map((slot, index) => (
          <GeneralButton
            key={index}
            variant={selectedTime === slot ? "default" : "outline"}
            onClick={() => setSelectedTime(slot)}
          >
            {format(slot, "HH:mm")}
            {selectedTime === slot && (
              <CircleCheckBig
                color="#31c478"
                strokeWidth={"3"}
                size={25}
                className="md:absolute md:right-2 md:top-2 md:bottom-0 md:flex md:items-center md:justify-center"
              />
            )}
          </GeneralButton>
        ))}
      </div>
    </div>
  );
}

export default TimeTable;
