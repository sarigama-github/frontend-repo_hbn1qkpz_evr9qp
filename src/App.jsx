import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Phenomena from './components/Phenomena'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <Phenomena />
      <section id="gallery" className="relative py-24 bg-gradient-to-b from-[#0b0714] to-black">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold">A gallery among the stars</h2>
            <p className="mt-3 text-white/70">Hand-picked imagery and visualizations that bring cosmic stories to life.</p>
          </div>

          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="aspect-[4/3] rounded-2xl overflow-hidden bg-white/5 border border-white/10">
                <div className="w-full h-full bg-gradient-to-br from-fuchsia-500/20 to-indigo-500/20" />
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default App
