import React from "react";
import GeneralButton from "@/components/custom/general-button";
import SectionDivider from "@/components/custom/section-divider";

interface ReservationSummaryProps {
  selectedService: string | null;
  onReservation: () => void;
}

export const ReservationSummary: React.FC<ReservationSummaryProps> = ({
  selectedService,
  onReservation,
}) => {
  if (!selectedService) return null;

  return (
    <section className="grid grid-rows-[1fr_auto] gap-8 bg-white p-8 rounded-lg shadow-md">
      <section className="overflow-y-auto text-black">
        <h3 className="text-lg font-semibold">Resumen</h3>
        <section className="flex justify-between items-center">
          <span className="text-sm">{selectedService}</span>
          <span className="text-sm">5€</span>
        </section>

        <SectionDivider />

        <section className="flex justify-between items-center">
          <span className="text-sm">Total</span>
          <span className="text-sm">5€</span>
        </section>
      </section>
      <section className="flex flex-col gap-4">
        <GeneralButton
          className="w-full h-16 md:h-12 justify-center"
          variant="outline"
          onClick={onReservation}
        >
          Reservar cita
        </GeneralButton>
      </section>
    </section>
  );
};

export default ReservationSummary;
