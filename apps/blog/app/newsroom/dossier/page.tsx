"use client"
import Image from "next/image"
import { CalendarIcon, UserIcon, TagIcon } from "lucide-react"
// import { ShareButtons } from "./components/ShareButtons"

import { useState } from "react"
import { RightRail } from "../../../components/newsroom/rightRail"
import Article from "../../article"

export default function BlogPost() {
    const [comments, setComments] = useState([
        { id: 1, author: "John", content: "Commento n°1" },
        { id: 2, author: "james", content: "Commento n°2" },
    ])
    const [newComment, setNewComment] = useState("")

    const handleSubmitComment = (e: React.FormEvent) => {
        e.preventDefault()
        if (newComment.trim()) {
            setComments([...comments, { id: comments.length + 1, author: "Utente", content: newComment }])
            setNewComment("")
        }
    }

    const relatedArticles = [
        {
            title: "Machine Learning: Una Guida per Principianti",
            description: "Scopri i fondamenti del machine learning e come iniziare.",
            image: "/placeholder.svg?height=200&width=300",
            url: "#",
        },
        {
            title: "L'Impatto dell'IA sul Mercato del Lavoro",
            description: "Analisi delle trasformazioni nel mondo del lavoro dovute all'IA.",
            image: "/placeholder.svg?height=200&width=300",
            url: "#",
        },
        {
            title: "Etica e IA: Sfide e Soluzioni",
            description: "Esplorazione delle questioni etiche legate all'intelligenza artificiale.",
            image: "/placeholder.svg?height=200&width=300",
            url: "#",
        },
    ]

    return (
        <>
            <div className="pt-40 pb-20">
                {" "}
                {/* Aggiunto mt-16 per compensare l'altezza dell'header */}
                <div className="flex flex-col md:flex-row gap-8">
                    <article className="flex-grow">
                        <header className="mb-8">
                            <h1 className="text-4xl font-bold mb-2">Titolo</h1>
                            <div className="flex items-center text-gray-600 space-x-4">
                                <span className="flex items-center">
                                    <CalendarIcon className="w-4 h-4 mr-2" />
                                    15 Gennaio 2025
                                </span>
                            </div>
                        </header>

                        <Image
                            src="/placeholder.webp"
                            alt="Immagine rappresentativa dell'Intelligenza Artificiale"
                            width={800}
                            height={400}
                            className="mb-8"
                        />

                        <div className="prose prose-lg max-w-none mb-8">
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium nobis nihil ipsa aspernatur fugit hic expedita consequatur nam alias modi ipsum fugiat, mollitia nulla voluptatum aperiam quo saepe vitae voluptates.
                            </p>

                            <h2>Title</h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium nobis nihil ipsa aspernatur fugit hic expedita consequatur nam alias modi ipsum fugiat, mollitia nulla voluptatum aperiam quo saepe vitae voluptates.
                            </p>

                            <h2>Title</h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium nobis nihil ipsa aspernatur fugit hic expedita consequatur nam alias modi ipsum fugiat, mollitia nulla voluptatum aperiam quo saepe vitae voluptates.
                            </p>

                            <h2>Title</h2>
                            <p>
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium nobis nihil ipsa aspernatur fugit hic expedita consequatur nam alias modi ipsum fugiat, mollitia nulla voluptatum aperiam quo saepe vitae voluptates.
                            </p>
                        </div>

                        <footer className="mb-8 pt-4 border-t border-gray-200">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center space-x-2 text-sm text-gray-600">
                                    <TagIcon className="w-4 h-4" />
                                    <span>Tags:</span>
                                    <ul className="flex space-x-2">
                                        <li className="bg-gray-500 text-white px-2 py-1">U.A.P</li>
                                        <li className="bg-gray-500 text-white px-2 py-1">Avvistamenti</li>
                                        <li className="bg-gray-500 text-white px-2 py-1">File desecretati</li>
                                    </ul>
                                </div>
                                {/* <ShareButtons /> */}
                            </div>
                        </footer>

                        {/* Sezione Commenti */}
                        <section className="mt-8 mb-12">
                            <h2 className="text-2xl font-bold mb-4">Commenti</h2>
                            <ul className="space-y-4 mb-4">
                                {comments.map((comment) => (
                                    <li key={comment.id} className="bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 p-4">
                                        <p className="font-semibold">{comment.author}</p>
                                        <p>{comment.content}</p>
                                    </li>
                                ))}
                            </ul>
                            <form onSubmit={handleSubmitComment} className="space-y-2">
                                <textarea
                                    className="w-full p-4 border border-zinc-800 outline-none focus:border-zinc-900 dark:focus:border-zinc-700"
                                    placeholder="Scrivi un commento..."
                                    value={newComment}
                                    onChange={(e) => setNewComment(e.target.value)}
                                    rows={4}
                                />
                                <button type="submit" className="text-center bg-zinc-900 text-zinc-100 font-medium px-6 py-2 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-100 dark:text-zinc-900"                >Invia Commento</button>
                            </form>
                        </section>

                        {/* Articoli Correlati */}
                        <section className="mt-12">
                            <h2 className="text-2xl font-bold mb-6">Articoli che potrebbero interessarti</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <Article />                  <Article />
                                <Article />

                            </div>
                        </section>
                    </article>
                </div>
            </div>
        </>
    )
}

