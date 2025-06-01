// components/Banner.jsx
export default function Dailybestsellbanner() {
  return (
    <section className="relative h-[20vh] md:h-[50vh] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="Grey and Black Modern Fashion Store Banner.png" // Replace with your image path
        alt="Banner"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
    
    </section>
  );
}
