export default function Process() {
    const steps = [
        {
            step: "01",
            title: "MEET",
            description: "Meet our expert design team and let them know your requirements."
        },
        {
            step: "02",
            title: "GET DESIGNS",
            description: "Designed exclusively to suit you and your home."
        },
        {
            step: "03",
            title: "PLACE ORDER",
            description: "Place your order and we'll get to work right away with our state-of-the-art facilities."
        },
        {
            step: "04",
            title: "INSTALLATION",
            description: "Delivery and Installation by our professional and expert logistic partners."
        }
    ];

    return (
        <section className="py-20 bg-secondary text-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold mb-12">This Is How We Work</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {steps.map((item, index) => (
                        <div key={index} className="relative p-6 border border-gray-700 rounded-xl hover:bg-gray-800 transition-colors duration-300">
                            <div className="text-5xl font-bold text-gray-800 absolute top-4 right-4 select-none opacity-50">
                                {item.step}
                            </div>
                            <h3 className="text-xl font-bold text-primary mb-3 relative z-10">{item.title}</h3>
                            <p className="text-gray-400 text-sm relative z-10">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
