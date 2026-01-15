import mapImg from "/map-img.png"

export default function MapSection() {
  return (
    <section className="relative w-full h-screen bg-[#7ecad6]">
      {/* Map */}
      <img
        src={mapImg}
        alt="Indonesia Map"
        className="w-full h-full object-contain"
      />

      {/* Coffee markers */}
      <div className="absolute top-[40%] left-[25%] text-3xl">☕</div>
      <div className="absolute top-[45%] left-[45%] text-3xl">☕</div>
      <div className="absolute top-[50%] left-[60%] text-3xl">☕</div>
      <div className="absolute top-[48%] left-[75%] text-3xl">☕</div>
    </section>
  )
}
