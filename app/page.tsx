import Image from "next/image";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
      <section id="about" className="text-center py-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Unit Conversions</h1>

        <p>
            Easily convert between different units of measurement.
            Pounds (lb.) to kilograms (kg), and vice versa
            Miles to kilometres (km), and vice versa
            Celsius (°C) to Fahrenheit (°F), and vice versa

        </p>
      </section>
      
    </div>
  );
}