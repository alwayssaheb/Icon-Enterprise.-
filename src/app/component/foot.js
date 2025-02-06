import React from "react";

const Footer = () => {
  return (
   <footer id="contact"className="bg-black text-orange-500 py-12">
      <div className="container mx-auto px-6">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Phone Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold uppercase tracking-wider mb-4">
              Phone Number
            </h3>
            <p className="text-base">
              <a href="tel:+919825043042" className="hover:underline">
                +91 98250 43042
              </a>
            </p>
            <p className="text-base">
              <a href="tel:+919825042998" className="hover:underline">
                +91 98250 42998
              </a>
            </p>
          </div>

          {/* Email Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold uppercase tracking-wider mb-4">
              Email
            </h3>
            <p className="text-base">
              <a
                href="mailto:amar_coating@yahoo.com"
                className="hover:underline"
              >
                amar_coating@yahoo.com
              </a>
            </p>
          </div>

          {/* Address Section */}
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold uppercase tracking-wider mb-4">
              Address
            </h3>
            <p className="text-base text-center">
              AMAR ENTERPRISES
              <br />
              F/28, 1st Floor Royal Complex, Valia Chokdi
              <br />
              GIDC, Ankleshwar - 393002
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-gray-700"></div>

        {/* Footer Bottom */}
        <div className="text-center text-sm text-orange-400">
          <p>
            © {new Date().getFullYear()} <span className="font-bold">ICON ENTERPRISES</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
