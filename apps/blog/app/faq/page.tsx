import Link from "next/link";
import { Accordion } from "@repo/ui/accordion";

export default function Faq() {
    return (
        <div className="newsroom max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <section id="hero" className="pt-40 pb-20">
                <h1 className="hero-title mt-0 text-5xl md:text-5xl font-extrabold">Faq</h1>
                <p className="hero-paragraph mt-7">Un archivio unico per consultare e scaricare file audio, video, dossier e molto altro.</p>
            </section>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-zinc-700" />
            <section className="py-20">
                <Accordion items={[{ title: "Sample Title", content: "Sample Content" }]} />






            </section>
        </div>
    )
}
