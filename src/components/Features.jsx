import { motion } from 'framer-motion'
import { Orbit, Sparkles, Telescope, Satellite, Comet, Planet } from 'lucide-react'

const items = [
  {
    icon: Orbit,
    title: 'Galactic Architecture',
    desc: 'Spiral arms, bars, halos — discover the elegant structures formed by gravity over billions of years.'
  },
  {
    icon: Telescope,
    title: 'Windows to the Universe',
    desc: 'How telescopes reveal different layers of reality, from radio waves to gamma rays.'
  },
  {
    icon: Satellite,
    title: 'Cosmic Cartography',
    desc: 'Mapping the large-scale web of matter — filaments, voids, and clusters across the observable cosmos.'
  },
  {
    icon: Comet,
    title: 'Transient Wonders',
    desc: 'Supernovae, comets, and exoplanet transits — rare events with profound stories.'
  },
  {
    icon: Planet,
    title: 'Worlds Beyond',
    desc: 'A census of exoplanets and the search for habitable environments beyond our solar system.'
  },
  {
    icon: Sparkles,
    title: 'Cosmic Origins',
    desc: 'From the Big Bang to heavy elements — the origin story written in starlight.'
  },
]

function Features() {
  return (
    <section id="explore" className="relative py-24 bg-gradient-to-b from-black to-[#0b0714]">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[36rem] bg-fuchsia-500/20 blur-3xl rounded-full" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-3xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
          >
            Explore the fabric of space
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-4 text-white/70"
          >
            A curated selection of cosmic concepts, explained with clarity and visual flair.
          </motion.p>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
            >
              <div className="flex items-start gap-4">
                <div className="h-11 w-11 rounded-xl bg-gradient-to-tr from-fuchsia-500 to-indigo-500 grid place-items-center">
                  <item.icon className="text-white" size={22} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-white/70 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
