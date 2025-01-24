'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const phrases = [
  '404 - Pagina non trovata o articolo rimosso',
  '404 - Ti sei perso nel cyberspazio',
  '404 - Questa pagina è andata offline in un universo parallelo. Torna al quartier generale e riprova',
];

export default function NotFound() {
  const [text, setText] = useState(''); // Testo mostrato
  const [phraseIndex, setPhraseIndex] = useState(0); // Indice della frase corrente
  const [isDeleting, setIsDeleting] = useState(false); // Flag: stiamo cancellando il testo?
  const [delay, setDelay] = useState(150); // Ritardo dinamico per scrittura e cancellazione

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex]; // Frase attuale
    let timer: NodeJS.Timeout;

    // Funzione per aggiornare il testo
    const updateText = () => {
      if (!isDeleting) {
        // Scrittura del testo
        setText((prev) => (currentPhrase ? currentPhrase.slice(0, prev.length + 1) : ''));
        if (text === currentPhrase) {
          // Pausa dopo aver scritto completamente la frase
          setIsDeleting(true);
          setDelay(2000); // Pausa di 2 secondi
        } else {
          setDelay(150); // Velocità di scrittura
        }
      } else {
        // Cancellazione del testo
        setText((prev) => prev.slice(0, -1));
        if (text === '') {
          // Passa alla prossima frase
          setIsDeleting(false);
          setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
          setDelay(500); // Pausa breve prima di iniziare la prossima frase
        } else {
          setDelay(50); // Velocità di cancellazione
        }
      }
    };

    // Imposta un timer per aggiornare il testo
    timer = setTimeout(updateText, delay);

    // Pulisce il timer quando il componente viene smontato
    return () => clearTimeout(timer);
  }, [text, isDeleting, phraseIndex, delay]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-12">
          <span className="font-mono">{text}</span>
          <span className="animate-blink">|</span>
        </h1>
        <Link
          href="/"
          className="bg-zinc-900 text-zinc-100 font-medium px-6 py-3 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-100 dark:text-zinc-900"
        >
          Torna alla Home
        </Link>
      </div>
    </div>
  );
}

