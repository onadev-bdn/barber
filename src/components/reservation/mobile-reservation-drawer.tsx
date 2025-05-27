import React from 'react';
import { ActionDrawer, ReservationPicker, DateStepper, TimeTable } from "@/components/custom";

interface MobileReservationDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  selectedService: string | null;
}

export const MobileReservationDrawer: React.FC<MobileReservationDrawerProps> = ({
  isOpen,
  onClose,
  selectedService,
}) => {
  if (!selectedService) return null;

  return (
    <div className="visible md:invisible w-full">
      <ActionDrawer isOpen={isOpen} onClose={onClose}>
        <h2 className="text-xl font-bold mb-4">{selectedService}</h2>
        <section className="flex flex-col gap-8">
          <ReservationPicker />
          <DateStepper initialDate={new Date()} />
          <TimeTable />
        </section>
      </ActionDrawer>
    </div>
  );
};

export default MobileReservationDrawer;
