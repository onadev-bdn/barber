import React from 'react';
import DesktopDrawer from '@/components/custom/desktop-drawer';
import ReservationPicker from '@/components/custom/reservation-picker';
import DateStepper from '@/components/custom/date-stepper';
import TimeTable from '@/components/custom/timetable';
import { ReservationSummary } from './reservation-summary';
import { ServiceType } from '@/components/services/service-list';

interface DesktopReservationPanelProps {
  isOpen: boolean;
  selectedService: ServiceType | null;
  onReservation: () => void;
}

export const DesktopReservationPanel: React.FC<DesktopReservationPanelProps> = ({
  isOpen,
  selectedService,
  onReservation,
}) => {
  if (!selectedService) return null;

  return (
    <section className="w-full md:w-2/3 bg-transparent p-6 overflow-y-hidden max-h-screen sticky top-20 rounded-lg shadow-md">
      <DesktopDrawer isOpen={isOpen}>
        <div className="p-4">
          <h2 className="text-xl font-bold mb-4">{selectedService}</h2>
          <section className="grid grid-cols-2 gap-20">
            <section className="flex flex-col gap-8">
              <ReservationPicker />
              <DateStepper initialDate={new Date()} />
              <TimeTable />
            </section>
            <ReservationSummary 
              selectedService={selectedService} 
              onReservation={onReservation} 
            />
          </section>
        </div>
      </DesktopDrawer>
    </section>
  );
};

export default DesktopReservationPanel;
