// import App from "next/app";

// export default function Home() {
//   return (
//     <>
//       <center>MY HELLO WORLD PROJECT</center>
//     </>
//   );
// }

// page.tsx
import React from 'react';
import Header from './components/Header'; // Correct path to Header.tsx
import About from './components/about';   // Correct path to about.tsx
import image from './images.jpeg';

const Page = () => {
    return (
        <>
            {/* <Header />  {/* Header component will be displayed here */}
            
            <div>
            {/* Header Section */}
            <Header />

            {/* Main Content */}
            <main className="bg-white py-8">
                <div className="container mx-auto text-center">
                    {/* Main Page Title */}
                    <h1 className="text-4xl font-bold mb-6">Welcome to Our Website</h1>

                    {/* Main Page Intro Paragraph */}
                    <p className="text-lg text-gray-700 mb-12">
                        Explore our services and learn more about how we can help your business grow.
                        We provide a wide range of solutions to meet your needs.
                    </p>
                </div>

                {/* About Section */}
                <About />
            </main>

            {/* Optional: Footer */}
            <footer className="bg-gray-800 text-white py-4 text-center">
                <p>&copy; 2024 Neha Bilal. All rights reserved.</p>
            </footer>
        </div>  
        </>
    );
};

export default Page;


