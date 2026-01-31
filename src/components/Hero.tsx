import Link from "next/link";
import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/hero_bg.png"
                    alt="Modern Luxury Interior"
                    fill
                    priority
                    className="object-cover object-center"
                    quality={100}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
                <h2 className="text-secondary-foreground text-xl md:text-2xl font-light tracking-widest uppercase mb-4">
                    Precision Lighting, <span className="text-primary font-bold">Bespoke TV Units</span>
                </h2>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white mb-6 leading-tight">
                    Smart Interior <br /> <span className="text-primary">Lighting Luxe</span>
                </h1>
                <p className="text-gray-200 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light">
                    Experience the art of living with our exclusive interior designs that blend comfort with luxury.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="#contact"
                        className="px-8 py-3 bg-primary text-white font-semibold rounded hover:bg-yellow-600 transition-colors duration-300"
                    >
                        Get Started
                    </Link>
                    <Link
                        href="#projects"
                        className="px-8 py-3 bg-transparent border border-white text-white font-semibold rounded hover:bg-white hover:text-black transition-colors duration-300"
                    >
                        View Projects
                    </Link>
                </div>
            </div>
        </section>
    );
}
