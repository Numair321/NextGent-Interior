"use client";
import { useState } from "react";

export default function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch("https://formsubmit.co/ajax/zaidmalik83774@gmail.com", {
                method: "POST",
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("success");
                (e.target as HTMLFormElement).reset();
            } else {
                setStatus("error");
            }
        } catch (err) {
            setStatus("error");
        }
    }

    return (
        <section id="contact" className="py-20 bg-muted">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-secondary mb-4">Contact Us</h2>
                    <p className="text-gray-500">Get in touch to build your dream space.</p>
                </div>

                <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl overflow-hidden md:flex">
                    {/* Info Side */}
                    <div className="bg-secondary text-white p-8 md:w-1/3 flex flex-col justify-center">
                        <h3 className="text-xl font-bold mb-6 text-primary">NextGen Interior</h3>
                        <div className="space-y-4 text-sm text-gray-300">
                            <p><strong>Zaid Malik</strong></p>
                            <p>Thanisandra Main Road, near Medina Tea Corner, Bangalore</p>
                            <p>Email: zm09831@gmail.com</p>
                            <p>Phone: 9580591558</p>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="p-8 md:w-2/3">
                        {status === "success" ? (
                            <div className="h-full flex flex-col items-center justify-center text-center p-6">
                                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4 text-3xl">✓</div>
                                <h3 className="text-2xl font-bold text-secondary mb-2">Message Sent!</h3>
                                <p className="text-gray-500">Thank you for contacting us. We will get back to you shortly.</p>
                                <button
                                    onClick={() => setStatus("idle")}
                                    className="mt-6 text-primary font-semibold hover:underline"
                                >
                                    Send another message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4">
                                <input type="hidden" name="_subject" value="New Inquiry from NextGen Interior Website" />
                                <input type="hidden" name="_template" value="table" />
                                <input type="hidden" name="_captcha" value="false" />

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Name"
                                        required
                                        className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary transition-colors"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email"
                                        required
                                        className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary transition-colors"
                                    />
                                </div>
                                <input
                                    type="text"
                                    name="phone"
                                    placeholder="Phone"
                                    className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary transition-colors"
                                />
                                <textarea
                                    name="message"
                                    placeholder="Message"
                                    rows={4}
                                    required
                                    className="w-full px-4 py-3 rounded bg-gray-50 border border-gray-200 focus:outline-none focus:border-primary transition-colors"
                                ></textarea>

                                {status === "error" && (
                                    <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                                )}

                                <button
                                    type="submit"
                                    disabled={status === "submitting"}
                                    className="w-full bg-primary text-white font-bold py-3 rounded hover:bg-yellow-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                                >
                                    {status === "submitting" ? "Sending..." : "Send Message"}
                                </button>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
