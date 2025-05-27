import React from 'react';
import { Card, CardContent } from '../ui/card';

interface ServiceCardProps {
  title: string;
  time: string;
  backgroundImage: string;
  isSelected: boolean;
  onClick: () => void;
  width?: string;
  height?: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  time,
  backgroundImage,
  isSelected,
  onClick,
  width = 'w-full',
  height = 'h-40',
}) => {
  return (
    <Card
    className={`relative ${height} ${width} rounded-2xl overflow-hidden shadow-lg transform transition duration-300 hover:scale-105 origin-center ${
      isSelected ? "border-2 border-primary" : ""
    }`}
    onClick={onClick}
  >
    <div
      className="absolute inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    />
    <CardContent className="absolute bottom-0 left-0 bg-black bg-opacity-50 text-white p-4 w-full h-full flex flex-col justify-end">
      <p className="text-lg font-bold">{title}</p>
      <p className="text-sm">{time}</p>
    </CardContent>
  </Card>
  );
};

export default ServiceCard;
