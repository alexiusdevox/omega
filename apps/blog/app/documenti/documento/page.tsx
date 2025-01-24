import Link from "next/link";

export default function Document() {
    return (
        <div className="documents max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <section id="hero" className="pt-40 pb-20">
                <div className="w-full sm:w-1/2">
                    <h1 className="hero-title mt-0 text-4xl md:text-5xl font-extrabold">
                        Progetto Gateway
                    </h1>
                    <p className="hero-paragraph mt-7">
                        Documento che esplora l'uso delle onde cerebrali e tecniche di meditazione avanzate per alterare lo stato di coscienza.</p>
                </div>
            </section >
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-zinc-700" />
            <section className="py-20">
                <div className="grid gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                    <Link href="">
                        <div className="bg-white dark:bg-black flex flex-col items-center p-6 border border-zinc-300 hover:border-zinc-600 dark:border-zinc-600 dark:hover:border-zinc-300 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-black dark:fill-white h-12 w-12"><path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" /></svg>
                            <p className="text-center text-zinc-400 font-medium pt-3">File PDF</p>
                        </div>
                    </Link>
                    <Link href="">
                        <div className="bg-white dark:bg-black flex flex-col items-center p-6 border border-zinc-300 hover:border-zinc-600 dark:border-zinc-600 dark:hover:border-zinc-300 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" className="fill-black dark:fill-white h-12 w-12"><path d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" /></svg>                            <p className="text-center text-zinc-400 font-medium pt-3">File video</p>
                        </div>
                    </Link>
                    <Link href="">
                        <div className="bg-white dark:bg-black flex flex-col items-center p-6 border border-zinc-300 hover:border-zinc-600 dark:border-zinc-600 dark:hover:border-zinc-300 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-black dark:fill-white h-12 w-12"><path d="M256 80C149.9 80 62.4 159.4 49.6 262c9.4-3.8 19.6-6 30.4-6c26.5 0 48 21.5 48 48l0 128c0 26.5-21.5 48-48 48c-44.2 0-80-35.8-80-80l0-16 0-48 0-48C0 146.6 114.6 32 256 32s256 114.6 256 256l0 48 0 48 0 16c0 44.2-35.8 80-80 80c-26.5 0-48-21.5-48-48l0-128c0-26.5 21.5-48 48-48c10.8 0 21 2.1 30.4 6C449.6 159.4 362.1 80 256 80z" /></svg>
                            <p className="text-center text-zinc-400 font-medium pt-3">File audio</p>
                        </div>
                    </Link>
                    <Link href="">
                        <div className="bg-white dark:bg-black flex flex-col items-center p-6 border border-zinc-300 hover:border-zinc-600 dark:border-zinc-600 dark:hover:border-zinc-300 transition-all">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-black dark:fill-white h-12 w-12"><path d="M0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64l0 320c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 96zM323.8 202.5c-4.5-6.6-11.9-10.5-19.8-10.5s-15.4 3.9-19.8 10.5l-87 127.6L170.7 297c-4.6-5.7-11.5-9-18.7-9s-14.2 3.3-18.7 9l-64 80c-5.8 7.2-6.9 17.1-2.9 25.4s12.4 13.6 21.6 13.6l96 0 32 0 208 0c8.9 0 17.1-4.9 21.2-12.8s3.6-17.4-1.4-24.7l-120-176zM112 192a48 48 0 1 0 0-96 48 48 0 1 0 0 96z" /></svg>
                            <p className="text-center text-zinc-400 font-medium pt-3">File immagine</p>
                        </div>
                    </Link>
                </div>
            </section>
        </div >
    )
}