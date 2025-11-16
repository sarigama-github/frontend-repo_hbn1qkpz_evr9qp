import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/er66D6jbuo0hIjmn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black pointer-events-none" />

      <div className="relative z-10 h-full flex items-center">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 backdrop-blur text-white/90 mb-6">
              <span className="h-2 w-2 rounded-full bg-fuchsia-400 animate-pulse" />
              Live cosmic visual
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white">
              Journey through the modern cosmos
            </h1>
            <p className="mt-6 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-xl">
              A cinematic exploration of galaxies, nebulae, and the physics that shape our universe — presented with immersive design and professional motion.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#explore" className="px-6 py-3 rounded-full bg-white text-gray-900 font-semibold hover:opacity-90 transition">Start Exploring</a>
              <a href="#phenomena" className="px-6 py-3 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition">See Phenomena</a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
