"use client";

import { AnimatedCounter } from "./animatedCounter";
import useFetchYouTubeStats from "../../hooks/useFetchYouTubeStats";

export default function YouTubeStats() {
  const { stats, isLoading, error } = useFetchYouTubeStats();

  if (isLoading) {
    return <div className="w-full max-w-4xl mx-auto p-4 text-center text-gray-500">Caricamento statistiche...</div>;
  }

  if (error) {
    return <div className="w-full max-w-4xl mx-auto p-4 text-center text-red-500">Errore: {error}</div>;
  }

  const statsData = [
    { value: stats?.subscribers ?? 0, label: "Iscritti" },
    { value: stats?.views ?? 0, label: "Visualizzazioni totali" },
    { value: stats?.videos ?? 0, label: "Video pubblicati" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {statsData.map(({ label, value }) => (
        <article key={label} className="p-6 text-center">
          <h3 className="text-2xl font-bold mb-2">
            <AnimatedCounter end={value} duration={2000} />
          </h3>
          <p className="text-muted-foreground">{label}</p>
        </article>
      ))}
    </div>
  );
}

