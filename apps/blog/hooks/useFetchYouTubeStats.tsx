import { useState, useEffect } from "react";

type YouTubeStats = {
  subscribers: number;
  views: number;
  videos: number;
};

const useFetchYouTubeStats = () => {
  const [stats, setStats] = useState<YouTubeStats | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/api/youtubeStats");
        const data = await response.json();

        if (!response.ok) {
          throw new Error(data.message || "Errore nel recupero delle statistiche");
        }

        setStats(data);
        setError(null);
      } catch (err: unknown) {
        console.error("Errore nel fetching:", err);

        if (err instanceof Error) {
          setError(err.message || "Errore nel recupero delle statistiche");
        } else {
          setError("Errore sconosciuto");
        }

        setStats(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchStats();

    const interval = setInterval(fetchStats, 5 * 60 * 1000); // Aggiorna ogni 5 minuti
    return () => clearInterval(interval); // Pulisce l'intervallo
  }, []);

  return { stats, isLoading, error };
};

export default useFetchYouTubeStats;
