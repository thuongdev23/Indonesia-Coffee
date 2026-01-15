import heroImg from "/3_Photo - 11.jpg"

export default function Hero() {
  return (
    <div className="app" >     
      {/* Overlay (optional but recommended) */}
      <div className="absolute inset-0 bg-black/30" style={{
        backgroundImage : 'url(${heroImg}})',
      }

      }></div>

      <div className="relative text-center text-white p-6">
        <div className="text-3xl mb-2">🇮🇩</div>

        <h1 className="text-4xl md:text-5xl font-semibold mb-4">
          One Island, One Cup
        </h1>

        <button className="px-6 py-2 border border-white rounded-full hover:bg-white hover:text-black transition">
          Take a Sip
        </button>
      </div>
    </div>
  )
}
