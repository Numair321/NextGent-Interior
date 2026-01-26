"use client";
import Image from "next/image";
import { useState } from "react";

export default function Projects() {
    const categories = ["Living Room", "Kitchen", "Office", "Bedroom"];
    const [activeCategory, setActiveCategory] = useState("All");

    const projects = [
        { id: 1, title: "Modern Living Room", category: "Living Room", image: "/hero_bg.png" },
        { id: 2, title: "Luxury Kitchen", category: "Kitchen", image: "/kitchen_design.png" },
        { id: 3, title: "Master Bedroom", category: "Bedroom", image: "/bedroom_design.png" },
        { id: 4, title: "Home Office", category: "Office", image: "/office_design.png" },
        { id: 5, title: "Contemporary Lounge", category: "Living Room", image: "/living_room_variation.png" },
        { id: 6, title: "Elegant Dining", category: "Kitchen", image: "/kitchen_design.png" },
        // New Kitchen Projects
        { id: 7, title: "Luxury Marble Kitchen", category: "Kitchen", image: "/kitchen_project_1.png" },
        { id: 8, title: "Scandinavian Bright Kitchen", category: "Kitchen", image: "/kitchen_project_2.png" },
        { id: 9, title: "Industrial Loft Kitchen", category: "Kitchen", image: "/kitchen_project_3.png" },
        // New Bedroom Projects
        { id: 10, title: "Velvet Master Suite", category: "Bedroom", image: "/bedroom_project_1.png" },
        { id: 11, title: "Minimalist Zen Bedroom", category: "Bedroom", image: "/bedroom_project_2.png" },
        { id: 12, title: "Art Deco Navy Bedroom", category: "Bedroom", image: "/bedroom_project_3.png" },
        // New Office Projects
        { id: 13, title: "Executive Blue Office", category: "Office", image: "/office_project_1.png" },
        { id: 14, title: "Creative Studio Workspace", category: "Office", image: "/office_project_2.png" },
    ];

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">Our Projects</h2>
                <p className="text-gray-500 mb-12">Some of our finest work across different categories.</p>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <button
                        onClick={() => setActiveCategory("All")}
                        className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${activeCategory === "All"
                            ? "bg-secondary text-white hover:bg-primary"
                            : "border border-gray-300 text-gray-600 hover:border-primary hover:text-primary"
                            }`}
                    >
                        All
                    </button>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`px-6 py-2 rounded-full text-sm font-semibold transition-colors ${activeCategory === cat
                                ? "bg-secondary text-white hover:bg-primary"
                                : "border border-gray-300 text-gray-600 hover:border-primary hover:text-primary"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredProjects.map((item) => (
                        <div key={item.id} className="group relative overflow-hidden rounded-lg aspect-square bg-gray-200 cursor-pointer">
                            {/* Image */}
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-10">
                                <div className="text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                                    <p className="text-sm text-gray-300">View Project</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12">
                    <button className="px-8 py-3 bg-secondary text-white font-semibold rounded hover:bg-primary transition-colors duration-300">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
}
