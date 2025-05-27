"use client";

import { useState, useEffect } from "react";
import { useScreenSize } from "@/hooks/useScreenSize";
import { ServiceList } from "@/components/services/service-list";
import { MobileReservationDrawer } from "@/components/reservation/mobile-reservation-drawer";
import { DesktopReservationPanel } from "@/components/reservation/desktop-reservation-panel";
import { ServiceType } from "@/components/services/service-list";

export default function Client() {
  const { isMobile } = useScreenSize();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceType>(
    ServiceType.HAIRCUT
  );

  useEffect(() => {
    setIsDrawerOpen(!isMobile);
  }, [isMobile]);

  useEffect(() => {
    if (isMobile && isDrawerOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMobile, isDrawerOpen]);

  const handleServiceSelect = (service: ServiceType) => {
    if (isDrawerOpen && selectedService === service) {
      setIsDrawerOpen(false);
      setSelectedService(ServiceType.HAIRCUT);
    } else {
      setSelectedService(service);
      setIsDrawerOpen(true);
    }
  };

  const handleReservation = () => {
    // Handle reservation logic here
    console.log("Making reservation for:", selectedService);
    // You can add your reservation logic here
  };

  return (
    <div className="flex items-start min-h-screen m-8 mt-20 mb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex w-full gap-8 h-screen">
        <section className="flex flex-col gap-8 w-full md:w-1/3 max-h-screen pr-4 overflow-y-auto">
          <ServiceList
            onServiceSelect={handleServiceSelect}
            selectedService={selectedService}
          />
          {isMobile && (
            <MobileReservationDrawer
              isOpen={isDrawerOpen}
              onClose={() => setIsDrawerOpen(false)}
              selectedService={selectedService}
            />
          )}
        </section>
        {!isMobile && (
          <DesktopReservationPanel
            isOpen={isDrawerOpen}
            selectedService={selectedService}
            onReservation={handleReservation}
          />
        )}
      </main>
    </div>
  );
}
