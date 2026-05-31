"use client";

import React, { useState } from 'react';
import { Plus, X, Moon } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`fixed top-6 left-1/2 -translate-x-1/2 transition-all duration-700 ease-in-out z-50 px-8 ${isOpen ? 'w-[56%]' : 'w-[56%]'}`}>
            <div className={`glass-card rounded-md border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] relative overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'p-8 md:p-10' : 'p-5 px-6'}`}>
                <div className="flex items-center justify-between w-full relative z-10">
                    <div className="flex items-center gap-4">
                        <div className={`flex items-center justify-center transition-all duration-500 bg-red-600 rounded-md ${isOpen ? 'w-12 h-10' : 'w-12 h-10'}`}>
                            <img src="/logo.png" alt="IT Logo" className="w-full h-full object-contain" />
                        </div>
                        <span className={`text-white font-semibold tracking-tight transition-all duration-300 ${isOpen ? 'text-md' : 'text-md'}`}>
                            Ingoga Technologies
                        </span>
                    </div>

                    <div className="flex items-center gap-6">
                        {isOpen && (
                            <button className="cursor-pointer text-white hover:text-zinc-300 transition-colors">
                                <Moon size={20} strokeWidth={1.5} />
                            </button>
                        )}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="cursor-pointer p-2 flex items-center justify-center transition-all duration-300 bg-white/10 rounded-full text-white hover:text-zinc-300"
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
                    className={`grid grid-cols-1 md:grid-cols-3 gap-12 w-full transition-all duration-500 origin-top ${isOpen ? 'mt-14 opacity-100 max-h-[500px]' : 'mt-0 opacity-0 max-h-0'}`}
                >
                    <div className="flex flex-col">
                        <h4 className="font-semibold text-white text-[18px] mb-8">Explore</h4>
                        <div className="flex flex-col gap-5">
                            <a href="#" className="text-white text-[15px] font-normal cursor-pointer hover:text-zinc-300 transition-colors">Home</a>
                            <a href="#" className="text-white text-[15px] font-normal cursor-pointer hover:text-zinc-300 transition-colors">About us</a>
                            <a href="#" className="text-white text-[15px] font-normal cursor-pointer hover:text-zinc-300 transition-colors">Why us</a>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="font-semibold text-white text-[18px] mb-8">What we do</h4>
                        <div className="flex flex-col gap-5">
                            <a href="#" className="text-white text-[15px] font-normal cursor-pointer hover:text-zinc-300 transition-colors">Our Gallery</a>
                            <a href="#" className="text-white text-[15px] font-normal cursor-pointer hover:text-zinc-300 transition-colors">Our Products</a>
                            <a href="#" className="text-white text-[15px] font-normal cursor-pointer hover:text-zinc-300 transition-colors">Our Blog</a>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h4 className="font-semibold text-white text-[18px] mb-8">Contact us</h4>
                        <div className="flex flex-col gap-5">
                            <a href="#" className="text-white text-[15px] font-normal cursor-pointer hover:text-zinc-300 transition-colors">Start a project</a>
                            <a href="#" className="text-white text-[15px] font-normal cursor-pointer hover:text-zinc-300 transition-colors">Email us</a>
                            <a href="#" className="text-white text-[15px] font-normal cursor-pointer hover:text-zinc-300 transition-colors">Book a call</a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

