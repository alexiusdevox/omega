import { Button } from "@repo/ui/button"


export default function PasswordReset() {
    return (
        <div className="password-reset py-60">

            <div className="w-full max-w-sm mx-auto p-6 space-y-2 bg-white dark:bg-black border-[1px] border-zinc-200 dark:border-zinc-800">
                <h1 className="font-medium text-2xl">Reimposta password</h1>
                <p className="text-zinc-800 dark:text-zinc-400">Inserisci la tua email per reimpostare la password.</p>
                <form className="space-y-4 pt-6">
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-zinc-900 dark:text-zinc-100">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            placeholder="La tua email"
                            className="bg-zinc-100 dark:bg-zinc-900 w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-zinc-600 placeholder-zinc-500 dark:placeholder-zinc-400"
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-zinc-900 text-zinc-100 font-medium px-4 py-2 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-100 dark:text-zinc-900 w-full"
                    >
                        Invia link di reset
                    </button>
                </form>
            </div>
        </div>
    )
}