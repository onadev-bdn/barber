import { useState } from "react";
import { formatDate } from "@/lib/dateUtils";
import { addDays, isToday, isSameDay } from "date-fns";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

type DateStepperProps = {
  initialDate?: Date;
};

export default function DateStepper({
  initialDate = new Date(),
}: DateStepperProps) {
  const [currentDate, setCurrentDate] = useState(initialDate);
  const [selectedDate, setSelectedDate] = useState(initialDate);
  const [direction, setDirection] = useState(0);

  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  const visibleDays = isMobile ? 4 : 7;

  const days = Array.from({ length: visibleDays }, (_, i) =>
    addDays(currentDate, i)
  );

  const goPrevious = () => {
    setDirection(-1);
    setCurrentDate(addDays(currentDate, -visibleDays));
  };
  const goNext = () => {
    setDirection(1);
    setCurrentDate(addDays(currentDate, visibleDays));
  };

  return (
    <div className="flex items-center gap-2">
      <Button variant="ghost" size="icon" onClick={goPrevious}>
        <ChevronLeft />
      </Button>
      <motion.div
        className="flex gap-5"
        key={currentDate.toISOString()}
        initial={{ opacity: 0, x: direction * 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -direction * 50 }}
        transition={{ duration: 0.3 }}
      >
        {days.map((day) => (
          <section
            className="flex flex-col gap-2 items-center justify-between select-none"
            key={day.toISOString()}
          >
            <div
              onClick={() => setSelectedDate(day)}
              className={`flex flex-col items-center cursor-pointer justify-center w-12 h-12 rounded-full transition-all gap-5
              ${
                isSameDay(day, selectedDate)
                  ? `${
                      isMobile ? "bg-gray-700" : "bg-black"
                    } bg-black text-secondary dark:text-primary`
                  : "hover:bg-gray-200 hover:text-primary hover:dark:text-secondary border border-1 border-secondary dark:border-primary"
              }
              ${isToday(day) ? "font-bold" : ""}`}
            >
              <div className="text-lg">{formatDate(day, "d")}</div>
            </div>
            <div className="text-xs text-gray-500">{formatDate(day, "E")}</div>
          </section>
        ))}
      </motion.div>
      <Button variant="ghost" size="icon" onClick={goNext}>
        <ChevronRight />
      </Button>
    </div>
  );
}
