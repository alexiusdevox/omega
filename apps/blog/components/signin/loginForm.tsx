"use client"

import { useState } from "react"
import Link from "next/link"

export function LoginForm() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [rememberMe, setRememberMe] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      // Qui andrà la logica di autenticazione
      console.log({ email, password, rememberMe })
      await new Promise((resolve) => setTimeout(resolve, 1000)) // Simula una richiesta di rete
      // Se l'autenticazione ha successo, reindirizza l'utente
      // router.push('/dashboard')
    } catch (error) {
      setError("Si è verificato un errore durante l'accesso. Riprova.")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="login-form">
      <div className="w-full max-w-sm mx-auto p-6 space-y-2 bg-white dark:bg-black border-[1px] border-zinc-200 dark:border-zinc-800">
        <h1 className="font-medium text-2xl">Accedi</h1>
        <p className="text-zinc-800 dark:text-zinc-400">Inserisci le tue credenziali per accedere.</p>
        <form onSubmit={handleSubmit} className="space-y-4 pt-6">
          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="La tua email"
              className="bg-zinc-100 dark:bg-zinc-900 w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-zinc-600 placeholder-zinc-500 dark:placeholder-zinc-400"
            />
            <label htmlFor="password" className="block text-sm font-medium text-zinc-900 dark:text-zinc-100">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="La tua password"
              className="bg-zinc-100 dark:bg-zinc-900 w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-zinc-600 placeholder-zinc-500 dark:placeholder-zinc-400"
            />
          </div>
          <div className="text-sm">
            <Link href="/password-reset" className="text-zinc-400 hover:underline hover:underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Password dimenticata?
            </Link>
          </div>



          <div className="flex pt-1">
            <input id="rememberMe" type="checkbox" checked={rememberMe} onChange={(e) => setRememberMe(e.target.checked)} className="cursor-pointer shrink-0 appearance-none bg-transparent m-0 text-current h-5 w-5 border border-zinc-900 dark:border-zinc-100 grid place-content-center checked:scale-100" />
            <label htmlFor="rememberMe" className="ms-2 text-sm text-zinc-800 dark:text-zinc-400">Rimani connesso</label>
          </div>
          {error && (
            <div className="text-red-600 text-sm" role="alert">
              {error}
            </div>
          )}
          <button
            type="submit"
            className={`bg-zinc-900 text-zinc-100 font-medium px-4 py-2 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-100 dark:text-zinc-900 w-full ${isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            disabled={isLoading}
          >
            {isLoading ? "Accesso in corso..." : "Accedi"}
          </button>
          <div className="text-center text-sm">
            <span className="text-zinc-400">Non hai un account? </span>
            <Link href="/registrazione" className="text-zinc-400 hover:underline hover:underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">
              Registrati
            </Link>
          </div>
        </form>
      </div>
    </div>
  )
}