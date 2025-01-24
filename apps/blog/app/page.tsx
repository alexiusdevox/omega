"use client"
import { OrbitControls, useFBO } from "@react-three/drei";
import { Canvas, useFrame, extend, createPortal } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

import Image from "next/image";

import SimulationMaterial from "./SimulationMaterial";

import vertexShader from "./vertexShader";
import fragmentShader from "./fragmentShader";
import Article from "./article";
import Slider from "../components/carousel";
import Link from "next/link";

extend({ SimulationMaterial });

declare global {
  namespace JSX {
    interface IntrinsicElements {
      simulationMaterial: any
    }
  }
}

const FBOParticles = () => {
  const size = 128;

  const points = useRef<THREE.Points>(null);
  const simulationMaterialRef = useRef<THREE.ShaderMaterial & { uniforms: { uTime: { value: number } } }>(null);

  const scene = useMemo(() => new THREE.Scene(), []);
  const camera = useMemo(
    () =>
      new THREE.OrthographicCamera(
        -1,
        1,
        1,
        -1,
        1 / Math.pow(2, 53),
        1
      ),
    []
  );

  const positions = useMemo(
    () =>
      new Float32Array([
        -1, -1, 0, 1, -1, 0, 1, 1, 0, -1, -1, 0, 1, 1, 0, -1, 1, 0,
      ]),
    []
  );

  const uvs = useMemo(
    () => new Float32Array([0, 1, 1, 1, 1, 0, 0, 1, 1, 0, 0, 0]),
    []
  );

  const renderTarget = useFBO(size, size, {
    minFilter: THREE.NearestFilter,
    magFilter: THREE.NearestFilter,
    format: THREE.RGBAFormat,
    stencilBuffer: false,
    type: THREE.FloatType,
  });

  const particlesPosition = useMemo(() => {
    const length = size * size;
    const particles = new Float32Array(length * 3);
    for (let i = 0; i < length; i++) {
      const i3 = i * 3;
      particles[i3] = (i % size) / size;
      particles[i3 + 1] = Math.floor(i / size) / size;
      particles[i3 + 2] = 0; // Z-coordinate is set to 0
    }
    return particles;
  }, [size]);

  const uniforms = useMemo(
    () => ({
      uPositions: { value: null },
    }),
    []
  );

  useFrame((state) => {
    const { gl, clock } = state;

    // Render the simulation to the FBO
    gl.setRenderTarget(renderTarget);
    gl.clear();
    gl.render(scene, camera);
    gl.setRenderTarget(null);

    // Pass the texture from the FBO to the particles
    if (points.current && points.current.material) {
      const material = points.current.material as THREE.ShaderMaterial; // Cast esplicito
      if (material.uniforms.uPositions) {
        material.uniforms.uPositions.value = renderTarget.texture;
      }
    }

    if (simulationMaterialRef.current) {
      simulationMaterialRef.current.uniforms.uTime.value = clock.elapsedTime;
    }
  });


  return (
    <>
      {createPortal(
        <mesh>
          <simulationMaterial ref={simulationMaterialRef} args={[size]} />
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[positions, 3]}
              count={positions.length / 3}
              array={positions}
              itemSize={3}
            />
            <bufferAttribute
              attach="attributes-uv"
              args={[uvs, 2]}
              count={uvs.length / 2}
            />
          </bufferGeometry>
        </mesh>,
        scene
      )}
      <points ref={points}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[particlesPosition, 3]}
            count={particlesPosition.length / 3}
            array={particlesPosition}
            itemSize={3}
          />
        </bufferGeometry>
        <shaderMaterial
          blending={THREE.AdditiveBlending}
          depthWrite={false}
          fragmentShader={fragmentShader}
          vertexShader={vertexShader}
          uniforms={uniforms}
        />
      </points>
    </>
  );
};

