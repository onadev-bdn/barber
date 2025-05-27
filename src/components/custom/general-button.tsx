import { Button } from "@/components/ui/button";
import { ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils"; // Asegúrate de tener esta utilidad

type GeneralButtonProps = ButtonProps;

const GeneralButton = ({
  className,
  children,
  ...props
}: GeneralButtonProps) => {
  return (
    <Button
      className={cn(
        "relative text-lg md:text-md h-16 md:h-12 justify-between md:justify-center",
        className
      )}
      size="lg"
      {...props}
    >
      {children}
    </Button>
  );
};

export default GeneralButton;
