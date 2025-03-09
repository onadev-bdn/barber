import { format } from "date-fns";
import { es } from "date-fns/locale";

export const formatDate = (date: Date, dateFormat: string) =>
  format(date, dateFormat, { locale: es });
