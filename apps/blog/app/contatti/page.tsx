import ContactForm from "../../components/contact/contactForm";

export default function Contact() {
    return (
        <div className="contact max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <section id="hero" className="py-40">
                <div className="flex flex-col md:flex-row items-center md:items-start">
                    <div className="hero-copy md:w-1/2">
                        <h1 className="hero-title mt-0 text-5xl md:text-5xl font-extrabold">
                            Contatti
                        </h1>
                        <p className="hero-paragraph mt-7">
                            Se desideri collaborare o inviarmi del materiale esclusivo, ti invito a compilare questo modulo.
                        </p>
                    </div>
                    <div className="hero-image md:w-1/2 mt-8 md:mt-0 flex justify-center">
                    <ContactForm />
                    </div>
                </div>
            </section>
        </div>
    );
}
