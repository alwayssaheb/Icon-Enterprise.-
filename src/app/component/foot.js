"use client";

import React from "react";

const GOOGLE_ADS_SEND_TO = "AW-971710724/m25rCMTgj4QcEITCrM8D";

function trackConversionAndGo(url) {
  if (typeof window === "undefined") return;

  const navigate = () => {
    window.location.href = url;
  };

  if (typeof window.gtag !== "function") {
    navigate();
    return;
  }

  let hasNavigated = false;

  const safeNavigate = () => {
    if (hasNavigated) return;
    hasNavigated = true;
    navigate();
  };

  window.gtag("event", "conversion", {
    send_to: GOOGLE_ADS_SEND_TO,
    event_callback: safeNavigate,
  });

  window.setTimeout(safeNavigate, 800);
}

function handleTrackedLinkClick(e, url) {
  e.preventDefault();
  trackConversionAndGo(url);
}

const Footer = () => {
  return (
    <footer id="contact" className="bg-black text-orange-500 py-12">
      <div className="container mx-auto px-6">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-wider">
            Koti Engineers Private Limited
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold uppercase tracking-wider mb-4">
              Call
            </h3>
            <p className="text-base">
              <a
                href="tel:+917202085555"
                className="hover:underline"
                onClick={(e) =>
                  handleTrackedLinkClick(e, "tel:+917202085555")
                }
              >
                +91 7202085555
              </a>
            </p>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold uppercase tracking-wider mb-4">
              Email
            </h3>

            <div className="text-base text-center space-y-1">
              <a
                href="mailto:Kotiepl184@gmail.com"
                className="hover:underline block"
                onClick={(e) =>
                  handleTrackedLinkClick(e, "mailto:Kotiepl184@gmail.com")
                }
              >
                Kotiepl184@gmail.com
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h3 className="text-xl font-semibold uppercase tracking-wider mb-4">
              Address
            </h3>
            <p className="text-base text-center">
              Plot no 336/35/07,
              <br />
              GIDC Estate,
              <br />
              Makarpura,
              <br />
              Vadodara 390 01p
              <br />
              India
            </p>
          </div>
        </div>

        <div className="my-10 border-t border-gray-700"></div>

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