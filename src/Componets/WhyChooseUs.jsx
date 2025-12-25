import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-600">
            Why Choose Us
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            We provide a smooth car buying or renting experience with great
            vehicle options, clear pricing, and friendly customer support.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Left Features */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-green-500 text-3xl">🚗</div>
              <div>
                <h4 className="font-semibold text-gray-600">
                  Wide Selection of Vehicles
                </h4>
                <p className="text-gray-400 text-sm">
                  Choose from a diverse range of cars to suit your needs,
                  whether for daily use or travel.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-green-500 text-3xl">💰</div>
              <div>
                <h4 className="font-semibold text-gray-600">
                  Transparent Pricing
                </h4>
                <p className="text-gray-400 text-sm">
                  No hidden fees, clear pricing with the best value for your
                  budget.
                </p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          <div className="flex justify-center">
            <div className="rounded-full border border-gray-300 p-4 shadow-lg">
              <img
                src="../../src/assets/car2-removebg.PNG"
                alt="Car"
                className="w-64 md:w-82 object-contain"
              />
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="text-green-500 text-3xl">📄</div>
              <div>
                <h4 className="font-semibold text-gray-600">
                  Flexible Financing Options
                </h4>
                <p className="text-gray-400 text-sm">
                  Get flexible financing plans that suit your budget and needs.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-green-500 text-3xl">🤝</div>
              <div>
                <h4 className="font-semibold text-gray-600">
                  Exceptional Customer Service
                </h4>
                <p className="text-gray-400 text-sm">
                  Our team ensures fast support and a smooth experience from
                  start to finish.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
