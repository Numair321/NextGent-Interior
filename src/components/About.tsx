import Link from "next/link";
import Image from "next/image";

export default function About() {
    const features = [
        "Space Management at its best",
        "Flawless Finishing throughout the products",
        "Smoothly Functioning of accessories & hardwares used",
        "Durability & quality assurance",
        "Upto 10 years Warranty*"
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
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
                        <ul className="space-y-3">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-center text-gray-700">
                                    <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Image Placeholder or Decorative Element */}
                    <div className="md:w-1/2 relative h-[400px] w-full bg-gray-100 rounded-lg overflow-hidden shadow-xl">
                        <Image
                            src="/kitchen_design.png"
                            alt="NextGen Interior Kitchen"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
