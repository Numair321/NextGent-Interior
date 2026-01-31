export default function Services() {
    const services = [
        {
            title: "Custom TV Units & Media Walls",
            description: "Sleek, modern TV units with hidden wiring, Italian finishes, and integrated lighting for a cinematic experience.",
            icon: "📺"
        },
        {
            title: "Designer Lighting & Chandeliers",
            description: "Transform your space with architectural profile lighting, magnetic tracks, and stunning modern chandeliers.",
            icon: "💡"
        },
        {
            title: "Smart Electrical Solutions",
            description: "Comprehensive electrical planning, smart switch integration, and custom decorative light box installations.",
            icon: "⚡"
        },
        {
            title: "Modular Kitchen & Wardrobes",
            description: "Premium modular kitchens and wardrobes designed to maximize space and aesthetic appeal.",
            icon: "🍳"
        }
    ];

    return (
        <section id="services" className="py-20 bg-muted">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">Our Features</h2>
                <p className="text-gray-500 mb-12 max-w-2xl mx-auto">
                    We have an exceptional range of services to help you build your dream home.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-t-4 border-t-primary border-transparent">
                            <div className="text-4xl mb-4">{service.icon}</div>
                            <h3 className="text-xl font-bold text-secondary mb-3">{service.title}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
