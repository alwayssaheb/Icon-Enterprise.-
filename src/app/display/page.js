"use client";

import Image from "next/image";
import services from "../../../products/products.json";
import { useEffect, useState } from "react";

const GOOGLE_ADS_SEND_TO = "AW-971710724/m25rCMTgj4QcEITCrM8D";

function trackConversionAndRun(action) {
  if (typeof window === "undefined") return;

  if (typeof window.gtag !== "function") {
    action();
    return;
  }

  let hasRun = false;

  const safeAction = () => {
    if (hasRun) return;
    hasRun = true;
    action();
  };

  window.gtag("event", "conversion", {
    send_to: GOOGLE_ADS_SEND_TO,
    event_callback: safeAction,
  });

  window.setTimeout(safeAction, 800);
}

function triggerDownload(href, fileName) {
  const link = document.createElement("a");
  link.href = href;
  link.setAttribute("download", fileName || "");
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function handleTrackedDownload(e, href, fileName, extraOnClick) {
  if (extraOnClick) {
    extraOnClick(e);
  }

  e.preventDefault();

  trackConversionAndRun(() => {
    triggerDownload(href, fileName);
  });
}

function handleTrackedPhoneClick(e, phoneUrl) {
  e.preventDefault();

  trackConversionAndRun(() => {
    window.location.href = phoneUrl;
  });
}

function SectionTitle({ title, subtitle }) {
  return (
    <div className="text-center mb-8">
      <p className="inline-flex items-center rounded-full bg-orange-500/10 text-orange-600 px-4 py-1 text-xs font-semibold tracking-wide">
        PRODUCTS
      </p>
      <h1 className="mt-3 text-2xl sm:text-3xl font-extrabold text-gray-900">
        {title}
      </h1>
      {subtitle ? (
        <p className="mt-2 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function DownloadBrochureButton({
  href,
  fileName,
  className = "",
  onClick,
  variant = "solid",
}) {
  if (!href) return null;

  const base =
    "inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-xs sm:text-sm font-semibold transition focus:outline-none focus:ring-2 focus:ring-orange-500/40";
  const solid =
    "bg-orange-500 text-black shadow-sm hover:shadow-md hover:opacity-95";
  const outline =
    "bg-white text-gray-900 border border-gray-300 hover:bg-gray-50";

  return (
    <a
      href={href}
      download={fileName || true}
      onClick={(e) => handleTrackedDownload(e, href, fileName, onClick)}
      className={`${base} ${
        variant === "outline" ? outline : solid
      } ${className}`}
      aria-label="Download brochure"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 sm:h-5 sm:w-5"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
        <path d="M7 10l5 5 5-5" />
        <path d="M12 15V3" />
      </svg>
      Download Brochure
    </a>
  );
}

function KVPairs({ title, rows }) {
  const safeRows = Array.isArray(rows) ? rows : [];
  if (!safeRows.length) return null;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden">
      <div className="px-4 sm:px-5 py-3 bg-gray-50 border-b border-gray-200">
        <h3 className="text-sm sm:text-base font-semibold text-gray-900">
          {title}
        </h3>
      </div>

      <div className="p-4 sm:p-5">
        <div className="space-y-3 md:hidden">
          {safeRows.map((row, idx) => (
            <div
              key={idx}
              className="rounded-xl border border-gray-200 bg-white p-3"
            >
              <div className="text-xs font-semibold text-gray-900">
                {row?.[0] ?? "\u00A0"}
              </div>
              <div className="mt-1 text-sm text-gray-700">
                {row?.[1] ?? "\u00A0"}
              </div>
            </div>
          ))}
        </div>

        <div className="hidden md:block overflow-x-auto">
          <table className="w-full border-collapse">
            <tbody>
              {safeRows.map((row, idx) => (
                <tr
                  key={idx}
                  className={idx % 2 === 0 ? "bg-white" : "bg-gray-50"}
                >
                  <td className="w-[34%] min-w-[220px] px-4 py-3 font-semibold text-gray-900 border-t border-gray-200 align-top">
                    {row?.[0] ?? "\u00A0"}
                  </td>
                  <td className="px-4 py-3 text-gray-700 border-t border-gray-200 align-top">
                    {row?.[1] ?? "\u00A0"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function ProductModal({ open, onClose, product }) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const title = product?.category || "Product Details";
  const desc = product?.description || "";

  const usageTitle = product?.usageTable?.title || "Usage";
  const usageRows = product?.usageTable?.rows || [];

  const specTitle = product?.specTable?.title || "Specification";
  const specRows = product?.specTable?.rows || [];

  const brochureHref = product?.brochure;
  const brochureName = `${title.replace(/\s+/g, "-")}-Brochure.pdf`;

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] bg-black/50 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 md:flex md:items-center md:justify-center">
        <div
          onClick={(e) => e.stopPropagation()}
          className="
            absolute bottom-0 left-0 right-0
            md:static md:w-full md:max-w-5xl
            bg-white
            rounded-t-3xl md:rounded-3xl
            shadow-2xl
            overflow-hidden
            h-[92vh] md:h-auto md:max-h-[85vh]
            flex flex-col
          "
        >
          <div className="shrink-0 bg-white border-b border-gray-200">
            <div className="px-4 sm:px-6 py-4 flex items-start gap-4">
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl border border-gray-200 bg-white overflow-hidden flex-shrink-0">
                {product?.url ? (
                  <Image
                    src={product.url}
                    alt={title}
                    fill
                    sizes="80px"
                    className="object-contain p-2"
                    priority
                  />
                ) : null}
              </div>

              <div className="min-w-0 flex-1">
                <h2 className="text-lg sm:text-2xl font-extrabold text-gray-900 leading-tight">
                  {title}
                </h2>
                {desc ? (
                  <p className="mt-2 text-sm sm:text-base text-gray-600">{desc}</p>
                ) : null}
              </div>

              <button
                onClick={onClose}
                className="rounded-full p-2 bg-gray-100 hover:bg-gray-200 transition flex-shrink-0"
                aria-label="Close"
              >
                ✖
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 sm:px-6 py-5 space-y-5">
            <KVPairs title={usageTitle} rows={usageRows} />
            <KVPairs title={specTitle} rows={specRows} />
            <div className="h-2" />
          </div>

          <div
            className="
              shrink-0 border-t border-gray-200 bg-white
              px-4 sm:px-6 pt-4 pb-4
              pb-[calc(1rem+env(safe-area-inset-bottom))]
            "
          >
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center justify-center rounded-full bg-orange-500 px-5 py-3 text-sm font-semibold text-black hover:opacity-95 transition focus:outline-none focus:ring-2 focus:ring-orange-500/40"
              >
                Enquire Now
              </a>

              <a
                href="tel:+917202085555"
                onClick={(e) => handleTrackedPhoneClick(e, "tel:+917202085555")}
                className="inline-flex items-center justify-center rounded-full border border-gray-300 bg-white px-5 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-50 transition focus:outline-none focus:ring-2 focus:ring-orange-500/40"
              >
                Call +91 7202085555
              </a>

              <DownloadBrochureButton
                href={brochureHref}
                fileName={brochureName}
                variant="outline"
                className="w-full"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProductCard({ product, onOpen }) {
  const brochureHref = product?.brochure;
  const brochureName = `${(product?.category || "Product").replace(/\s+/g, "-")}-Brochure.pdf`;

  return (
    <div className="rounded-2xl border border-gray-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition">
      <button
        type="button"
        onClick={() => onOpen(product)}
        className="group w-full text-left focus:outline-none focus:ring-2 focus:ring-orange-500/40"
      >
        <div className="relative w-full h-52 sm:h-56 bg-white">
          <Image
            src={product.url}
            alt={product.category}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-[1.03]"
          />
          <div className="absolute inset-x-0 bottom-0 p-3">
            <div className="inline-flex items-center rounded-full bg-black/70 text-white px-3 py-1 text-xs font-semibold">
              Tap to view details
            </div>
          </div>
        </div>

        <div className="p-4 bg-white">
          <h3 className="text-base sm:text-lg font-bold text-gray-900">
            {product.category}
          </h3>
          <p className="mt-2 text-sm text-gray-600 line-clamp-3">
            {product.description}
          </p>
        </div>
      </button>

      <div className="px-4 pb-4">
        <DownloadBrochureButton
          href={brochureHref}
          fileName={brochureName}
          className="w-full"
        />
      </div>
    </div>
  );
}

export default function Page() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openModal = (product) => {
    setSelected(product);
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <section id="services" className="scroll-mt-24 bg-gray-100">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <SectionTitle
          title="Our Products"
          subtitle="Explore our industrial pump range. Tap any product to view detailed usage and specifications."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((p, idx) => (
            <ProductCard key={idx} product={p} onOpen={openModal} />
          ))}
        </div>
      </div>

      <ProductModal open={open} onClose={closeModal} product={selected} />
    </section>
  );
}