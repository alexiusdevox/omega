import Link from "next/link";

export default function Article() {
    return (
        <article className="overflow-visible relative group">
            <div className="border-[#e5e7eb] dark:border-[#353535] border bg-transparent relative transition-transform duration-300 group-hover:-translate-y-10">
                <img
                    src="/placeholder.webp"
                    alt="Article Image"
                    className="w-full h-48 object-cover"
                />
                <div className="p-4">
                    <h3 className="text-lg font-bold mb-2">Article Title 1</h3>
                    <p className="text-gray-600 dark:text-gray-300">This is a brief description of the article.</p>
                </div>
            </div>
            <Link href="#" className="dark:hover:border-zinc-100 transition-all block font-bold text-black bg-transparent dark:text-white p-4 text-center border border-[#e5e7eb] dark:border-[#353535]">
                Leggi di più
            </Link>
        </article>
    )
}