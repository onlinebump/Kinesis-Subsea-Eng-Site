"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  ChevronRight,
  ArrowRight,
  Globe,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Linkedin,
  Twitter,
} from "lucide-react";
import { desc } from "framer-motion/client";

const menuItems = [
  {
    title: "About",
    href: "/about",
    // submenu: [
    //   {
    //     title: "Purpose",
    //     href: "/who-we-are/purpose-beliefs",
    //     description: "Our mission and core values",
    //   },
    //   {
    //     title: "History",
    //     href: "/who-we-are/our-history",
    //     description: "Journey through the years",
    //   },
    //   {
    //     title: "Team",
    //     href: "/who-we-are/meet-our-team",
    //     description: "Meet our experts",
    //   },
    // ],
  },

  {
    title: "Sectors",
    href: "/sectors",
    submenu: [
      {
        title: "Oil & Gas",
        href: "/sectors/oil-and-gas",
        description: "Technical engineering solutions",
        subitems: [
          {
            title: "Sub-product 1",
            href: "#sub-product-1",
            description: "Description for Sub-product 1",
          },
          {
            title: "Sub-product 2",
            href: "#sub-product-2",
            description: "Description for Sub-product 2",
          },
          {
            title: "Sub-product 3",
            href: "#sub-product-3",
            description: "Description for Sub-product 3",
          },
        ],
      },
      {
        title: "Renewables",
        href: "/sectors/renewables",
        description: "Innovative product portfolio",
        subitems: [
          {
            title: "Sub-product A",
            href: "#sub-product-a",
            description: "Description for Sub-product A",
          },
          {
            title: "Sub-product B",
            href: "#sub-product-b",
            description: "Description for Sub-product B",
          },
          {
            title: "Sub-product C",
            href: "#sub-product-c",
            description: "Description for Sub-product C",
          },
        ],
      },
    ],
  },
  {
    title: "Services",
    href: "/our-services",
    submenu: [
      {
        title: "Engineering Design, Analysis & Simulation",
        href: "/our-services/subsea-engineering",
        description: "Technical engineering solutions",
        subitems: [
          {
            title: "Global Riser Analysis",
            href: "/our-services/oil-gas-rig",
            description: "Description for submenu item 1",
          },
          {
            title: "Mooring Analysis",
            href: "/our-services/oil-gas-rig",
            description: "Description for submenu item 2",
          },
          {
            title: "VIV & Fatigue Assessment",
            href: "/our-services/oil-gas-rig",
            description: "Description for submenu item 3",
          },
          {
            title: "Advance Finite Element Analysis (FEA)",
            href: "/our-services/oil-gas-rig",
            description: "Description for submenu item 4",
          },
          {
            title: "Pipeline & Installation",
            href: "/our-services/oil-gas-rig",
            description: "Description for submenu item 5",
          },
          {
            title: "Floating Offshore Wind",
            href: "/our-services/oil-gas-rig",
            description: "Description for submenu item 6",
          },
        ],
      },
      {
        title: "Specialist Advisor & Project Engineering",
        href: "/our-services/renewables-subsea",
        description:
          "Specialist advisory services and project engineering expertise",
      },
      {
        title: "Asset Integrity Management",
        href: "/our-services/renewables-subsea",
        description: "Expertise in managing complex projects",
      },
      {
        title: "Operation Support",
        href: "/our-services/renewables-subsea",
        description: "Safe and efficient decommissioning solutions",
      },
    ],
  },
  {
    title: "Projects",
    href: "/projects",
    // submenu: [
    //   {
    //     title: "Insights",
    //     href: "/what-we-deliver/news-insights",
    //     description: "Latest industry insights",
    //   },
    //   {
    //     title: "Innovations",
    //     href: "/what-we-deliver/our-innovations",
    //     description: "Cutting-edge solutions",
    //   },
    //   {
    //     title: "Markets",
    //     href: "/what-we-deliver/our-markets",
    //     description: "Global market presence",
    //   },
    //   {
    //     title: "Events",
    //     href: "/what-we-deliver/events",
    //     description: "Industry events & conferences",
    //   },
    //   {
    //     title: "Academy",
    //     href: "/what-we-deliver/kinesis-academy-for-operational-readiness",
    //     description: "Training & development programs",
    //   },
    // ],
  },
  {
    title: "News",
    href: "/news",
    // submenu: [
    //   {
    //     title: "People",
    //     href: "/sustainability/people",
    //     description: "Our commitment to our team",
    //   },
    //   {
    //     title: "Planet",
    //     href: "/sustainability/planet",
    //     description: "Environmental responsibility",
    //   },
    //   {
    //     title: "Principles",
    //     href: "/sustainability/principles",
    //     description: "Sustainable business practices",
    //   },
    // ],
  },
  // { title: "Contact", href: "/contact-us" },
];

