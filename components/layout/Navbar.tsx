"use client";

import { useState, useEffect } from 'react';
import { Plus, X, Moon, Sun } from 'lucide-react';
import Link from 'next/link';
import { useTheme } from 'next-themes';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <nav className={`fixed top-6 left-1/2 -translate-x-1/2 transition-all duration-700 ease-in-out z-50 px-4 md:px-8 w-[95%] md:w-[80%] lg:w-[56%]`}>
            <div className={`glass-card rounded-md border border-black/10 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] relative overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'p-6 md:p-10' : 'p-4 px-5 md:p-5 md:px-6'}`}>
                <div className="flex items-center justify-between w-full relative z-10">
                    <div className="flex items-center gap-3 md:gap-4">
                        <div className={`flex items-center justify-center transition-all duration-500 bg-red-600 rounded-md w-10 h-8 md:w-12 md:h-10`}>
                            <img src="/logo.png" alt="IT Logo" className="w-full h-full object-contain" />
                        </div>
                        <span className={`text-foreground font-semibold tracking-tight transition-all duration-300 text-sm md:text-md`}>
                            Ingoga Technologies
                        </span>
                    </div>

                    <div className="flex items-center gap-4 md:gap-6">
                        {mounted && (
                            <button onClick={toggleTheme} className="cursor-pointer text-foreground hover:text-red-500 transition-colors">
                                {theme === 'dark' ? <Moon size={20} strokeWidth={1.5} /> : <Sun size={20} strokeWidth={1.5} />}
                            </button>
                        )}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="cursor-pointer p-2 flex items-center justify-center transition-all duration-300 bg-black/5 dark:bg-white/10 rounded-full text-foreground hover:text-red-500"
                        >
                            {isOpen ? (
                                <X size={16} strokeWidth={2} />
                            ) : (
                                <Plus size={20} strokeWidth={2} />
                            )}
                        </button>
                    </div>
                </div>

                <div
                    className={`grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 w-full transition-all duration-500 origin-top ${isOpen ? 'mt-10 md:mt-14 opacity-100 max-h-[800px]' : 'mt-0 opacity-0 max-h-0'}`}
                >
                    <div className="flex flex-col">
                        <h4 className="font-semibold text-foreground text-[16px] md:text-[18px] mb-6 md:mb-8">Explore</h4>
                        <div className="flex flex-col gap-4 md:gap-5">
                            <Link href="/" className="text-foreground/80 text-[14px] md:text-[15px] font-normal cursor-pointer hover:text-foreground transition-colors">Home</Link>
                            <Link href="/about" className="text-foreground/80 text-[14px] md:text-[15px] font-normal cursor-pointer hover:text-foreground transition-colors">About us</Link>
                            <a href="#" className="text-foreground/80 text-[14px] md:text-[15px] font-normal cursor-pointer hover:text-foreground transition-colors">Why us</a>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="font-semibold text-foreground text-[16px] md:text-[18px] mb-6 md:mb-8">What we do</h4>
                        <div className="flex flex-col gap-4 md:gap-5">
                            <Link href="/products" className="text-foreground/80 text-[14px] md:text-[15px] font-normal cursor-pointer hover:text-foreground transition-colors">Our Products</Link>
                            <Link href="/blog" className="text-foreground/80 text-[14px] md:text-[15px] font-normal cursor-pointer hover:text-foreground transition-colors">Our Blog</Link>
                            <Link href="/gallery" className="text-foreground/80 text-[14px] md:text-[15px] font-normal cursor-pointer hover:text-foreground transition-colors">Our Gallery</Link>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="font-semibold text-foreground text-[16px] md:text-[18px] mb-6 md:mb-8">Contact us</h4>
                        <div className="flex flex-col gap-4 md:gap-5">
                            <Link href="/contact" className="text-foreground/80 text-[14px] md:text-[15px] font-normal cursor-pointer hover:text-foreground transition-colors">Start a project</Link>
                            <Link href="/contact" className="text-foreground/80 text-[14px] md:text-[15px] font-normal cursor-pointer hover:text-foreground transition-colors">Email us</Link>
                            <Link href="/contact" className="text-foreground/80 text-[14px] md:text-[15px] font-normal cursor-pointer hover:text-foreground transition-colors">Book a call</Link>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

