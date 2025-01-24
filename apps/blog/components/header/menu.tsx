import Link from 'next/link';
import React, { useState } from 'react';
import { categories } from '../../app/lib/categories';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const menuItems = [
        { href: "/newsroom/ufo-documenti", text: "Ufologia e documenti ufficiali" },
        { href: "/newsroom/dossier", text: "Dossier riservati su argomenti di attualità" },
        { href: "/newsroom/geopolitica", text: "Geopolitica e notizie senza filtri" },
        { href: "/newsroom/paranormale", text: "Paranormale" },
        { href: "/newsroom/scienza", text: "Scienza e curiosità" },
        { href: "/newsroom/storia-tecnologia-illuminati", text: "Storia, tecnologia e Illuminati" }
    ];

    return (
        <div className="relative" role="none">
            {/* Desktop Menu */}
            <ul role="menubar" className="hidden xl:flex space-x-4">
                <li role="none" className="relative group">
                    <Link href="/newsroom"
                        role="menuitem"
                        aria-haspopup="true"
                        aria-expanded={isOpen}
                        aria-controls="desktop-submenu"
                        className="flex items-center text-left py-2 px-4 font-medium text-zinc-700 border-b border-zinc-100 hover:bg-zinc-50 hover:text-zinc-900 xl:hover:bg-transparent xl:border-0 xl:hover:text-primary-700 xl:p-0 dark:text-zinc-400 xl:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-zinc-700"
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        <span className="flex-1">Newsroom</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-down ml-2 h-4 w-4" aria-hidden="true">
                            <path d="m6 9 6 6 6-6"></path>
                        </svg>
                    </Link>
                    <div
                        id="desktop-submenu"
                        role="menu"
                        aria-label="Sottomenu Newsroom"
                        className={`py-1 border border-1 border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900 absolute left-0 top-8 mt-2 w-64 bg-slate-100 text-zinc-800 shadow-lg transition-all duration-300 ${isOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'}`}
                        onMouseEnter={() => setIsOpen(true)}
                        onMouseLeave={() => setIsOpen(false)}
                    >
                        <ul role="none">
                            {categories.map((category) => (
                                <li key={category.id}>
                                    <Link
                                        href={`/newsroom/${category.id}`}
                                        role="menuitem"
                                        className="text-black dark:text-white block px-4 py-2 hover:bg-zinc-200 dark:hover:bg-zinc-700"
                                        onClick={() => setIsOpen(false)} // Chiude il dropdown al click
                                    >
                                        {category.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>

                    </div>
                </li>
            </ul>

            {/* Mobile Menu */}
            <div className="xl:hidden" role="none">
                <button
                    role="menuitem"
                    aria-haspopup="true"
                    aria-expanded={isOpen}
                    aria-controls="mobile-submenu"
                    className="flex items-center w-full text-left py-2 pr-4 pl-3 text-zinc-700 border-b border-zinc-100 hover:bg-zinc-100 hover:text-zinc-900 xl:hover:bg-transparent xl:border-0 xl:hover:text-primary-700 xl:p-0 dark:text-zinc-400 xl:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-zinc-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <span className="flex-1">Newsroom</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`lucide lucide-chevron-down ml-2 h-4 w-4 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                    >
                        <path d="m6 9 6 6 6-6"></path>
                    </svg>
                </button>
                <div
                    id="mobile-submenu"
                    role="menu"
                    aria-label="Sottomenu mobile Newsroom"
                    className={`overflow-hidden max-h-0 transition-all duration-300 ${isOpen ? 'max-h-80' : ''}`}
                >
                    <ul role="none">
                        {categories.map((category) => (
                            <li key={category.id} className="mb-2">
                                <Link
                                    href={`/newsroom/category/${category.id}`}
                                    role="menuitem"

                                    className="block py-2 pr-4 pl-3 text-zinc-700 border-b border-zinc-100 hover:bg-zinc-100 hover:text-zinc-900 xl:hover:bg-transparent xl:border-0 xl:hover:text-primary-700 xl:p-0 dark:text-zinc-400 xl:dark:hover:text-white dark:hover:bg-zinc-700 dark:hover:text-white xl:dark:hover:bg-transparent dark:border-zinc-700"
                                >
                                    {category.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Menu;