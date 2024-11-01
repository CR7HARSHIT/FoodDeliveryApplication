import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">About Khana Lelo</h1>
        <p className="text-gray-600 text-lg mb-8">
          Welcome to <span className="text-yellow-600 font-semibold">Khana Lelo</span> – your reliable, fast, and efficient food delivery service based in Jaipur, Rajasthan! At Khana Lelo, we are passionate about connecting people with their favorite meals from the best local restaurants. Whether you crave traditional Rajasthani cuisine, Indian street food, or continental flavors, we bring it right to your doorstep with care and convenience.
        </p>
      </div>
      
      <div className="max-w-4xl mx-auto text-center mt-10">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
        <p className="text-gray-600 mb-6">
          Our mission is simple: to make your dining experience enjoyable, convenient, and accessible. We strive to support local businesses by partnering with a diverse range of restaurants, helping them reach more customers and thrive in the digital world.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Why Choose Us?</h2>
        <ul className="list-disc list-inside text-left text-gray-600 space-y-2 mb-6 mx-auto">
          <li>Wide variety of cuisines to satisfy every craving.</li>
          <li>Easy-to-use platform that makes ordering a breeze.</li>
          <li>Fast and reliable delivery with live tracking.</li>
          <li>Secure payment options for peace of mind.</li>
          <li>Special discounts and offers for regular customers.</li>
        </ul>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h2>
        <p className="text-gray-600 mb-6">
          At Khana Lelo, we are committed to quality, integrity, and customer satisfaction. Our team works hard to ensure that every order meets our high standards, from fresh ingredients to timely delivery. We value transparency and continually seek feedback to improve your experience.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Meet Our CEO</h2>
        <p className="text-gray-600 mb-6">
          <strong>Harshvardhan Singh Rao</strong> founded Bhukkad Box with a vision to redefine food delivery in Jaipur. His dedication to quality, innovation, and customer satisfaction drives our commitment to provide you with the best food delivery experience.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
