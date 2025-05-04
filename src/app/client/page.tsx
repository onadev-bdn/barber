"use client";
import { useState, useEffect } from "react";
import { ActionDrawer } from "@/components/custom/action-drawer";
import ProductCard from "@/components/custom/product-card";
import { ReservationPicker } from "@/components/custom/reservation-picker";
import DesktopDrawer from "@/components/custom/desktop-drawer";
import { useScreenSize } from "@/hooks/useScreenSize";
import TimeTable from "@/components/custom/timetable";
import DateStepper from "@/components/custom/date-stepper";
import { GeneralButton } from "@/components/custom/general-button";
import SectionDivider from "@/components/custom/section-divider";

// Enum para los tipos de servicio
enum ServiceType {
  HAIRCUT = "Corte de pelo",
  BEARD = "Barba",
  HAIRCUT_AND_BEARD = "Corte de pelo y barba",
}

export default function Client() {
  const { isMobile } = useScreenSize();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceType | null>(
    ServiceType.HAIRCUT
  );

  useEffect(() => {
    setIsDrawerOpen(!isMobile);
  }, [isMobile]);

  useEffect(() => {
    // solo bloquear scroll si Drawer móvil está abierto
    if (isMobile && isDrawerOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [isMobile, isDrawerOpen]);

  const handleProductClick = (service: ServiceType) => {
    if (isDrawerOpen && selectedService === service) {
      setIsDrawerOpen(false);
      setSelectedService(null);
    } else {
      setSelectedService(service);
      setIsDrawerOpen(true);
    }
  };

  return (
    <div className="flex items-start min-h-screen p-8 pt-20 pb-20 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex w-full gap-8 h-screen">
        <section className="flex flex-col gap-8 w-full md:w-1/3 max-h-screen pr-4 overflow-y-auto">
          <span className="font-bold text-3xl">¡Hola! 👋🏻</span>
          <ProductCard
            title={ServiceType.HAIRCUT}
            time={"30 minutos"}
            backgroundImage={
              "https://images.unsplash.com/photo-1593269233759-427ba69acca5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width="w-full"
            onClick={() => handleProductClick(ServiceType.HAIRCUT)}
            isSelected={selectedService === ServiceType.HAIRCUT}
          />
          <ProductCard
            title={ServiceType.BEARD}
            time={"30 minutos"}
            backgroundImage={
              "https://images.unsplash.com/photo-1596728325488-58c87691e9af?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width="w-full"
            onClick={() => handleProductClick(ServiceType.BEARD)}
            isSelected={selectedService === ServiceType.BEARD}
          />
          <ProductCard
            title={ServiceType.HAIRCUT_AND_BEARD}
            time={"1 hora"}
            backgroundImage={
              "https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            width="w-full"
            onClick={() => handleProductClick(ServiceType.HAIRCUT_AND_BEARD)}
            isSelected={selectedService === ServiceType.HAIRCUT_AND_BEARD}
          />

          {isMobile && (
            <div className="visible md:invisible w-full">
              <ActionDrawer
                isOpen={isDrawerOpen}
                onClose={() => setIsDrawerOpen(false)}
              >
                <h2 className="text-xl font-bold mb-4">{selectedService}</h2>
                <section className="flex flex-col gap-8">
                  <ReservationPicker />
                  <DateStepper initialDate={new Date()} />
                  <TimeTable />
                </section>
              </ActionDrawer>
            </div>
          )}
        </section>

        {!isMobile && (
          <section className="w-full md:w-2/3 bg-transparent p-6 overflow-y-hidden max-h-screen sticky top-20 rounded-lg shadow-md">
            <DesktopDrawer isOpen={isDrawerOpen}>
              <div className="p-4">
                <h2 className="text-xl font-bold mb-4">{selectedService}</h2>
                <section className="grid grid-cols-2 gap-20">
                  <section className="flex flex-col gap-8">
                    <ReservationPicker />
                    <DateStepper initialDate={new Date()} />
                    <TimeTable />
                  </section>
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
                        onClick={() => setIsDrawerOpen(false)}
                      >
                        Reservar cita
                      </GeneralButton>
                    </section>
                  </section>
                </section>
              </div>
            </DesktopDrawer>
          </section>
        )}
      </main>
    </div>
  );
}
