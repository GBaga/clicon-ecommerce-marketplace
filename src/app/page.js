// app/page.js
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 font-sans antialiased">
      {/* About Us Section */}
      <section
        id="about"
        className="py-20 md:py-28 bg-white shadow-sm pt-[80px]"
      >
        {" "}
        {/* Added pt-[80px] to account for fixed header */}
        <div className="container mx-auto px-6 max-w-3xl">
          <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-8">
            About Us
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            Welcome to <strong className="font-semibold">Our Company</strong>!
            We are dedicated to providing innovative solutions and exceptional
            service to our clients. With years of experience in the industry,
            our team of experts is committed to excellence and customer
            satisfaction. We believe in building strong relationships and
            delivering results that exceed expectations.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is to empower businesses and individuals through
            cutting-edge technology and reliable support. We strive to create a
            positive impact on the world by fostering creativity, collaboration,
            and continuous improvement.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-gray-50 shadow-sm">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Web Development
              </h3>
              <p className="text-gray-600 leading-relaxed">
                We offer comprehensive web development services, from custom
                website design to robust e-commerce solutions. Our team uses the
                latest technologies to create responsive, user-friendly, and
                high-performing websites tailored to your specific needs.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Digital Marketing
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Boost your online presence with our digital marketing
                strategies. We specialize in SEO, social media marketing,
                content creation, and paid advertising to help you reach your
                target audience and achieve your business goals.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 transform hover:-translate-y-1">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                IT Consulting
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Gain expert advice and solutions for your IT infrastructure. Our
                consulting services cover network security, cloud solutions,
                system optimization, and technical support to ensure your
                operations run smoothly and efficiently.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-white shadow-sm">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-12">
            Contact Us
          </h2>
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <p className="text-lg text-gray-700 text-center mb-6">
              Have a question or want to start a project? We'd love to hear from
              you!
            </p>
            <div className="text-center mb-8">
              <p className="text-lg text-gray-800 font-semibold mb-2">
                Email:{" "}
                <a
                  href="mailto:info@ourcompany.com"
                  className="text-blue-600 hover:underline"
                >
                  info@ourcompany.com
                </a>
              </p>
              <p className="text-lg text-gray-800 font-semibold mb-2">
                Phone:{" "}
                <a
                  href="tel:+15551234567"
                  className="text-blue-600 hover:underline"
                >
                  +1 (555) 123-4567
                </a>
              </p>
              <p className="text-lg text-gray-800 font-semibold">
                Address: 123 Business Lane, Suite 400, City, State, 12345
              </p>
            </div>

            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-y"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-gray-800 hover:bg-gray-700 text-white font-bold py-3 px-8 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-600 focus:ring-offset-2 transition-colors duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
