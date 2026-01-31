"use client";

import React, { useState, useEffect, useRef } from "react";

interface Message {
    id: number;
    text: string;
    sender: "user" | "bot";
}

export default function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const initialMessages: Message[] = [
        { id: 1, text: "Hello! I'm your NextGen Interior assistant. How can I help you today with your electrical and lighting needs?", sender: "bot" }
    ];
    const [messages, setMessages] = useState<Message[]>(initialMessages);

    const faqs = [
        // Services
        {
            q: "What services do you offer?",
            a: "We provide complete interior solutions including Modular Kitchens, Luxury Wardrobes, Master Bedroom designs, False Ceilings with Profile Lighting, and Living Room aesthetics."
        },
        // Technical / "Why" questions
        {
            q: "Why is Profile Lighting better than traditional lights?",
            a: "Profile lighting offers a sleek, glare-free aesthetic with superior energy efficiency. It's built into your ceiling or furniture, providing seamless mood lighting that traditional bulbs can't match."
        },
        // Specific Facilities
        {
            q: "Tell me about your Modular Kitchens.",
            a: "Our modular kitchens blend style and functionality, featuring high-gloss finishes, smart storage, soft-close cabinets, and ergonomic layouts customized for you."
        },
        {
            q: "What kind of Wardrobes do you design?",
            a: "We design custom wardrobes including sliding, walk-in, and hinged styles with premium finishes (acrylic, glass, PU) and smart internal organizers."
        },
        {
            q: "How can you design my Bedroom?",
            a: "We create cozy yet modern bedroom retreats with custom headboards, mood lighting, space-saving wardrobes, and elegant wall paneling."
        },
        // More Technical
        {
            q: "Can you integrate smart switches with my existing wiring?",
            a: "Yes! We specialize in retrofitting smart home solutions. We can integrate smart switches and automation without needing to redo your entire internal wiring in most cases."
        },
        {
            q: "How do you plan the electrical layout for a modular kitchen?",
            a: "We perform a detailed load analysis for all appliances (chimney, oven, fridge). We then strategically place high-amperage points and under-cabinet LED strips for maximum functionality."
        },
        {
            q: "What's the best way to hide messy cables in a TV unit?",
            a: "We design custom back-panels with internal channels for wire management. This ensures your luxury TV unit looks clean and wireless, with easy access to ports when needed."
        }
    ];

    // Reset chat when closed
    useEffect(() => {
        if (!isOpen) {
            setMessages(initialMessages);
        }
    }, [isOpen]);

    // Scroll to bottom whenever messages or typing state change
    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping, isOpen]);

    const handleFaqClick = (faq: { q: string, a: string }) => {
        const userMsg: Message = { id: Date.now(), text: faq.q, sender: "user" };
        setMessages((prev) => [...prev, userMsg]);

        // Show typing indicator
        setIsTyping(true);

        // Simulate bot response after delay
        setTimeout(() => {
            const botMsg: Message = { id: Date.now() + 1, text: faq.a, sender: "bot" };
            setMessages((prev) => [...prev, botMsg]);
            setIsTyping(false);
        }, 1200);
    };

    return (
        <div className="fixed bottom-[160px] right-6 z-50 flex flex-col items-end">
            {/* Chat Window */}
            {isOpen && (
                <div className="mb-4 w-[310px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col animate-fade-in translate-y-[-10px] max-h-[min(550px,calc(100vh-240px))]">
                    {/* Header */}
                    <div className="bg-secondary p-3 text-white flex justify-between items-center shadow-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center font-bold text-xs uppercase text-secondary">NG</div>
                            <div>
                                <h4 className="font-bold text-xs leading-none">NextGen AI Assistant</h4>
                                <div className="flex items-center gap-1 mt-1">
                                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                                    <p className="text-[9px] opacity-80 leading-none">Online | Electrical Expert</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <button
                                onClick={() => setMessages(initialMessages)}
                                className="p-1.5 hover:bg-white/10 rounded-full transition-colors"
                                title="Reset Chat"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                </svg>
                            </button>
                            <button onClick={() => setIsOpen(false)} className="p-1.5 hover:bg-white/10 rounded-full transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                    </div>

                    {/* Messages Area */}
                    <div className="flex-grow p-4 space-y-4 overflow-y-auto bg-gray-50/50 scroll-smooth custom-scrollbar">
                        {messages.map((msg) => (
                            <div key={msg.id} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                                <div className={`max-w-[85%] p-3.5 rounded-2xl text-xs leading-relaxed shadow-sm ${msg.sender === "user"
                                    ? "bg-primary text-white rounded-tr-none border border-primary/20"
                                    : "bg-white text-gray-700 rounded-tl-none border border-gray-100"
                                    }`}>
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white p-3 rounded-2xl rounded-tl-none border border-gray-100 shadow-sm flex gap-1.5">
                                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce"></span>
                                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                                    <span className="w-1.5 h-1.5 bg-primary/40 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                                </div>
                            </div>
                        )}

                        {/* Infinite Suggestion Chips - Always at the bottom */}
                        {!isTyping && (
                            <div className="flex flex-col gap-2 w-full mt-4 animate-fade-in">
                                <p className="text-[10px] text-gray-400 uppercase font-bold tracking-wider px-1 text-center">Suggested Questions:</p>
                                <div className="flex flex-col gap-2">
                                    {faqs.map((faq, idx) => (
                                        <button
                                            key={idx}
                                            onClick={() => handleFaqClick(faq)}
                                            className="w-full text-left text-[11px] bg-white hover:bg-primary/5 hover:text-primary p-3 rounded-xl border border-gray-200 transition-all shadow-sm hover:border-primary/30 active:scale-[0.98] duration-200"
                                        >
                                            {faq.q}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        <div ref={messagesEndRef} />
                    </div>

                    <div className="p-3 bg-white border-t border-gray-100 text-center">
                        <p className="text-[9px] text-gray-400 font-medium">NextGen Interior © 2026</p>
                    </div>
                </div>
            )}

            {/* Floating Toggle Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer ${isOpen ? "bg-secondary text-primary" : "bg-primary text-secondary"
                    }`}
                aria-label="Toggle AI Chatbot"
            >
                {isOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                    </svg>
                )}
            </button>
            <style jsx global>{`
                .custom-scrollbar::-webkit-scrollbar {
                    width: 4px;
                }
                .custom-scrollbar::-webkit-scrollbar-track {
                    background: transparent;
                }
                .custom-scrollbar::-webkit-scrollbar-thumb {
                    background: #eee;
                    border-radius: 10px;
                }
            `}</style>
        </div>
    );
}