const Scene = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 xl:px-8">

      <section id="hero">
        <div className="hero-inner flex flex-col md:flex-row items-center justify-center md:items-center md:justify-between">
          <div className="hero-copy md:w-1/2">
            <h1 className="hero-title mt-0 text-5xl md:text-6xl font-extrabold">
              Esplora l'ignoto
            </h1>
            <p className="hero-paragraph mt-7">
              Un archivio per esplorare il mistero e la conoscenza.
            </p>
            <p>Benvenuti nel cuore della verità.</p>
            <div className="hero-cta mt-7">
              <a
                href="#"
                className="inline-flex items-center justify-center bg-zinc-900 text-zinc-100 font-medium px-6 py-3 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-100 dark:text-zinc-900"
              >
                Scopri di più
                <svg
                  className="w-5 h-5 ml-2 -mr-1"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="hero-image md:w-1/2 mt-8 md:mt-0">
            <div style={{ position: "relative", width: "100%", height: "100vh" }}>
              <Canvas
                camera={{ position: [1.5, 1.5, 2.5] }}
              >
                <ambientLight intensity={0.5} />
                <FBOParticles />
                <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
              </Canvas>
            </div>
          </div>
        </div>
      </section>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-zinc-700" />
      <section className="py-20" id="articles">
        <h2 className="text-center mb-12 text-3xl md:text-5xl font-extrabold">
          Ultime news
        </h2>
        <div className="container mx-auto p-4 max-w-screen-xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-12">
            <Article />
            <Article />
            <Article />
            <Article />
          </div>
        </div>
      </section>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-zinc-700" />





      <section id="forum" className="py-20">
        <div className="space-y-10 md:space-y-20">
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2">
              <h2 className="text-left mb-7 text-3xl md:text-5xl font-extrabold">
                Il tuo nuovo punto di riferimento online
              </h2>
              <p className="mt-7">
                Contenuti esclusivi pensati per informarti, stimolare la tua curiosità e offrirti una prospettiva diversa su temi di attualità e oltre.
              </p>
              <div className="mt-7">
                <Link
                  href="/newsroom"
                  className="inline-flex items-center justify-center text-zinc-100 font-medium px-6 py-3 bg-transparent dark:bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700"
                >
                  Esplora
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="hero-image md:w-2/2 mt-8 md:mt-0 flex justify-center md:ml-16">
              <img
                src="/placeholder.webp"
                alt="Hero Image"
                width={600}
                height={600}
              />
            </div>
          </div>
          <div className="flex flex-col-reverse md:flex-row items-center md:items-start">
            <div className="hero-image md:w-1/2 mt-8 md:mt-0 flex justify-center md:mr-16">
              <img
                src="/placeholder.webp"
                alt="Hero Image"
                width={600}
                height={600}
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-left mb-7 text-3xl md:text-5xl font-extrabold">
                Parla liberamente dello spazio e Oltre!
              </h2>
              <p className="mt-7">
                Un forum senza censura dove esplorare idee, scoprire nuove teorie e condividere il tuo punto di vista senza limiti.
              </p>
              <div className="mt-7">
                <Link
                  href="/documenti"
                  className="inline-flex items-center justify-center text-zinc-100 font-medium px-6 py-3 bg-transparent dark:bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700"
                >
                  Unisciti
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start">
            <div className="md:w-1/2">
              <h2 className="text-left mb-7 text-3xl md:text-5xl font-extrabold">
                Il tuo nuovo punto di riferimento online
              </h2>
              <p className="mt-7">
                Contenuti esclusivi pensati per informarti, stimolare la tua curiosità e offrirti una prospettiva diversa su temi di attualità e oltre.
              </p>
              <div className="mt-7">
                <Link
                  href="/forum"
                  className="inline-flex items-center justify-center text-zinc-100 font-medium px-6 py-3 bg-transparent dark:bg-transparent hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-900 dark:text-zinc-100 border border-zinc-200 dark:border-zinc-700"
                >
                  Scopri
                  <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </Link>
              </div>
            </div>
            <div className="hero-image md:w-2/2 mt-8 md:mt-0 flex justify-center md:ml-16">
              <img
                src="/placeholder.webp"
                alt="Hero Image"
                width={600}
                height={600}
              />
            </div>
          </div>
        </div>
      </section>
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-zinc-700" />



























      <section className="py-28" id="books">
        <h2 className="text-center mb-6 text-3xl md:text-5xl font-extrabold">
          Le mie perle
        </h2>
        <p className="text-center mt-6 mb-12">
          Tutti i miei pensieri e le scoperte più significative, raccolti nei miei libri.
        </p>
        <Slider />
      </section>
      <hr className="h-px bg-gray-200 border-0 dark:bg-zinc-700" />

      <section className="py-40" id="partners">
        <h2 className="text-center mb-20 text-3xl md:text-5xl font-extrabold">
          Collaborazioni e riconoscimenti
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <article className="bg-transparent border border-[#e5e7eb] dark:border-[#353535] p-4">
            <p className="italic mb-5">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eligendi suscipit soluta rerum tempore non cum, molestias dolor deserunt. Sint quo sequi, saepe modi debitis at animi odio? Quo, quidem!"</p>

            <div className="flex items-center space-x-2">
              <img className="rounded-full w-10" src="/CorradoMalangaMini.webp" alt="Corrado Malanga" />
              <h3>Corrado Malanga</h3>
            </div>
          </article>
          <article className="bg-transparent border border-[#e5e7eb] dark:border-[#353535] p-4">
            <p className="italic mb-5">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eligendi suscipit soluta rerum tempore non cum, molestias dolor deserunt. Sint quo sequi, saepe modi debitis at animi odio? Quo, quidem!"</p>
            <div className="flex items-center space-x-2">
              <img className="rounded-full w-10" src="/AviLoebMini.webp" alt="Avi Loeb" />
              {/* <Image
                              src="/AviLoebMini.webp"
                              alt="Avi Loeb"
                              width={10}
                              height={10}
                            /> */}
              <h3>Avi Loeb</h3>
            </div>
          </article>
          <article className="bg-transparent border border-[#e5e7eb] dark:border-[#353535] p-4">
            <p className="italic mb-5">"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus eligendi suscipit soluta rerum tempore non cum, molestias dolor deserunt. Sint quo sequi, saepe modi debitis at animi odio? Quo, quidem!"</p>

            <div className="flex items-center space-x-2">
              <img className="rounded-full w-10" src="/NickPopeMini.webp" alt="Nick Pope" />
              <span>Nick Pope</span>
            </div>
          </article>
        </div>
      </section>
      <hr className="h-px bg-gray-200 border-0 dark:bg-zinc-700" />
      <section className="py-28" id="newsletter">
        <h2 className="text-center mb-6 text-3xl md:text-5xl font-extrabold">
          Iscriviti alla mia newsletter
        </h2>
        <p className="text-center text-lg mb-8">
          Rimani aggiornato su ogni nuovo articolo. Sarai il primo a saperlo!
        </p>
        <div className="flex justify-center">
          <form action="#" method="POST" className="w-full max-w-lg">
            <div className="mb-4">
              <input
                type="email"
                id="email"
                name="email"
                required
                placeholder="La tua email"
                className="bg-zinc-100 dark:bg-zinc-900 w-full px-3 py-2 border border-zinc-200 dark:border-zinc-800 focus:outline-none focus:border-zinc-600 placeholder-zinc-500 dark:placeholder-zinc-400"
              />
            </div>
            <div className="flex mb-4">
              <input id="default-checkbox" type="checkbox" value="" className="cursor-pointer shrink-0 appearance-none bg-transparent m-0 text-current h-5 w-5 border border-zinc-900 dark:border-zinc-100 grid place-content-center checked:scale-100" />
              <label htmlFor="default-checkbox" className="ms-2 text-sm text-zinc-800 dark:text-zinc-400">Acconsento al trattamento dei miei dati personali al fine di ricevere una risposta al mio messaggio, come indicato nella <Link href="/privacy-policy" className="hover:underline hover:underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Privacy policy</Link></label>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="bg-zinc-900 text-zinc-100 font-medium px-4 py-2 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-100 dark:text-zinc-900 w-full"
              >
                Iscriviti
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Scene;