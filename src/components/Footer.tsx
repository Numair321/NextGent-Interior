import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-secondary text-secondary-foreground">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0 max-w-sm">
                        <Link href="/" className="flex items-center">
                            <span className="self-center text-2xl font-serif font-semibold whitespace-nowrap text-white">
                                NextGen <span className="text-primary">Interior</span>
                            </span>
                        </Link>
                        <p className="mt-4 text-gray-400 font-sans text-sm leading-relaxed">
                            We operate in architecture and interior designing with a talented team. We combine quality, expertise, and experience to produce premium, stylish solutions.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase tracking-wider">Resources</h2>
                            <ul className="text-gray-400 font-medium space-y-3">
                                <li><Link href="#about" className="hover:text-primary transition-colors">About Us</Link></li>
                                <li><Link href="#services" className="hover:text-primary transition-colors">Services</Link></li>
                                <li><Link href="#projects" className="hover:text-primary transition-colors">Projects</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase tracking-wider">Follow us</h2>
                            <ul className="text-gray-400 font-medium space-y-3">
                                <li><a href="https://www.instagram.com/zaidmalik55?igsh=aHkxNWhlaWtsYTFp" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Instagram</a></li>
                                <li><a href="https://www.facebook.com/share/1C8B2cknN1/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">Facebook</a></li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase tracking-wider">Legal</h2>
                            <ul className="text-gray-400 font-medium space-y-3">
                                <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                                <li><a href="#" className="hover:text-primary transition-colors">Terms &amp; Conditions</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-400 sm:text-center">
                        © {new Date().getFullYear()} <a href="/" className="hover:underline">NextGen Interior</a>. All Rights Reserved.
                    </span>
                    <div className="flex mt-4 sm:justify-center sm:mt-0 space-x-5">
                        {/* Icons can be added here */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
