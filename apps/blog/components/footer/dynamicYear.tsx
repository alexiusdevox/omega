import { useEffect, useState } from "react";

const DynamicYear: React.FC = () => {
  const [currentYear, setCurrentYear] = useState<number>(new Date().getFullYear());

  useEffect(() => {
    // Funzione per aggiornare l'anno
    const updateYear = () => {
      const now = new Date();
      setCurrentYear(now.getFullYear());
    };

    // Aggiorna all'inizio del nuovo anno
    const intervalId = setInterval(updateYear, 1000 * 60 * 60 * 24); // Controlla ogni giorno

    // Pulizia al termine del componente
    return () => clearInterval(intervalId);
  }, []);

  return (
    <span>
      {currentYear}
    </span>
  );
};

export default DynamicYear;
