import React from 'react';


const About = () => {
    return (
        <section className="bg-gray-100 text-gray-800 p-6">
            <div className="container mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold mb-4">About Us</h2>

                {/* Paragraph Section */}
                <p className="text-lg mb-4">
                    We are committed to delivering the best services to our customers.
                    Our team is dedicated to providing exceptional solutions that cater
                    to your business needs. With years of experience in the industry, we
                    strive to innovate and bring value to every project.
                </p>

                {/* Additional Paragraph or Information */}
                <p className="text-lg">
                    Our mission is to help businesses succeed by offering high-quality services.
                    Whether you are looking for consulting, development, or support, we are here
                    to assist you in every step of the way.
                </p>
            </div>
        </section>
    );
};

export default About;
