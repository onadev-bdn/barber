import React from 'react';
import { ServiceCard } from './service-card';

export enum ServiceType {
  HAIRCUT = "Corte de pelo",
  BEARD = "Barba",
  HAIRCUT_AND_BEARD = "Corte de pelo y barba",
}

interface ServiceListProps {
  onServiceSelect: (service: ServiceType) => void;
  selectedService: ServiceType | null;
}

export const ServiceList: React.FC<ServiceListProps> = ({
  onServiceSelect,
  selectedService,
}) => {
  const services = [
    {
      type: ServiceType.HAIRCUT,
      time: '30 minutos',
      image: 'https://images.unsplash.com/photo-1593269233759-427ba69acca5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      type: ServiceType.BEARD,
      time: '30 minutos',
      image: 'https://images.unsplash.com/photo-1596728325488-58c87691e9af?q=80&w=1473&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      type: ServiceType.HAIRCUT_AND_BEARD,
      time: '1 hora',
      image: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ];

  return (
    <>
      <span className="font-bold text-3xl">¡Hola! 👋🏻</span>
      {services.map((service) => (
        <ServiceCard
          key={service.type}
          title={service.type}
          time={service.time}
          backgroundImage={service.image}
          isSelected={selectedService === service.type}
          onClick={() => onServiceSelect(service.type)}
          width="w-full"
        />
      ))}
    </>
  );
};

export default ServiceList;
