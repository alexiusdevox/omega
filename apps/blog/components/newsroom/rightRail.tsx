"use client"
import Link from "next/link"
import { useState } from "react"

export function RightRail() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Implementa qui la logica per l'iscrizione alla newsletter
    console.log("Iscrizione newsletter:", email)
    setEmail("")
  }

  return (
    <aside className="md:sticky md:top-20 md:self-start">
      {" "}
      {/* Modificato top-20 per tener conto dell'header */}
      {/* Newsletter */}
      <div className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-700 p-4 mb-10">
        <h3 className="font-bold text-lg mb-2">Iscriviti alla Newsletter</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="La tua email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="text-sm mb-4 bg-zinc-100 dark:bg-zinc-900 w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-zinc-600 placeholder-zinc-500 dark:placeholder-zinc-400"
            required
          />
          <div className="flex mb-4">
            <input id="default-checkbox" type="checkbox" value="" className="cursor-pointer shrink-0 appearance-none bg-transparent m-0 text-current h-5 w-5 border border-zinc-900 dark:border-zinc-100 grid place-content-center checked:scale-100" />
            <label htmlFor="default-checkbox" className="ms-2 text-sm text-zinc-800 dark:text-zinc-400">Acconsento al trattamento dei miei dati personali.</label>
          </div>
          <button type="submit" className="text-sm bg-zinc-900 text-zinc-100 font-medium px-4 py-2 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-100 dark:text-zinc-900 w-full">
            Iscriviti
          </button>
        </form>
      </div>
      {/* Video YouTube */}
      <div className="mb-10">
        <h3 className="font-bold text-lg mb-2">Video in Evidenza</h3>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/DXEeOyBga_Q"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      </div>
      {/* Articoli Recenti */}
      <div className="mb-10">
        <h3 className="font-bold text-lg mb-2">Articoli Recenti</h3>
        <ul className="space-y-2">
          <li>
            <a href="#" className="text-zinc-700 hover:underline hover:text-zinc-900 dark:text-zinc-400 hover:dark:text-zinc-100">
              Intelligenza artificiale
            </a>
          </li>
          <li>
            <a href="#" className="text-zinc-700 hover:underline hover:text-zinc-900 dark:text-zinc-400 hover:dark:text-zinc-100">
              Machine Learning per principianti
            </a>
          </li>
          <li>
            <a href="#" className="text-zinc-700 hover:underline hover:text-zinc-900 dark:text-zinc-400 hover:dark:text-zinc-100">
              Etica e IA: un dibattito aperto
            </a>
          </li>
        </ul>
      </div>
    </aside>
  )
}