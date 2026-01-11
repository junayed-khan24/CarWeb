const Contact = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-primary">Contact Us</h2>
          <p className="mt-3 text-gray-500">
            Need a car or have questions? Get in touch with us today.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="card bg-base-100 shadow-lg">
              <div className="card-body">
                <h3 className="text-2xl font-semibold">CarRental Support</h3>
                <p className="text-gray-500">
                  Our team is ready to help you choose the perfect ride.
                </p>

                <div className="space-y-2 mt-4">
                  <p>📍 Address: Dhaka, Bangladesh</p>
                  <p>📞 Phone: +880 1234 567 890</p>
                  <p>✉️ Email: support@carrental.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card bg-base-100 shadow-lg">
            <div className="card-body">
              <h3 className="text-2xl font-semibold mb-4">Send Message</h3>

              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full"
                />

                <textarea
                  placeholder="Your Message"
                  className="textarea textarea-bordered w-full h-32"
                ></textarea>

                <button className="btn btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