type NavbarProps = { scrollY?: number };
export default function Navbar({ scrollY = 0 }: NavbarProps) {
  const router = useRouter();
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState<number | null>(null);
  const [clickedMenuIndex, setClickedMenuIndex] = useState<number | null>(null);
  const [clickedSubMenuIndex, setClickedSubMenuIndex] = useState<number | null>(
    null
  );
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const pathname = usePathname();
  // start scrolled if we're on a service detail page (e.g. /our-services/[slug])
  const startsOnServiceDetail = Boolean(
    pathname && pathname.startsWith("/our-services/")
  );
  const [isScrolled, setIsScrolled] = useState(startsOnServiceDetail);
  const [searchFocused, setSearchFocused] = useState(false);
  const navRef = useRef<HTMLElement | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const subCloseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // If we're on a service detail page, keep scrolled styles regardless of scroll
    if (startsOnServiceDetail) {
      setIsScrolled(true);
      return;
    }

    console.log("Navbar: scrollY changed to", scrollY);
    setIsScrolled(scrollY > 20);
  }, [scrollY, startsOnServiceDetail]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenMenuIndex(null);
        setOpenSubMenuIndex(null);
        setClickedMenuIndex(null);
        setClickedSubMenuIndex(null);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
      if (subCloseTimeoutRef.current) {
        clearTimeout(subCloseTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseEnter = (index: number) => {
    // Clear any existing timeout
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }

    // Only set open if not already clicked
    if (clickedMenuIndex !== index) {
      setOpenMenuIndex(index);
      setOpenSubMenuIndex(null); // Close any open submenu when switching main menus
    }
  };

  const handleMouseLeave = (index: number) => {
    // Only handle closing if the menu wasn't clicked
    if (clickedMenuIndex !== index) {
      // Set a timeout to close the menu after a delay
      closeTimeoutRef.current = setTimeout(() => {
        setOpenMenuIndex(null);
        setOpenSubMenuIndex(null);
      }, 500); // 500ms delay before closing
    }
  };

  const handleSubMenuMouseEnter = (subIndex: number) => {
    // Clear any existing submenu timeout
    if (subCloseTimeoutRef.current) {
      clearTimeout(subCloseTimeoutRef.current);
      subCloseTimeoutRef.current = null;
    }

    // Only set open if not already clicked
    if (clickedSubMenuIndex !== subIndex) {
      setOpenSubMenuIndex(subIndex);
    }
  };

  const handleSubMenuMouseLeave = (subIndex: number) => {
    // Only handle closing if the submenu wasn't clicked
    if (clickedSubMenuIndex !== subIndex) {
      // Set a timeout to close the submenu after a delay
      subCloseTimeoutRef.current = setTimeout(() => {
        setOpenSubMenuIndex(null);
      }, 300); // Shorter delay for submenu
    }
  };

  const toggleMenu = (index: number) => {
    if (openMenuIndex === index && clickedMenuIndex === index) {
      setOpenMenuIndex(null);
      setClickedMenuIndex(null);
      setOpenSubMenuIndex(null);
      setClickedSubMenuIndex(null);
    } else {
      setOpenMenuIndex(index);
      setClickedMenuIndex(index);
      setOpenSubMenuIndex(null);
      setClickedSubMenuIndex(null);
    }
  };

  const toggleSubMenu = (subIndex: number) => {
    if (openSubMenuIndex === subIndex && clickedSubMenuIndex === subIndex) {
      setOpenSubMenuIndex(null);
      setClickedSubMenuIndex(null);
    } else {
      setOpenSubMenuIndex(subIndex);
      setClickedSubMenuIndex(subIndex);
    }
  };

  const handleSearchSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>
  ) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
      setSearchTerm("");
      setSearchFocused(false);
    }
  };

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 mx-auto ${
        isScrolled ? "-translate-y-12" : "translate-y-0"
      }`}
      data-scrolled={isScrolled}
    >
      {/* Top Mini Nav */}
      <div className="min-h-[48px] py-1.5 md:py-0 md:h-12 bg-primary-blue border-b border-blue-800/50 flex items-center">
        <div className="max-w-7xl mx-auto w-[92%] 2xl:w-full text-white/90 text-[11px] sm:text-sm flex flex-wrap items-center justify-center sm:justify-end gap-x-4 gap-y-1 sm:space-x-6">
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <Mail className="w-3 h-3 sm:w-4 sm:h-4" />
            <a href="mailto:support@kinesis-subsea.com" className="hover:text-white transition-colors">support@kinesis-subsea.com</a>
          </div>
          <div className="flex items-center space-x-1.5 sm:space-x-2">
            <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
            <a href="tel:88840002424" className="hover:text-white transition-colors">(888) 4000-2424</a>
          </div>
          <div className="flex items-center space-x-3 sm:space-x-4 pl-2 sm:pl-6 border-l border-white/20 h-4 sm:h-5">
            <Facebook className="w-3 h-3 sm:w-4 sm:h-4 hover:text-white cursor-pointer transition-colors" />
            <Linkedin className="w-3 h-3 sm:w-4 sm:h-4 hover:text-white cursor-pointer transition-colors" />
            <Twitter className="w-3 h-3 sm:w-4 sm:h-4 hover:text-white cursor-pointer transition-colors" />
          </div>
        </div>
      </div>

      {/* Main Navigation Wrapper */}
      <div className="bg-white shadow-md relative z-40">
        <div className="max-w-7xl mx-auto w-[92%] 2xl:w-full flex items-center justify-between py-2 sm:py-3 md:py-4">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="/logo-dark.svg"
                alt="Kinesis Subsea Engineering Logo"
                className="w-auto h-12 sm:h-14 md:h-16 lg:h-[84px] xl:h-[88px]"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            {menuItems.map((item, index) => (
              <div key={index} className="relative group">
                {item.submenu ? (
                  <>
                    {/* Desktop: show a clickable Link for the parent title and a separate chevron button to toggle the submenu */}
                    <div
                      className={`flex items-center gap-1 px-3 xl:px-5 py-2 xl:py-3 rounded-lg font-medium text-base xl:text-[20px] transition-all duration-300 ${
                        openMenuIndex === index
                          ? "bg-blue-50 text-primary-blue-hover"
                          : "text-gray-800 hover:bg-blue-50 hover:text-primary-blue-hover"
                      }`}
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={() => handleMouseLeave(index)}
                  >
                    <Link
                      href={item.href}
                      className="flex-1 text-inherit no-underline"
                      onClick={() => {
                        /* allow navigation; keep submenu open state unchanged for hover */
                      }}
                    >
                      {item.title}
                    </Link>
                    <button
                      aria-label={`${item.title} menu`}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleMenu(index);
                      }}
                      className="p-1"
                    >
                      <ChevronDown
                        className={`w-4 h-4 xl:w-5 xl:h-5 transition-transform duration-300 ${
                          openMenuIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>
                  {/* Main Dropdown Menu */}
                  {openMenuIndex === index && (
                    <div
                      className="absolute top-full left-0 mt-2 w-80 bg-white border border-gray-200 rounded-xl shadow-xl  z-50"
                      onMouseEnter={() => handleMouseEnter(index)}
                      onMouseLeave={() => handleMouseLeave(index)}
                    >
                      {item.submenu.map((subitem, subindex) => (
                        <div key={subindex} className="relative">
                          {subitem.subitems ? (
                            <>
                              {/** Highlight parent when its subitems are visible (hover or clicked) */}
                              {(() => {
                                const isSubActive =
                                  openSubMenuIndex === subindex ||
                                  clickedSubMenuIndex === subindex;
                                return (
                                  <div
                                    className={`group/item px-5 rounded-xl py-3.5 transition-colors duration-200 cursor-pointer ${
                                      isSubActive
                                        ? "bg-blue-50 text-primary-blue-hover"
                                        : "hover:bg-blue-50 "
                                    } relative`}
                                    onMouseEnter={() =>
                                      handleSubMenuMouseEnter(subindex)
                                    }
                                    onMouseLeave={() =>
                                      handleSubMenuMouseLeave(subindex)
                                    }
                                  >
                                    <div className="flex items-center justify-between">
                                      <Link
                                        href={subitem.href}
                                        className="w-full flex items-center no-underline text-inherit"
                                      >
                                        <div className="w-full">
                                          <div
                                            className={`${
                                              isSubActive
                                                ? "text-primary-blue-hover"
                                                : "text-gray-900"
                                            } font-medium transition-colors duration-200 text-base xl:text-lg`}
                                          >
                                            {subitem.title}
                                          </div>
                                          {subitem.description && (
                                            <div className="text-gray-500 text-xs xl:text-sm mt-1">
                                              {subitem.description}
                                            </div>
                                          )}
                                        </div>
                                        <div className="flex items-center justify-center w-10 h-10 xl:w-12 xl:h-12 rounded-md">
                                          <ArrowRight className="w-5 h-5 xl:w-6 xl:h-6 text-gray-400 group-hover/nested:text-primary-blue-hover group-hover/nested:translate-x-1 transition-all duration-200" />
                                        </div>
                                      </Link>
                                    </div>
                                  </div>
                                );
                              })()}
                              {/* Nested Dropdown for Subitems */}
                              {openSubMenuIndex === subindex && (
                                <div
                                  className="absolute left-full -top-2 ml-2 mt-2 w-72 bg-white border border-gray-200 rounded-xl shadow-xl z-60"
                                  onMouseEnter={() =>
                                    handleSubMenuMouseEnter(subindex)
                                  }
                                  onMouseLeave={() =>
                                    handleSubMenuMouseLeave(subindex)
                                  }
                                >
                                  {subitem.subitems.map(
                                    (nestedItem, nestedIndex) => (
                                      <Link
                                        key={nestedIndex}
                                        href={`${subitem.href}${nestedItem.href}`}
                                        className="group/nested px-5 py-3.5 hover:bg-blue-50 rounded-xl transition-colors duration-200 cursor-pointer block"
                                      >
                                        <div className="flex items-center justify-between">
                                          <div className="w-full">
                                            <div className="text-gray-900 font-medium group-hover/nested:text-primary-blue-hover transition-colors duration-200 text-base">
                                              {nestedItem.title}
                                            </div>
                                            {nestedItem.description && (
                                              <div className="text-gray-500 text-xs mt-1">
                                                {nestedItem.description}
                                              </div>
                                            )}
                                          </div>
                                          <div className="flex items-center justify-center w-10 h-10 xl:w-12 xl:h-12 rounded-md">
                                            <ArrowRight className="w-5 h-5 xl:w-6 xl:h-6 text-gray-400 group-hover/nested:text-primary-blue-hover group-hover/nested:translate-x-1 transition-all duration-200" />
                                          </div>
                                        </div>
                                      </Link>
                                    )
                                  )}
                                </div>
                              )}
                            </>
                          ) : (
                            <Link
                              href={subitem.href}
                              className="group/item px-5 py-3.5 hover:bg-blue-50 rounded-xl transition-colors duration-200 cursor-pointer block"
                            >
                              <div className="flex items-center justify-between">
                                <div className="w-full">
                                  <div className="text-gray-900 font-medium group-hover/item:text-primary-blue-hover transition-colors duration-200 text-base xl:text-lg">
                                    {subitem.title}
                                  </div>
                                  {subitem.description && (
                                    <div className="text-gray-500 text-xs xl:text-sm mt-1">
                                      {subitem.description}
                                    </div>
                                  )}
                                </div>
                                {/* <div className="flex items-center justify-center w-10 h-10 xl:w-12 xl:h-12 rounded-md">
                                  <ArrowRight className="w-5 h-5 xl:w-6 xl:h-6 text-gray-400 group-hover/nested:text-primary-blue-hover group-hover/nested:translate-x-1 transition-all duration-200" />
                                </div> */}
                              </div>
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="flex items-center gap-1 px-3 xl:px-5 py-2 xl:py-3 rounded-lg font-medium text-base xl:text-[20px] transition-all duration-300 text-gray-800 hover:bg-blue-50 hover:text-primary-blue-hover"
                >
                  {item.title}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Get in Touch Button and Grid Icon */}
        <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
          <Link
            href="/contact-us"
            className="hidden md:inline-flex rounded-lg items-center font-medium py-4 md:py-5 px-6 md:px-10 xl:px-14 text-base xl:text-lg transition-all duration-300 transform hover:-translate-y-0.5 bg-primary-blue hover:bg-primary-blue-hover text-white shadow-md"
          >
            <span className="flex items-center gap-1 text-base xl:text-[20px]">
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </span>
          </Link>
          {/* <button
            title="Grid View"
            className="p-2 md:p-3 rounded-lg bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              />
            </svg>
          </button> */}

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 md:p-3 rounded-lg bg-blue-50 text-gray-900 hover:bg-blue-100 transition-all duration-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="w-5 h-5 md:w-6 md:h-6" />
            ) : (
              <Menu className="w-5 h-5 md:w-6 md:h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="bg-white border-t border-gray-200">
          {menuItems.map((item, index) => (
            <div key={index} className="border-b border-gray-100">
              {item.submenu ? (
                <>
                  <button
                    className="w-full flex items-center justify-between px-4 py-4 text-gray-900 hover:bg-blue-50 transition-colors duration-200"
                    onClick={() => toggleMenu(index)}
                    aria-label={`${item.title} submenu`}
                  >
                    <span className="font-medium text-xl">{item.title}</span>
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        openMenuIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      openMenuIndex === index
                        ? "max-h-screen opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="bg-gray-50">
                      {item.submenu.map((subitem, subindex) => (
                        <div key={subindex}>
                          {subitem.subitems ? (
                            <>
                              <button
                                className="w-full flex items-center justify-between px-6 py-3.5 text-gray-700 hover:bg-blue-50 transition-colors duration-200"
                                onClick={() => toggleSubMenu(subindex)}
                              >
                                <div>
                                  <div className="font-medium text-left">
                                    {subitem.title}
                                  </div>
                                  {subitem.description && (
                                    <div className="text-gray-500 text-sm mt-1 text-left">
                                      {subitem.description}
                                    </div>
                                  )}
                                </div>
                                <ChevronDown
                                  className={`w-3 h-3 transition-transform duration-300 ${
                                    openSubMenuIndex === subindex
                                      ? "rotate-180"
                                      : ""
                                  }`}
                                />
                              </button>
                              <div
                                className={`transition-all duration-300 overflow-hidden ${
                                  openSubMenuIndex === subindex
                                    ? "max-h-screen opacity-100"
                                    : "max-h-0 opacity-0"
                                }`}
                              >
                                <div className="bg-gray-100">
                                  {subitem.subitems.map(
                                    (nestedItem, nestedIndex) => (
                                      <Link
                                        key={nestedIndex}
                                        href={`${subitem.href}${nestedItem.href}`}
                                        className="px-8 py-3 text-gray-600 hover:bg-blue-50 transition-colors duration-200 cursor-pointer block"
                                      >
                                        <div className="font-medium">
                                          {nestedItem.title}
                                        </div>
                                        {nestedItem.description && (
                                          <div className="text-gray-500 text-sm mt-1">
                                            {nestedItem.description}
                                          </div>
                                        )}
                                      </Link>
                                    )
                                  )}
                                </div>
                              </div>
                            </>
                          ) : (
                            <Link
                              href={subitem.href}
                              className="px-6 py-3.5 text-gray-700 hover:bg-blue-50 transition-colors duration-200 cursor-pointer block"
                            >
                              <div className="font-medium">{subitem.title}</div>
                              {subitem.description && (
                                <div className="text-gray-500 text-sm mt-1">
                                  {subitem.description}
                                </div>
                              )}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="w-full flex items-center justify-between px-4 py-4 text-gray-900 hover:bg-blue-50 transition-colors duration-200"
                >
                  <span className="font-medium text-xl">{item.title}</span>
                </Link>
              )}
            </div>
          ))}
        </nav>
      </div>
      </div>
    </header>
  );
}
