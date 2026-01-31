"use client";
import React from "react";

export default function Testimonials() {
    const reviews = [
        {
            name: "Varun Sharma",
            review: "Brilliant work was done by your designers. Going to recommend them to my friends & family!",
            role: "Homeowner"
        },
        {
            name: "Krishna Reddy",
            review: "Very good, knowledgeable staff. Appreciate their strong work ethics and well-versed personnel.",
            role: "Client"
        },
        {
            name: "Sravanthi",
            review: "Excellent designs and services. They are true to their words and make sure the clients are truly satisfied.",
            role: "Homeowner"
        },
        {
            name: "Harish",
            review: "Transforming my office space was seamless with NextGen. The attention to detail is unmatched.",
            role: "Business Owner"
        },
        {
            name: "Naveen",
            review: "They perfectly understood my requirements. The modular kitchen is exactly what I dreamed of!",
            role: "Homeowner"
        },
        {
            name: "Samrat",
            review: "Professional, timely, and creative. The living room design is the talk of all my guests.",
            role: "Client"
        },
        {
            name: "Sonu",
            review: "Budget-friendly yet premium designs. Highly recommend NextGen for any interior work.",
            role: "Homeowner"
        },
        {
            name: "Masihuzzam Malik",
            review: "Exceptional service and timely delivery. The team at NextGen Interior really brought our vision to life.",
            role: "Client"
        }
    ];

    const scrollRef = React.useRef<HTMLDivElement>(null);

    // Auto-scroll effect for mobile
    React.useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        const scroll = () => {
            if (window.innerWidth >= 768) return; // Don't scroll on desktop

            if (scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth) {
                // Reset to start smoothly or instantly
                scrollContainer.scrollTo({ left: 0, behavior: "smooth" });
            } else {
                scrollContainer.scrollBy({ left: scrollContainer.clientWidth, behavior: "smooth" });
            }
        };

        const intervalId = setInterval(scroll, 3000); // Scroll every 3 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">Our Client Say</h2>
                <p className="text-gray-500 mb-12 max-w-2xl mx-auto italic">
                    "While designing your home, it’s a good idea to think about certain key aspects like space available, the colours to be used, the kind of furniture and accessories you fancy."
                </p>

                {/* Carousel Container */}
                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 pb-4 md:pb-0 hide-scrollbar"
                >
                    {reviews.map((item, index) => (
                        <div
                            key={index}
                            className="bg-muted p-8 rounded-xl shadow-inner italic relative min-w-[90vw] md:min-w-0 snap-center"
                        >
                            <div className="text-4xl text-primary absolute top-4 left-4 opacity-30">"</div>
                            <p className="text-gray-700 mb-6 relative z-10">
                                {item.review}
                            </p>
                            <h4 className="font-bold text-secondary">{item.name}</h4>
                            <span className="text-xs text-gray-500 uppercase tracking-wide">{item.role}</span>
                        </div>
                    ))}
                </div>

                {/* Visual Indicators for Mobile (Optional but helpful) */}
                <div className="flex md:hidden justify-center gap-2 mt-4">
                    <p className="text-xs text-gray-400 animate-pulse">Swipe for more...</p>
                </div>
            </div>
            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `}</style>
        </section>
    );
}
