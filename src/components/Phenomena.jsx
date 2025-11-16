import { motion } from 'framer-motion'

const phenomena = [
  {
    title: 'Black Holes',
    desc: 'Regions of spacetime with gravity so strong that nothing, not even light, can escape. Learn how they warp space and time.'
  },
  {
    title: 'Nebulae',
    desc: 'Stellar nurseries and remnants — clouds of gas and dust where stars are born and die.'
  },
  {
    title: 'Gravitational Waves',
    desc: 'Ripples in spacetime produced by massive cosmic events, detected on Earth a century after Einstein predicted them.'
  },
]

function Phenomena() {
  return (
    <section id="phenomena" className="relative py-24 bg-[#0b0714]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white"
            >
              Phenomena that shape our universe
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 text-white/70"
            >
              A guided overview of the most captivating processes in astrophysics.
            </motion.p>
          </div>

          <div className="space-y-4">
            {phenomena.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-xl font-semibold text-white">{p.title}</h3>
                <p className="mt-2 text-white/70">{p.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Phenomena
