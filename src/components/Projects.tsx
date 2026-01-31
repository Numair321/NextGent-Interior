"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

interface ProjectsProps {
    limit?: number;
    initialCategory?: string;
    showViewAll?: boolean;
}

export default function Projects({ limit, initialCategory = "All", showViewAll = true }: ProjectsProps) {
    const router = useRouter();
    const pathname = usePathname();
    const categories = ["Living Room", "Kitchen", "Office", "Bedroom", "Lighting", "TV Units", "Chandeliers"];
    const [activeCategory, setActiveCategory] = useState(initialCategory);

    const handleCategoryClick = (cat: string) => {
        setActiveCategory(cat);
        // If we are on the projects page or subprojects page, update the URL for "page-wise" feel
        if (pathname.startsWith("/projects")) {
            if (cat === "All") {
                router.push("/projects");
            } else {
                router.push(`/projects/${encodeURIComponent(cat)}`);
            }
        }
    };

    const projects = [
        { id: 1, title: "Ambient Living Room Lighting", category: "Living Room", image: "/profile_lighting.png" },
        { id: 2, title: "Sleek Italian Finish TV Unit", category: "TV Units", image: "/luxury_tv_unit.png" },
        { id: 3, title: "Modern Dining Chandelier", category: "Chandeliers", image: "/modern_chandelier.png" },
        { id: 4, title: "Smart Electrical Installation", category: "Lighting", image: "/smart_electrical.png" },
        { id: 5, title: "Floating Media Wall with LEDs", category: "Living Room", image: "/media_wall.png" },
        { id: 6, title: "Modern Kitchen Island Lighting", category: "Kitchen", image: "/kitchen_lighting.png" },
        { id: 10, title: "Master Suite Cove Lighting", category: "Bedroom", image: "/bedroom_lighting.png" },
        // New Lighting Projects
        { id: 16, title: "Modern Ceiling Profile Lighting", category: "Lighting", image: "/profile_light_1.png" },
        { id: 17, title: "Architectural Baseboard Lighting", category: "Lighting", image: "/profile_light_2.png" },
        { id: 18, title: "Feature Wall Accent Lighting", category: "Lighting", image: "/profile_light_3.png" },
        // New Kitchen Projects
        { id: 7, title: "Luxury Marble Kitchen", category: "Kitchen", image: "/kitchen_project_1.png" },
        { id: 8, title: "Scandinavian Bright Kitchen", category: "Kitchen", image: "/kitchen_project_2.png" },
        { id: 9, title: "Industrial Loft Kitchen", category: "Kitchen", image: "/kitchen_project_3.png" },
        // New Bedroom Projects
        { id: 11, title: "Minimalist Zen Bedroom", category: "Bedroom", image: "/bedroom_project_2.png" },
        { id: 12, title: "Art Deco Navy Bedroom", category: "Bedroom", image: "/bedroom_project_3.png" },
        // New Office Projects
        { id: 13, title: "Executive Blue Office", category: "Office", image: "/office_project_1.png" },
        { id: 14, title: "Creative Studio Workspace", category: "Office", image: "/office_project_2.png" },
        { id: 15, title: "Modern Home Office", category: "Office", image: "/office_design.png" },
        // New Chandelier Projects
        { id: 19, title: "Grand Crystal Chandelier", category: "Chandeliers", image: "/chandelier_1.png" },
        { id: 20, title: "Minimalist Ring Chandelier", category: "Chandeliers", image: "/chandelier_2.png" },
        { id: 21, title: "Modern Pendant Chandelier Cluster", category: "Chandeliers", image: "/chandelier_3.png" },
        // New TV Units
        { id: 22, title: "Luxury Floating TV Console", category: "TV Units", image: "/tv_unit_1.png" },
        { id: 23, title: "Modern Oak Minimalist TV Unit", category: "TV Units", image: "/tv_unit_2.png" },
        { id: 24, title: "Wall-Mounted Glass Cabinet TV Unit", category: "TV Units", image: "/tv_unit_3.png" },
    ];

    const filteredProjects = activeCategory === "All"
        ? projects
        : projects.filter(project => project.category === activeCategory);

    const displayProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects;

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">Our Projects</h2>
                <p className="text-gray-500 mb-12">Some of our finest work across different categories.</p>

                {/* Filter Buttons */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    <button
                        onClick={() => handleCategoryClick("All")}
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
                            onClick={() => handleCategoryClick(cat)}
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
                    {displayProjects.map((item) => (
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

                {showViewAll && limit && filteredProjects.length > limit && (
                    <div className="mt-12">
                        <Link
                            href="/projects"
                            className="inline-block px-8 py-3 bg-secondary text-white font-semibold rounded hover:bg-primary transition-colors duration-300"
                        >
                            View All Projects
                        </Link>
                    </div>
                )}
            </div>
        </section>
    );
}
