"use client";

import Link from 'next/link';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import toast from 'react-hot-toast';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const initialFormData: FormData = {
  name: '',
  email: '',
  message: ''
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Mostra un toast di caricamento
    const loadingToast = toast.loading('Invio in corso...');

    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Errore nell'invio del messaggio");
      }

      // Dismetti il toast di caricamento e mostra il successo
      toast.dismiss(loadingToast);
      toast.success('Messaggio inviato con successo!');

      // Reset form
      setFormData(initialFormData);
    } catch (error) {
      // Dismetti il toast di caricamento e mostra l'errore
      toast.dismiss(loadingToast);
      toast.error(
        error instanceof Error ? error.message : "Errore di rete. Riprova più tardi."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-lg mx-auto p-6 space-y-6 bg-white dark:bg-black border-[1px] border-zinc-200 dark:border-zinc-800">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label htmlFor="name" className="block text-sm font-medium text-zinc-900 dark:text-zinc-100">
            Nome
          </label>
          <input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            placeholder="Il tuo nome"
            className="bg-zinc-100 dark:bg-zinc-900 w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-zinc-600 placeholder-zinc-500 dark:placeholder-zinc-400"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm font-medium text-zinc-900 dark:text-zinc-100">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            placeholder="La tua email"
            className="bg-zinc-100 dark:bg-zinc-900 w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-zinc-600 placeholder-zinc-500 dark:placeholder-zinc-400"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="block text-sm font-medium text-zinc-900 dark:text-zinc-100">
            Messaggio
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            disabled={isSubmitting}
            placeholder="Il tuo messaggio"
            rows={4}
            className="min-h-32 bg-zinc-100 dark:bg-zinc-900 w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-zinc-600 placeholder-zinc-500 dark:placeholder-zinc-400"
          />
        </div>
        <div className="flex">
          <input id="default-checkbox" type="checkbox" value="" className="cursor-pointer shrink-0 appearance-none bg-transparent m-0 text-current h-5 w-5 border border-zinc-900 dark:border-zinc-100 grid place-content-center checked:scale-100" />
          <label htmlFor="default-checkbox" className="ms-2 text-sm text-zinc-800 dark:text-zinc-400">Acconsento al trattamento dei miei dati personali al fine di ricevere una risposta al mio messaggio, come indicato nella <Link href="/privacy-policy" className="hover:underline hover:underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Privacy policy</Link></label>
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-zinc-900 text-zinc-100 font-medium px-4 py-2 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-100 dark:text-zinc-900 w-full"
        >
          {isSubmitting ? 'Invio in corso...' : 'Invia'}
        </button>
      </form>
    </div>

  );
}