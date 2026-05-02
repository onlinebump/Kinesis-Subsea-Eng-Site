"use client";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
type NavLink = { href: string; label: string };

interface ContentPayload {
  title?: string;
  subtitle?: string;
  links?: NavLink[];
  actions?: React.ReactNode;
}

interface SectorBannerProps {
  // new single content param (preferred)
  content?: ContentPayload;

  // kept for backwards compatibility (optional)
  title?: string;
  subtitle?: string;
  links?: NavLink[];

  // visual props
  bgImage?: string; // URL
  height?: string; // Tailwind height class or inline fallback

  // fully custom inner content (if provided, it wins)
  children?: React.ReactNode;
}

export default function SectorBanner({
  content,
  title: titleProp,
  subtitle: subtitleProp,
  links: linksProp = [],
  bgImage,
  height = "h-72 sm:h-96 lg:h-[520px]",
  children,
}: SectorBannerProps): React.ReactElement {
  const bgRef = useRef<HTMLDivElement | null>(null);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOffsetY(window.scrollY || 0);
    };
    
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // Set initial value

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // parallax strength
  const parallax = Math.min(
    0.18,
    0.12 + (Array.isArray(linksProp) ? linksProp.length * 0.01 : 0)
  );
  const translate = `translate3d(0, ${-offsetY * parallax}px, 0)`;

  // merge content object with legacy props (content wins when provided)
  const payload: ContentPayload = {
    title: content?.title ?? titleProp,
    subtitle: content?.subtitle ?? subtitleProp,
    links: content?.links ?? linksProp,
    actions: content?.actions,
  };

  return (
    <section
      className={`relative overflow-hidden ${height} w-full`}
      aria-labelledby="sector-title"
    >
      {/* Background image with parallax */}
      <div
        ref={bgRef}
        aria-hidden
        className="absolute bg-white inset-0 will-change-transform bg-center"
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : undefined,
          backgroundSize: "cover", // use cover to maintain aspect ratio
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          transform: translate,
        }}
      >
        {/* Soft overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 h-full flex items-center">
        <div className="py-8 sm:py-12 md:py-16 w-full">
          <div className="max-w-3xl">
            {/* If custom children provided, render them and skip default layout */}
            {children ? (
              children
            ) : (
              <>
                <nav
                  className="flex flex-wrap gap-2 mb-4"
                  aria-label="breadcrumb"
                >
                  {(payload.links ?? []).map((l) => (
                    <Link
                      key={l.href}
                      href={l.href}
                      className="inline-block bg-white/10 text-white/90 px-3 py-1 rounded-md text-xs font-semibold hover:bg-white/20 transition"
                    >
                      {l.label}
                    </Link>
                  ))}
                </nav>

                <h1
                  id="sector-title"
                  className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight mb-3"
                >
                  {payload.title}
                </h1>

                {payload.subtitle && (
                  <p className="text-white/90 max-w-2xl text-base sm:text-lg mb-6">
                    {payload.subtitle}
                  </p>
                )}

                <div className="flex items-center gap-4">
                  {payload.actions ?? (
                    <Link
                      href="/our-services"
                      className="inline-flex items-center gap-2 bg-white text-black px-4 py-3 rounded-md font-semibold shadow-lg hover:shadow-xl transition"
                      aria-label="Explore solutions"
                    >
                      Services
                      <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
