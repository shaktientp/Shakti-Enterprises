import React from "react";

// Sample testimonials data
const testimonialsData = [
  {
    id: 1,
    name: "Aditi Singh",
    location: "Lucknow, Uttar Pradesh",
    message:
      "This product has revolutionized our workflow and increased productivity!",
    avatar: "https://i.pravatar.cc/150?img=11",
  },
  {
    id: 2,
    name: "Aarav Patel",
    location: "Kanpur, Uttar Pradesh",
    message:
      "Incredible value for the price. It's a must-have for professionals in any field.",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 3,
    name: "Ananya Gupta",
    location: "Varanasi, Uttar Pradesh",
    message:
      "The results were clear, professional, and compelling. We couldn't be happier with the service.",
    avatar: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 4,
    name: "Arjun Sharma",
    location: "Allahabad, Uttar Pradesh",
    message:
      "Their attention to detail and the quality of their work is unmatched. Highly recommend!",
    avatar: "https://i.pravatar.cc/150?img=14",
  },
];

function Testimonials() {
  return (
    <div className="">
      <div className="mx-auto">
        <div className="text-center">
          <h2 className="text-5xl font-bold text-center text-cyan-600 mb-5">
            What Our Customers Say
          </h2>
          <p className="text-gray-600 text-2xl">
            Testimonials from our clients
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonialsData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 shadow-lg rounded-lg">
              <img
                src={testimonial.avatar}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full mx-auto"
              />
              <div className="mt-4 text-center">
                <p className="text-2xl text-gray-800 font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-lg text-gray-600 ">{testimonial.location}</p>
                <p className="mt-4 text-gray-600 text-lg">
                  {testimonial.message}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
