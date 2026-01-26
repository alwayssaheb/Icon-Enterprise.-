import React from "react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-orange-500 py-12">
      <div className="container mx-auto px-6">
        {/* Company Name */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider">
            Koti Engineers Private Limited
          </h2>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Phone Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold uppercase tracking-wider mb-4">
              Call
            </h3>
            <p className="text-base">
              <a href="tel:+917202085555" className="hover:underline">
                +91 7202085555
              </a>
            </p>
          </div>

          {/* Email Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold uppercase tracking-wider mb-4">
              Email
            </h3>

            {/* Emails stacked */}
            <div className="text-base text-center space-y-1">
              <a
                href="mailto:Kotiepl184@gmail.com"
                className="hover:underline block"
              >
                Kotiepl184@gmail.com
              </a>
            </div>
          </div>

          {/* Address / Info Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold uppercase tracking-wider mb-4">
              Address
            </h3>
            <p className="text-base text-center">
              {/* Replace this with your real address */}
              Plot no 336/35/07,
GIDC Estate,
Makarpura,
Vadodara 390 01p
              <br />
              India
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-700"></div>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-orange-400">
          <p>
            © 1990 <span className="font-bold">Koti Engineers Pvt. Ltd.</span>.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
