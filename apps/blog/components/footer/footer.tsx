"use client"

import Link from "next/link"
import DynamicYear from "./dynamicYear"

export default function Footer() {
    return (
        <footer className="bg-white dark:bg-black text-zinc-100 py-8 border-t-[1px] border-zinc-200 dark:border-zinc-700">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
                {/* Main footer content */}
                <div className="grid grid-cols-1 py-4 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand section */}
                    <div className="space-y-4">
                        <h3 className="text-zinc-900 dark:text-zinc-100 text-xl font-bold">Omega Click</h3>
                        <p className="text-zinc-600 dark:text-zinc-400">
                            Libero pensatore dal 2018.
                        </p>
                    </div>

                    {/* Latest articles section */}
                    <div className="space-y-4">
                        <h3 className="text-zinc-900 dark:text-zinc-100 text-xl font-bold">Ultimi articoli</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:underline-offset-4 text-zinc-600 hover:underline hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">Articolo 1</Link></li>
                            <li><Link href="#" className="hover:underline-offset-4 text-zinc-600 hover:underline hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">Articolo 2</Link></li>
                            <li><Link href="#" className="hover:underline-offset-4 text-zinc-600 hover:underline hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">Articolo 3</Link></li>
                            <li><Link href="#" className="hover:underline-offset-4 text-zinc-600 hover:underline hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">Articolo 4</Link></li>
                            <li><Link href="#" className="hover:underline-offset-4 text-zinc-600 hover:underline hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">Articolo 5</Link></li>
                        </ul>
                    </div>

                    {/* Categories section */}
                    <div className="space-y-4">
                        <h3 className="text-zinc-900 dark:text-zinc-100 text-xl font-bold">Link veloci</h3>
                        <ul className="space-y-2">
                        {/* <li><Link href="/faq" className="hover:underline-offset-4 text-zinc-600 hover:underline hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">FAQ</Link></li> */}
                        <li><Link href="#" className="hover:underline-offset-4 text-zinc-600 hover:underline hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">Sitemap</Link></li>
                        </ul>
                    </div>

                    {/* Latest articles section */}
                    <div className="space-y-4">
                        <h3 className="text-zinc-900 dark:text-zinc-100 text-xl font-bold">Informazioni legali</h3>
                        <ul className="space-y-2">
                            <li><Link href="#" className="hover:underline-offset-4 text-zinc-600 hover:underline hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">Privacy Policy</Link></li>
                            <li><Link href="#" className="hover:underline-offset-4 text-zinc-600 hover:underline hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">Cookie Policy</Link></li>
                            <li><Link href="#" className="hover:underline-offset-4 text-zinc-600 hover:underline hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">Termini & Condizioni</Link></li>
                        </ul>
                    </div>
                </div>

                {/* Bottom section with copyright and social icons */}
                <div className="border-t border-zinc-200 dark:border-zinc-800 pt-8">
                    <div className="flex flex-col-reverse md:flex-row md:items-center justify-between gap-4">
                        {/* Copyright text */}
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                            Made with 🩵 by <Link href="https://alexius.dev" target="_blank" className="hover:underline hover:underline-offset-4 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Alexius Devox</Link>
                        </p>

                        {/* Copyright notice */}
                        <p className="text-zinc-600 dark:text-zinc-400 text-sm">
                            &copy; <DynamicYear /> Omega Click World. Tutti i diritti riservati.
                        </p>

                        {/* Social icons */}
                        <ul className="flex items-center gap-5">
                            <li>
                                <Link href="https://www.instagram.com/omega_click/" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors" title="Instagram" aria-label="Icon Instagram" target="_blank">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" /></svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://x.com/OmegaClickOffi1" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors" title="𝕏" aria-label="Icon X" target="_blank">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" /></svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.youtube.com/@OmegaClick" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors" title="YouTube" aria-label="Icon YouTube" target="_blank">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 576 512"><path d="M549.7 124.1c-6.3-23.7-24.8-42.3-48.3-48.6C458.8 64 288 64 288 64S117.2 64 74.6 75.5c-23.5 6.3-42 24.9-48.3 48.6-11.4 42.9-11.4 132.3-11.4 132.3s0 89.4 11.4 132.3c6.3 23.7 24.8 41.5 48.3 47.8C117.2 448 288 448 288 448s170.8 0 213.4-11.5c23.5-6.3 42-24.2 48.3-47.8 11.4-42.9 11.4-132.3 11.4-132.3s0-89.4-11.4-132.3zm-317.5 213.5V175.2l142.7 81.2-142.7 81.2z" /></svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.tiktok.com/@omegaclickofficial6" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors" title="TikTok" aria-label="Icon TikTok">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512"><path d="M448 209.9a210.1 210.1 0 0 1 -122.8-39.3V349.4A162.6 162.6 0 1 1 185 188.3V278.2a74.6 74.6 0 1 0 52.2 71.2V0l88 0a121.2 121.2 0 0 0 1.9 22.2h0A122.2 122.2 0 0 0 381 102.4a121.4 121.4 0 0 0 67 20.1z" /></svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.threads.net/@omega_click" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors" title="Threads" target="_blank" aria-label="Icon Threads">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 448 512"><path d="M331.5 235.7c2.2 .9 4.2 1.9 6.3 2.8c29.2 14.1 50.6 35.2 61.8 61.4c15.7 36.5 17.2 95.8-30.3 143.2c-36.2 36.2-80.3 52.5-142.6 53h-.3c-70.2-.5-124.1-24.1-160.4-70.2c-32.3-41-48.9-98.1-49.5-169.6V256v-.2C17 184.3 33.6 127.2 65.9 86.2C102.2 40.1 156.2 16.5 226.4 16h.3c70.3 .5 124.9 24 162.3 69.9c18.4 22.7 32 50 40.6 81.7l-40.4 10.8c-7.1-25.8-17.8-47.8-32.2-65.4c-29.2-35.8-73-54.2-130.5-54.6c-57 .5-100.1 18.8-128.2 54.4C72.1 146.1 58.5 194.3 58 256c.5 61.7 14.1 109.9 40.3 143.3c28 35.6 71.2 53.9 128.2 54.4c51.4-.4 85.4-12.6 113.7-40.9c32.3-32.2 31.7-71.8 21.4-95.9c-6.1-14.2-17.1-26-31.9-34.9c-3.7 26.9-11.8 48.3-24.7 64.8c-17.1 21.8-41.4 33.6-72.7 35.3c-23.6 1.3-46.3-4.4-63.9-16c-20.8-13.8-33-34.8-34.3-59.3c-2.5-48.3 35.7-83 95.2-86.4c21.1-1.2 40.9-.3 59.2 2.8c-2.4-14.8-7.3-26.6-14.6-35.2c-10-11.7-25.6-17.7-46.2-17.8H227c-16.6 0-39 4.6-53.3 26.3l-34.4-23.6c19.2-29.1 50.3-45.1 87.8-45.1h.8c62.6 .4 99.9 39.5 103.7 107.7l-.2 .2zm-156 68.8c1.3 25.1 28.4 36.8 54.6 35.3c25.6-1.4 54.6-11.4 59.5-73.2c-13.2-2.9-27.8-4.4-43.4-4.4c-4.8 0-9.6 .1-14.4 .4c-42.9 2.4-57.2 23.2-56.2 41.8l-.1 .1z" /></svg>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://t.me/omegaclickofficial" className="text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors" title="Telegram" target="_blank" aria-label="Icon Telegram">
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 496 512"><path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z" /></svg>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer >

    )
}