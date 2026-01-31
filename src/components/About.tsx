import Link from "next/link";
import Image from "next/image";

export default function About() {
    const features = [
        "Space Management at its best",
        "Flawless Finishing throughout the products",
        "Smoothly Functioning of accessories & hardwares used",
        "Durability & quality assurance",
        "Upto 10 years Warranty*",
        "Expert Electrical Layout Planning",
        "Advanced Profile Lighting Solutions",
        "Custom LED Integration",
        "Smart Home Wiring & Automation",
        "Safety-First Installation Standards"
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12 mb-20">
                    {/* Text Content */}
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-6">About Us</h2>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            We, <strong className="text-primary">NextGen Interior</strong>, situated at Bangalore, Karnataka, operate primarily in the fields
                            of architecture and interior designing with a talented team of designers. We have successfully conceptualized
                            and completed the interior designs of numerous residential and commercial projects.
                        </p>
                        <p className="text-gray-600 mb-8 leading-relaxed">
                            We are a perfect combination of quality, expertise, and experience. We use the best raw materials
                            and apply engineered solutions to produce durable, premium, stylish, and comfortable solutions with immaculate finishing.
                        </p>

                        <h3 className="text-xl font-bold text-secondary mb-4">What you can expect from us:</h3>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center text-gray-700">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-3 shrink-0"></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image Block */}
                    <div className="md:w-1/2 relative h-[450px] w-full bg-gray-100 rounded-lg overflow-hidden shadow-xl">
                        <Image
                            src="/kitchen_design.png"
                            alt="NextGen Interior Kitchen"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* New Specialized Section */}
                <div className="bg-gray-50 rounded-2xl p-8 md:p-12 border border-gray-100">
                    <div className="max-w-4xl mx-auto text-center mb-12">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-secondary mb-4">Expertise in Electrical & Lighting Design</h3>
                        <p className="text-gray-600">
                            At NextGen Interior, we believe that lighting is the soul of any space. Our specialized team excels in technical electrical planning and cutting-edge lighting aesthetics.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-bold text-secondary mb-2">Electrical Precision</h4>
                            <p className="text-gray-600 text-sm">Comprehensive wiring diagrams, load balancing, and safe conduit placement for seamless functionality.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-bold text-secondary mb-2">Profile Lighting Mastery</h4>
                            <p className="text-gray-600 text-sm">Expert application of LED profile lights in ceilings, niches, and furniture to create depth and mood.</p>
                        </div>

                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 text-primary">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h4 className="text-lg font-bold text-secondary mb-2">Smart Integration</h4>
                            <p className="text-gray-600 text-sm">Seamlessly blending traditional design with modern smart home controls and optimized power consumption.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
