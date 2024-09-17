// Header.tsx
import React from 'react';

const Header = () => {
    return (
        // <header>
        //     <h1>This is the Header</h1>
        //     <p> </p>
        // </header>
        <header className="bg-black-600 text-black p-5 shadow-md">
            <div className="container mx-auto flex flex-col items-center text-center">
                {/* Logo Section */}
                <div className="text-3xl font-bold mb-2">
                    <a href="/">My Website</a>
                </div>

                {/* Navigation Links */}
                <nav className="mb-4">
                    <ul className="flex space-x-6">
                        <li><a href="/" className="hover:underline">Home</a></li>
                        <li><a href="/about" className="hover:underline">About</a></li>
                        <li><a href="/services" className="hover:underline">Services</a></li>
                        <li><a href="/contact" className="hover:underline">Contact</a></li>
                    </ul>
                </nav>

                {/* Paragraph Section */}
                <p className="text-lg max-w-xl">
                    Welcome to our website! We offer a wide range of services tailored to meet your needs.
                    Explore our website to learn more about how we can help you.
                </p>
            </div>
        </header>
        
    );
};
    


export default Header;
