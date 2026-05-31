"use client";

import React, { useState } from 'react';
import { Plus } from 'lucide-react';


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className={`fixed top-6 left-1/2 -translate-x-1/2 w-full transition-all duration-700 ease-in-out z-50 px-4 ${isOpen ? 'max-w-[700px]' : 'max-w-[500px]'}`}>
            <div className={`glass-card rounded-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.4)] relative overflow-hidden transition-all duration-700 ease-in-out ${isOpen ? 'p-8 md:p-10' : 'p-3 px-6'}`}>
                <div className="flex items-center justify-between w-full relative z-10">
                    <div className="flex items-center gap-3">
                        <div className={`flex items-center justify-center transition-all duration-500 ${isOpen ? 'w-10 h-10' : 'w-8 h-8'}`}>
                            <img src="/logo.png" alt="IT Logo" className="rounded-lg w-full h-full object-contain scale-125" />
                        </div>
                        <span className={`text-white font-semibold tracking-tight transition-all duration-500 whitespace-nowrap ${isOpen ? 'text-lg' : 'text-sm'}`}>
                            Ingoga Technologies
                        </span>
                    </div>

                    <div className="flex items-center gap-4">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`flex items-center justify-center transition-all duration-500 group ${isOpen ? 'text-zinc-400 hover:text-white rotate-90 scale-110' : 'rounded-full bg-white/5 w-8 h-8 hover:bg-white/10 rotate-0'}`}
                        >
                            {isOpen ? (
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className='cursor-pointer'>
                                    <line x1="18" y1="6" x2="6" y2="18"></line>
                                    <line x1="6" y1="6" x2="18" y2="18"></line>
                                </svg>
                            ) : (
                                <span className="cursor-pointer text-white flex items-center justify-center"><Plus size={18} className="group-hover:scale-110 transition-transform" /></span>
                            )}
                        </button>
                    </div>
                </div>

                <div
                    className={`grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-8 w-full transition-all duration-700 origin-top ${isOpen ? 'mt-10 opacity-100 max-h-[500px] visible translate-y-0' : 'mt-0 opacity-0 max-h-0 invisible -translate-y-4'}`}
                >
                    <div className="flex flex-col gap-5">
                        <h4 className="font-bold text-ruby-500 text-xs uppercase tracking-widest mb-1">Explore</h4>
                        <a href="#" className="text-zinc-300 text-[15px] font-medium hover:text-white transition-colors flex items-center gap-2 group">
                            <span className="w-1.5 h-1.5 rounded-full bg-ruby-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            Home
                        </a>
                        <a href="#" className="text-zinc-300 text-[15px] font-medium hover:text-white transition-colors flex items-center gap-2 group">
                            <span className="w-1.5 h-1.5 rounded-full bg-ruby-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            About us
                        </a>
                        <a href="#" className="text-zinc-300 text-[15px] font-medium hover:text-white transition-colors flex items-center gap-2 group">
                            <span className="w-1.5 h-1.5 rounded-full bg-ruby-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            Why us
                        </a>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h4 className="font-bold text-ruby-500 text-xs uppercase tracking-widest mb-1">What we do</h4>
                        <a href="#" className="text-zinc-300 text-[15px] font-medium hover:text-white transition-colors flex items-center gap-2 group">
                            <span className="w-1.5 h-1.5 rounded-full bg-ruby-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            Our Gallery
                        </a>
                        <a href="#" className="text-zinc-300 text-[15px] font-medium hover:text-white transition-colors flex items-center gap-2 group">
                            <span className="w-1.5 h-1.5 rounded-full bg-ruby-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            Our Products
                        </a>
                        <a href="#" className="text-zinc-300 text-[15px] font-medium hover:text-white transition-colors flex items-center gap-2 group">
                            <span className="w-1.5 h-1.5 rounded-full bg-ruby-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            Our Blog
                        </a>
                    </div>
                    <div className="flex flex-col gap-5">
                        <h4 className="font-bold text-ruby-500 text-xs uppercase tracking-widest mb-1">Contact us</h4>
                        <a href="#" className="text-zinc-300 text-[15px] font-medium hover:text-white transition-colors flex items-center gap-2 group">
                            <span className="w-1.5 h-1.5 rounded-full bg-ruby-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            Start a project
                        </a>
                        <a href="#" className="text-zinc-300 text-[15px] font-medium hover:text-white transition-colors flex items-center gap-2 group">
                            <span className="w-1.5 h-1.5 rounded-full bg-ruby-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            Email us
                        </a>
                        <a href="#" className="text-zinc-300 text-[15px] font-medium hover:text-white transition-colors flex items-center gap-2 group">
                            <span className="w-1.5 h-1.5 rounded-full bg-ruby-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                            Book a call
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}
