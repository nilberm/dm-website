export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative h-screen bg-cover bg-center flex items-center justify-center"
      style={{
        // Placeholder do Picsum com 1920x1080 (ajuste a largura/altura conforme precisar)
        backgroundImage: "url('https://picsum.photos/1920/1080')",
      }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">
          Transforming Ideas into Unique Art
        </h1>
        <p className="text-lg sm:text-xl mb-6">
          Custom digital illustrations for every occasion
        </p>
        <a
          href="#types"
          className="inline-block bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 px-6 rounded-md transition"
        >
          Explore My Art
        </a>
      </div>
    </section>
  );
}
