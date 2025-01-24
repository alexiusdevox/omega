import Link from "next/link";
import { AnimatedCounter } from "../../components/about/animatedCounter";
import YouTubeStats from "../../components/about/youtubeStats";
import Image, { ImageProps } from "next/image";







type Props = Omit<ImageProps, "src"> & {
  srcLight: string;
  srcDark: string;
};

const ThemeImage = (props: Props) => {
  const { srcLight, srcDark, ...rest } = props;

  return (
    <>
      <Image {...rest} src={srcLight} className="imgLight" />
      <Image {...rest} src={srcDark} className="imgDark" />
    </>
  );
};



export default function About() {
  return (
    <div className="about">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 xl:px-8">
        <section id="hero" className="pt-40 py-20">
          <div className="hero-inner flex flex-col md:flex-row items-center md:items-start">
            <div className="hero-copy md:w-1/2">
              <h1 className="hero-title mt-0 text-4xl md:text-5xl font-extrabold">
                Chi sono
              </h1>
              <p className="hero-paragraph mt-7">
                Divulgatore appassionato di scienza, tecnologia e misteri.</p>
              <p className="mt-5">Il mio obiettivo è educare e portare alla luce informazioni che spesso rimangono nell’ombra, condividendo fonti e dati.</p>
            </div>
            <div className="hero-image md:w-1/2 mt-12 md:mt-0 flex justify-center select-none pointer-events-none">
              <ThemeImage
                className="logo dark:invert"
                srcLight="mask-guy-fawkes-dark.svg"
                srcDark="mask-guy-fawkes-light.svg"
                alt="Turborepo logo"
                width={250}
                height={250}
                priority
              />
            </div>
          </div>
        </section>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-zinc-700" />



        <section id="story1" className="py-20">
          <div className="hero-inner flex flex-col-reverse md:flex-row items-center">
            <div className="hero-image md:w-1/2 mt-12 md:mt-0 flex justify-center select-none pointer-events-none">
              <Image
                src="/placeholder.webp"
                alt="Omega Click "
                width={500}
                height={500}
              />
            </div>
            <div className="hero-copy md:w-1/2">
              <h2 className="hero-title mt-0 text-3xl md:text-4xl font-extrabold">
                Le mie origini
              </h2>
              <p className="mt-7">
                Tutto è partito come un gioco nel 2018, scatenato da un mix di curiosità e dalla scoperta casuale di una maschera durante la ricerca di un cavo HDMI. Questa maschera è diventata centrale per la persona anonima "Omega".</p>
            </div>
          </div>
        </section>


        <section id="story2" className="py-20">
          <div className="story2-inner flex flex-col md:flex-row items-center">
            <div className="story2-copy md:w-1/2">
              <h1 className="story2-title mt-0 text-3xl md:text-4xl font-extrabold">
                Credibilità significa fatti, non apparenze
              </h1>
              <p className="story2-paragraph mt-7">
                Ho avuto il privilegio di ospitare esperti di rilievo nel campo dell'ufologia, tra cui Avi Loeb, professore di Harvard, Nick Pope, ex funzionario del governo britannico, e Corrado Malanga, ricercatore specializzato in abduction extraterrestri. Inoltre, The Black Vault ha riconosciuto il mio contributo nell'ospitare e archiviare i documenti ufficiali del Cile nel loro archivio.
              </p>
            </div>
            <div className="story2-image md:w-1/2 mt-12 md:mt-0 flex justify-center select-none pointer-events-none">
              <Image
                src="/placeholder.webp"
                alt="Omega Click Chi sono"
                width={500}
                height={500}
              />
            </div>
          </div>
        </section>

        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-zinc-700" />
        <section id="youtube-stats" className="py-20">
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">I miei risultati</h2>
          <YouTubeStats />
        </section>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-zinc-700" />





        <section id="mission" className="py-20">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2">
              <h1 className="mt-0 text-3xl md:text-4xl font-extrabold">
                La mia missione
              </h1>
              <p className="mt-7">
                La mia missione è quella di cercare risposte che spesso vengono tenute nascoste, promuovendo una cultura di libera informazione. Voglio costruire una comunità consapevole, pronta a cercare la verità in ogni angolo, senza paura di sfidare l'ignoto.

              </p>
            </div>
            <div className="hero-image md:w-1/2 mt-8 md:mt-0 flex justify-center">
              <Image
                src="/placeholder.webp"
                alt="Hero Image"
                width={400}
                height={400}
                className="rounded"
              />

            </div>
          </div>
        </section>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-zinc-700" />

        <section className="py-28" id="newsletter">
        <h2 className="text-center mb-6 text-3xl md:text-5xl font-extrabold">
          Apri i confini della conoscenza
        </h2>
        <p className="text-center text-lg mb-8">
        Articoli esclusivi su scienza, tecnologia e misteri che sfidano ciò che pensiamo di sapere.
        </p>

            <div className="flex justify-center">
              <Link href="/newsroom"
                type="submit"
                className="text-center bg-zinc-900 text-zinc-100 font-medium px-6 py-2 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-100 dark:text-zinc-900"
              >
                Esplora
              </Link>
            </div>
      </section>
      </div>
    </div>
  );
}
