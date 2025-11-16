function Footer() {
  return (
    <footer className="bg-[#090612] border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Cosmos — All rights reserved.</p>
          <div className="flex items-center gap-6 text-white/60 text-sm">
            <a href="#explore" className="hover:text-white transition">Explore</a>
            <a href="#phenomena" className="hover:text-white transition">Phenomena</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
