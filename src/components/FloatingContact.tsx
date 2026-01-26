"use client";

import React from "react";

export default function FloatingContact() {
    return (
        <a
            href="tel:9580591558"
            className="fixed bottom-6 right-6 z-50 flex items-center gap-3 px-6 py-3 bg-primary text-white rounded-full shadow-2xl hover:bg-yellow-600 transition-all duration-300 hover:scale-105 animate-fade-in"
        >
            <div className="flex flex-col items-start leading-none">
                <span className="text-xs font-light text-secondary-foreground opacity-90">Contact</span>
                <span className="font-bold text-sm md:text-base">Zaid Malik</span>
            </div>
            <div className="h-8 w-px bg-white/30 mx-1"></div>
            <span className="font-mono font-bold text-lg">9580591558</span>
        </a>
    );
}
