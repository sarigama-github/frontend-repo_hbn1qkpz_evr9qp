import { useState } from 'react'
import { Menu, X, Star, Telescope, Rocket } from 'lucide-react'

function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'Explore', href: '#explore' },
    { label: 'Phenomena', href: '#phenomena' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-20">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl shadow-lg">
          <div className="flex items-center justify-between px-4 py-3">
            <a href="#" className="flex items-center gap-2 text-white">
              <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-fuchsia-500 to-indigo-500 grid place-items-center">
                <Star size={18} className="text-white" />
              </div>
              <span className="text-lg font-semibold tracking-wide">Cosmos</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-white/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <a href="#explore" className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full font-medium hover:opacity-90 transition">
                Start Exploring
                <Rocket size={16} />
              </a>
            </nav>

            <button aria-label="Menu" className="md:hidden text-white" onClick={() => setOpen(!open)}>
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden px-6 pb-6">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="text-white/80 hover:text-white transition-colors">
                    {item.label}
                  </a>
                ))}
                <a href="#explore" className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full font-medium">
                  Start Exploring
                  <Telescope size={16} />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Navbar
