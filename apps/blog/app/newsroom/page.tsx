import Link from "next/link";
import { categories } from "../lib/categories";
import Article from "../article";

export default function Newsroom() {

  return (
    <div className="newsroom">
      <section id="hero" className="pt-40 pb-20">
        <div className="w-full sm:w-1/2">
          <h1 className="hero-title mt-0 text-5xl md:text-5xl font-extrabold">Newsroom</h1>
          <p className="hero-paragraph mt-7">Qui troverai articoli, aggiornamenti, documenti e tanto altro.</p>
        </div>
      </section>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-zinc-700" />
      <section className="py-20">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start">
          <div className="hero-image md:w-1/3 mt-8 md:mt-0 flex justify-center md:mr-8">
            <img
              src="/placeholder.webp"
              alt="Hero Image"
              width={600}
              height={600}
            />
          </div>
          <div className="md:w-2/3">
            <h2 className="text-left mb-4 text-3xl md:text-4xl font-extrabold">
              Articolo in evidenzia
            </h2>
            <p className="my-4">
              Descrizione articolo in evidenzia
            </p>
            <Link
                  href="/ufo-documenti"
                  className="text-sm inline-flex items-center justify-center text-zinc-100 font-medium px-4 py-2 bg-transparent dark:bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700"
                >
                  Leggi di più

                </Link>
          </div>
        </div>
      </section>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-zinc-700" />
      <section className="py-20">
        <h2 className="text-left mb-10 text-3xl md:text-4xl font-extrabold">Categorie</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((category) => (
            <div key={category.id}>
              <Link
                href={`/newsroom/${category.id}`}
              >
                <article className="h-full p-4 bg-white border border-zinc-200 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-zinc-100 dark:bg-black transition-all">
                  <h3 className="mb-2 text-sm font-bold text-zinc-900 dark:text-zinc-100">{category.name}</h3>
                  <p className="text-sm text-zinc-800 dark:text-zinc-400">{category.description}</p>
                </article>
              </Link>
            </div>
          ))}
        </div>
      </section>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-zinc-700" />
      <section className="py-20">
        <h2 className="text-left mb-10 text-3xl md:text-4xl font-extrabold">Articoli in evidenza</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Article />
          <Article />
          <Article />

        </div>
      </section>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-zinc-700" />
      <section className="py-20">
        <h2 className="text-left mb-10 text-3xl md:text-4xl font-extrabold">Categorie</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {categories.map((category) => (
            <div key={category.id}>
              <Link
                href={`/newsroom/${category.id}`}
              >
                <article className="h-full p-4 bg-white border border-zinc-200 dark:border-zinc-700 hover:border-zinc-900 dark:hover:border-zinc-100 dark:bg-black transition-all">
                  <h3 className="mb-2 text-sm font-bold text-zinc-900 dark:text-zinc-100">{category.name}</h3>
                  <p className="text-sm text-zinc-800 dark:text-zinc-400">{category.description}</p>
                </article>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
