import React from "react";

const About = () => {
  return (
    <div className="py-16 px-8 sm:px-12 lg:px-16 container">
      <div className="mx-auto sm:px-12 lg:px-16 mt-10">
        <div className="lg:text-center">
          <h2 className="text-2xl text-indigo-600 font-semibold tracking-wide uppercase pt-5">
            About Us
          </h2>
          <p className="mt-8 text-4xl leading-10 font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Welcome to Our Company
          </p>
          <p className="mt-8 max-w-5lg text-3xl text-gray-500 leading-relaxed lg:mx-auto">
            Welcome to Shakti Enterprises, your trusted partner for all
            construction needs. We provide high-quality materials like cement,
            bricks, gitti, and baalu at competitive prices. Our commitment to
            reliability and exceptional service makes us the preferred choice
            for budget-friendly construction solutions. Alongside top-tier
            materials, we offer specialized services including Construction
            Architecture Planning, Interior Designing, and Land Development &
            Town Planning. Choose Shakti Enterprises to ensure your project’s
            success with expert guidance and superior resources. Let us help you
            build your vision from the ground up.
          </p>
        </div>
        <div className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div className="flex items-center justify-center">
              <img
                className="max-h-[40rem] w-auto object-cover shadow-lg"
                src="Shakti About Us.png"
                alt="About Us"
              />
            </div>
            <div>
              <h3 className="text-4xl font-semibold text-gray-900">Our Work</h3>
              <p className="mt-10 text-2xl text-gray-500">
                We specialize in residential and commercial construction,
                architectural planning, interior design, and the manufacturing
                of precast cement products
              </p>
              <h3 className="mt-16 text-4xl font-semibold text-gray-900">
                Age of Working
              </h3>
              <p className="mt-10 text-2xl text-gray-500">
                We are manufacturing precaust cement product from 2015. And
                start our construction related services from 2022
              </p>
              {/* Owner Section */}
              <div className="mt-16">
                <h3 className="text-4xl font-semibold text-gray-900">
                  Founder
                </h3>
                <div className="flex items-center mt-12">
                  <img
                    className="h-24 w-24 rounded-full mr-8"
                    src="Profile.png"
                    alt="Owner"
                  />
                  <div>
                    <p className="text-2xl font-semibold text-gray-900">
                      Ranjeet Pratap Singh
                    </p>
                    <p className="text-xl text-gray-500">
                      Founder of Shakti Enterprises
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
