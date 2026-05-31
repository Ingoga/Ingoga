export default function Footer() {
    return (
        <footer className="w-full bg-[#050505] text-white py-16 px-8 md:px-16 border-t border-zinc-900 relative overflow-hidden">
            {/* Giant Background Word */}
            <div className="absolute bottom-[-5%] left-1/2 -translate-x-1/2 text-[15vw] font-bold text-[#e91b24]/5 pointer-events-none select-none tracking-tighter w-full text-center z-0">
                INGOGA
            </div>

            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-12 relative z-10">

                {/* Left Side: Logo */}
                <div className="flex flex-col gap-6 max-w-xs">
                    <div className="flex flex-col gap-1">
                        <h3 className="font-semibold text-xl mb-2 text-white">Contact Us</h3>
                        <div className="flex items-center gap-3 mt-4">
                            <span className="text-white font-medium text-lg">Ingoga Technologies</span>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 gap-4 mt-2 text-zinc-400">
                        <div>
                            <p>Follow us on:</p>
                        </div>
                        <div className="flex gap-5">
                            {/* Instagram */}
                            <a href="#" className="hover:text-white transition-colors">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                            </a>
                            {/* Facebook */}
                            <a href="#" className="hover:text-white transition-colors">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                            </a>
                            {/* X (Twitter) */}
                            <a href="#" className="hover:text-white transition-colors">
                                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.748l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Links Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-auto">
                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-white mb-2">Explore</h4>
                        <a href="#" className="text-zinc-300 text-sm hover:text-white transition">Home</a>
                        <a href="#" className="text-zinc-300 text-sm hover:text-white transition">About us</a>
                        <a href="#" className="text-zinc-300 text-sm hover:text-white transition">Why us</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-white mb-2">What we do</h4>
                        <a href="#" className="text-zinc-300 text-sm hover:text-white transition">Our Gallery</a>
                        <a href="#" className="text-zinc-300 text-sm hover:text-white transition">Our Products</a>
                        <a href="#" className="text-zinc-300 text-sm hover:text-white transition">Our Blog</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h4 className="font-semibold text-white mb-2">Contact us</h4>
                        <a href="#" className="text-zinc-300 text-sm hover:text-white transition">Start a project</a>
                        <a href="#" className="text-zinc-300 text-sm hover:text-white transition">Email us</a>
                        <a href="#" className="text-zinc-300 text-sm hover:text-white transition">Book a call</a>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="flex flex-col gap-4 max-w-sm">
                    <h4 className="font-semibold text-white mb-2">Join our newsletter</h4>
                    <p className="text-xs text-zinc-400 mb-2">Sign up to our mailing list below and be the first to know about new updates. Don't worry, we hate spam too.</p>
                    <div className="flex bg-[#111] rounded-full p-1 border border-zinc-800 transition">
                        <input
                            type="email"
                            placeholder="Your email address"
                            className="bg-transparent text-sm text-white px-4 py-2 outline-none w-full"
                        />
                        <button className="cursor-pointer bg-[#590E04] hover:bg-red-700 text-white text-xs px-4 py-2 rounded-full transition whitespace-nowrap font-semibold">
                            Get Notified
                        </button>
                    </div>
                </div>

            </div>
        </footer>
    );
}
