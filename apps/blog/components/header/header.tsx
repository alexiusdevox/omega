"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Menu from "./menu";
import Link from "next/link";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    // Funzione per gestire l'apertura/chiusura del menu
    const toggleMenu = () => {
        setIsMenuOpen((prevState) => !prevState);
    };

    // Chiudi il menu quando cambia il pathname (cambio pagina)
    useEffect(() => {
        setIsMenuOpen(false);
    }, [pathname]);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.classList.add("menu-open");
        } else {
            document.body.classList.remove("menu-open");
        }

        return () => {
            document.body.classList.remove("menu-open");
        };
    }, [isMenuOpen]);

    useEffect(() => {
        const handleResize = () => {
            // Chiudi il menu se la larghezza della finestra supera 1024px (desktop)
            if (window.innerWidth >= 1024 && isMenuOpen) {
                setIsMenuOpen(false);
            }
        };

        // Aggiungi listener per l'evento resize
        window.addEventListener("resize", handleResize);

        // Cleanup quando il componente viene smontato
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, [isMenuOpen]);

    return (
        <header className="border-b border-zinc-200 dark:border-zinc-700 fixed top-0 left-0 right-0 z-50 w-full z-50 backdrop-blur bg-white bg-opacity-75 dark:bg-opacity-75 dark:bg-black">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 xl:px-8">
                <nav
                    className="flex justify-between items-center py-2.5"
                    aria-label="Menu principale"
                >
                    <div className="flex items-center space-x-8">
                        <Link
                            href="/"
                            className="flex items-center"
                            aria-current="page"
                        >
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                                Omega Click World
                            </span>
                        </Link>

                        {/* Menu principale visibile solo su desktop */}
                        <ul className="hidden xl:flex gap-8">
                            <li>
                                <Link
                                    href="/chi-sono"
                                    className="font-medium block py-2 pr-4 pl-3 text-zinc-700 border-b border-zinc-100 hover:bg-zinc-100 hover:text-zinc-900 xl:hover:bg-transparent xl:border-0 xl:hover:text-primary-700 xl:p-0 dark:text-zinc-400 xl:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-zinc-700"
                                >
                                    Chi sono
                                </Link>
                            </li>
                            <Menu />
                            <li>
                                <Link
                                    href="/documenti"
                                    className="font-medium block py-2 pr-4 pl-3 text-zinc-700 border-b border-zinc-100 hover:bg-zinc-100 hover:text-zinc-900 xl:hover:bg-transparent xl:border-0 xl:hover:text-primary-700 xl:p-0 dark:text-zinc-400 xl:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-zinc-700"
                                >
                                    Documenti
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/forum"
                                    className="font-medium block py-2 pr-4 pl-3 text-zinc-700 border-b border-zinc-100 hover:bg-zinc-100 hover:text-zinc-900 xl:hover:bg-transparent xl:border-0 xl:hover:text-primary-700 xl:p-0 dark:text-zinc-400 xl:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-zinc-700"
                                >
                                    Forum
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contatti"
                                    className="font-medium block py-2 pr-4 pl-3 text-zinc-700 border-b border-zinc-100 hover:bg-zinc-100 hover:text-zinc-900 xl:hover:bg-transparent xl:border-0 xl:hover:text-primary-700 xl:p-0 dark:text-zinc-400 xl:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-zinc-700"
                                >
                                    Contatti
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Pulsanti Accedi e Registrati */}
                    <div className="flex space-x-4 items-center">
                        <form action="/search" method="GET" className="hidden md:block">
                            <fieldset>
                                <input
                                    type="text"
                                    placeholder="Cerca..."
                                    className="md:w-[350px] xl:w-max outline-none border border-zinc-300 focus:border-zinc-500 dark:border-zinc-800 focus:dark:border-zinc-600 bg-zinc-100 dark:bg-zinc-900 text-sm p-2.5 placeholder-zinc-500 dark:placeholder-zinc-400 dark:text-white"
                                />
                            </fieldset>
                        </form>
                        <ul className="hidden xl:flex gap-2">
                            <li>
                                <Link
                                    href="/accedi"
                                    className="text-zinc-800 dark:text-white hover:bg-zinc-50 font-medium text-sm px-4 py-2 dark:hover:bg-zinc-900 border border-zinc-300 dark:border-zinc-800"
                                >
                                    Accedi
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/registrati"
                                    className="bg-zinc-900 text-zinc-100 font-medium text-sm px-4 py-2 hover:bg-zinc-800 dark:bg-zinc-100 dark:hover:bg-zinc-100 dark:text-zinc-900"
                                >
                                    Registrati
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Pulsante menu per mobile */}
                    <div className="flex items-center xl:hidden gap-2">
                        <Link href="account" title="Apri account"
                            className="inline-flex items-center p-2 ml-1 text-sm text-zinc-500 hover:bg-zinc-100 focus:ring-2 focus:ring-zinc-200 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:focus:ring-zinc-600"
                        >
                            <span className="sr-only">Open account</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 lucide lucide-user" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                        </Link>
                        <button
                            type="button"
                            className="xl:hidden p-2 text-zinc-500 hover:bg-zinc-100 dark:hover:bg-zinc-700"
                            aria-controls="mobile-menu"
                            aria-expanded={isMenuOpen ? "true" : "false"}
                            onClick={toggleMenu}
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`w-6 h-6 ${isMenuOpen ? "hidden" : "block"}`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="4" y1="6" x2="20" y2="6" />
                                <line x1="4" y1="12" x2="20" y2="12" />
                                <line x1="4" y1="18" x2="20" y2="18" />
                            </svg>
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className={`w-6 h-6 ${isMenuOpen ? "block" : "hidden"}`}
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M18 6L6 18" />
                                <path d="M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </nav>
                <nav aria-label="Menu principale"
                    className={`${isMenuOpen ? "opacity-100 h-[100vh]" : "h-0 opacity-0"} transition-all duration-300 ease-in-out overflow-hidden xl:overflow-visible justify-between items-center w-full xl:flex xl:w-auto xl:order-1 xl:opacity-100 xl:max-h-96 xl:hidden transition-all duration-300 ease-in-out`}
                    id="mobile-menu-2"
                >
                    <form action="/search" method="GET" className="px-3 py-3 md:hidden">
                        <fieldset>
                            <input
                                type="text"
                                name="query"
                                placeholder="Cerca..."
                                className="w-full outline-none border border-zinc-300 focus:border-zinc-500 dark:border-zinc-800 focus:dark:border-zinc-600 bg-zinc-100 dark:bg-zinc-900 text-sm p-2.5 placeholder-zinc-500 dark:placeholder-zinc-400 dark:text-white"
                            />
                        </fieldset>
                    </form>
                    <ul role="menu" className="flex flex-col font-medium mt-3 xl:flex-row xl:space-x-8 xl:mt-0">
                        <li role="menuitem">
                            <Link
                                href="/chi-sono"
                                className="block py-2 pr-4 pl-3 text-zinc-700 border-b border-zinc-100 hover:bg-zinc-100 hover:text-zinc-900 xl:hover:bg-transparent xl:border-0 xl:hover:text-primary-700 xl:p-0 dark:text-zinc-400 xl:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-zinc-700"
                            >
                                Chi sono
                            </Link>
                        </li>
                        <Menu />
                        <li role="menuitem">
                            <Link
                                href="/documenti"
                                className="block py-2 pr-4 pl-3 text-zinc-700 border-b border-zinc-100 hover:bg-zinc-100 hover:text-zinc-900 xl:hover:bg-transparent xl:border-0 xl:hover:text-primary-700 xl:p-0 dark:text-zinc-400 xl:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-zinc-700"
                            >
                                Documenti
                            </Link>
                        </li>
                        <li role="menuitem">
                            <Link
                                href="/forum"
                                className="block py-2 pr-4 pl-3 text-zinc-700 border-b border-zinc-100 hover:bg-zinc-100 hover:text-zinc-900 xl:hover:bg-transparent xl:border-0 xl:hover:text-primary-700 xl:p-0 dark:text-zinc-400 xl:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-zinc-700"
                            >
                                Forum
                            </Link>
                        </li>
                        <li role="menuitem">
                            <Link
                                href="/contatti"
                                className="block py-2 pr-4 pl-3 text-zinc-700 border-b border-zinc-100 hover:bg-zinc-100 hover:text-zinc-900 xl:hover:bg-transparent xl:border-0 xl:hover:text-primary-700 xl:p-0 dark:text-zinc-400 xl:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-zinc-700"
                            >
                                Contatti
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
