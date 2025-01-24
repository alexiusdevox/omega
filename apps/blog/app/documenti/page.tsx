import Link from "next/link";

export default function Documents() {
    return (
        <div className="documents max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <section id="hero" className="pt-40 pb-20">
                <div className="w-full sm:w-1/2">

                    <h1 className="hero-title mt-0 text-5xl md:text-5xl font-extrabold">Documenti</h1>
                    <p className="hero-paragraph mt-7">Un archivio centralizzato per consultare e scaricare file audio, video, dossier e molto altro.</p>
                </div>
            </section>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-zinc-700" />
            <section className="py-20">



                <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    <Link href="/documenti/documento">
                        <div className="bg-white dark:bg-black flex flex-col items-center p-6 border border-zinc-300 hover:border-zinc-600 dark:border-zinc-600 dark:hover:border-zinc-300 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 lucide lucide-folder fill-none"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z" /></svg>                        <p className="text-center text-zinc-400 font-medium pt-3">Progetto Gateway</p>
                        </div>
                    </Link>

                </div>





            </section>
        </div>
    )
}