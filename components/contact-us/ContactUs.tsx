"use client";
import React, { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  Building,
  MessageSquare,
  Globe,
  Linkedin,
  Twitter,
} from "lucide-react";

interface ContactForm {
  name: string;
  email: string;
  company: string;
  phone: string;
  projectType: string;
  message: string;
}

interface Office {
  city: string;
  country: string;
  address: string;
  phone: string;
  email: string;
  timezone: string;
}

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    company: "",
    phone: "",
    projectType: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const offices: Office[] = [
    {
      city: "Aberdeen",
      country: "United Kingdom",
      address: "8 Laverock Braes Crescent, Grandhome, Aberdeen, AB22 9AD",
      phone: "+44 7832 921562",
      email: "Shovon.mostofa@kinesissubsea.com",
      timezone: "GMT",
    },
    {
      city: "Houston",
      country: "United States",
      address: "1200 Energy Corridor Blvd, Suite 350, TX 77077",
      phone: "+1 (713) 555-0123",
      email: "houston@kinesissubsea.com",
      timezone: "CST",
    },
    {
      city: "Rio de Janeiro",
      country: "Brazil",
      address: "Av. das Américas, 3434 - Barra da Tijuca, RJ 22640-102",
      phone: "+55 21 3042-5678",
      email: "rio@kinesissubsea.com",
      timezone: "BRT",
    },
  ];

  const projectTypes = [
    "Subsea Systems",
    "Riser Engineering",
    "Pipeline Design",
    "Mooring Systems",
    "Topside Integration",
    "Wellhead & Conductor",
    "Feasibility Study",
    "Other",
  ];

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form submitted:", formData);
    setIsSubmitting(false);

    // Reset form
    setFormData({
      name: "",
      email: "",
      company: "",
      phone: "",
      projectType: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Contact Header - Extraordinary Design */}
      <div
        className="relative overflow-hidden"
        style={{
          backgroundImage: "url('/images/sector-right.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* optional dark overlay for contrast */}
        <div className="absolute inset-0 bg-black opacity-30 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
          <div className="relative">
            {/* Background geometric patterns */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-96 h-96 border-r-8 border-t-8 border-primary-blue"></div>
              {/* <div className="absolute bottom-20 left-0 w-64 h-64 border-l-4 border-b-4 border-gray-800"></div> */}
              <div className="absolute top-1/2 left-1/3 w-80 h-80 border-l-6 border-blue-400"></div>
            </div>

            {/* Header content with diagonal arrangement */}
            <div className="relative z-10 grid grid-cols-12 gap-6 items-center min-h-[500px]">
              <div className="col-span-6">
                <div className="space-y-6">
                  <h1 className="text-6xl font-black text-gray-100 leading-none">
                    GET IN
                    <span className="block text-blue-400">TOUCH</span>
                  </h1>
                  <div className="w-24 h-1 bg-primary-blue"></div>
                </div>
              </div>

              {/* <div className="col-span-1">
                <div className="writing-mode-vertical text-gray-200 font-bold text-sm tracking-widest transform rotate-180">
                  CONTACT US
                </div>
              </div> */}

              <div className="col-span-5">
                <div className="relative">
                  {/* Stepped content blocks */}
                  <div className="space-y-0">
                    <div className="bg-gray-900 text-white p-6 ml-0 transform -skew-x-6">
                      <div className="transform skew-x-6">
                        <p className="text-lg leading-relaxed">
                          Ready to discuss your offshore engineering challenge?
                          Our global team of experts is standing by to help.
                        </p>
                      </div>
                    </div>

                    <div className="bg-primary-blue text-white p-6 ml-12 transform -skew-x-6">
                      <div className="transform skew-x-6">
                        <p className="text-lg leading-relaxed">
                          From initial concept to final commissioning, we're
                          your trusted partner in subsea engineering excellence.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form - Takes 2 columns */}
          <div className="lg:col-span-2">
            <div className="bg-white  p-8">
              <div className="relative mb-8">
                {/* <div className="absolute -left-12 top-0 w-2 h-16 bg-primary-blue"></div> */}
                <h2 className="text-3xl font-bold text-gray-900 mb-2">
                  Start Your Project
                </h2>
                <p className="text-gray-700">
                  Tell us about your offshore engineering requirements and we'll
                  get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-6">
                {/* Name and Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-gray-700 font-medium mb-2">
                      Full Name *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 focus:border-primary-blue focus:outline-none transition-colors"
                        placeholder="Enter your full name"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-gray-700 font-medium mb-2">
                      Email Address *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 focus:border-primary-blue focus:outline-none transition-colors"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>
                </div>

                {/* Company and Phone Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="relative">
                    <label className="block text-gray-700 font-medium mb-2">
                      Company
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 focus:border-primary-blue focus:outline-none transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <label className="block text-gray-700 font-medium mb-2">
                      Phone Number
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 focus:border-primary-blue focus:outline-none transition-colors"
                        placeholder="Your phone number"
                      />
                    </div>
                  </div>
                </div>

                {/* Project Type */}
                <div className="relative">
                  <label className="block text-gray-700 font-medium mb-2">
                    Project Type
                  </label>
                  <select
                    title="Select project type"
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 focus:border-primary-blue focus:outline-none transition-colors"
                  >
                    <option value="">Select project type</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="relative">
                  <label className="block text-gray-700 font-medium mb-2">
                    Project Details *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 focus:border-primary-blue focus:outline-none transition-colors resize-vertical"
                      placeholder="Describe your project requirements, timeline, and any specific challenges..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex justify-end">
                  <button
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className="bg-primary-blue hover:bg-primary-blue-hover text-white px-8 py-4 font-bold transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:transform-none flex items-center"
                  >
                    {isSubmitting ? "SENDING..." : "SEND MESSAGE"}
                    <Send className="w-5 h-5 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information - Takes 1 column */}
          <div className="space-y-8">
            {/* Quick Contact */}
            <div className="bg-white border-r-4 border-gray-800 p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Quick Contact
              </h3>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary-blue mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">
                      Global Hotline
                    </div>
                    <div className="text-gray-700">+44 7832 921562</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary-blue mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">
                      General Inquiries
                    </div>
                    <div className="text-gray-700">Shovon.mostofa@kinesissubsea.com</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Clock className="w-5 h-5 text-primary-blue mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">
                      Response Time
                    </div>
                    <div className="text-gray-700">Within 24 hours</div>
                  </div>
                </div>

                <div className="flex items-center">
                  <Building className="w-5 h-5 text-primary-blue mr-3" />
                  <div>
                    <div className="font-medium text-gray-900">
                      Company Number
                    </div>
                    <div className="text-gray-700">SC778538</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-gray-900 text-white p-6">
              <h3 className="text-xl font-bold mb-6">Connect With Us</h3>

              <div className="space-y-4">
                <a
                  href="#"
                  className="flex items-center hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-5 h-5 mr-3" />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="#"
                  className="flex items-center hover:text-blue-400 transition-colors"
                >
                  <Twitter className="w-5 h-5 mr-3" />
                  <span>Twitter</span>
                </a>
                <a
                  href="#"
                  className="flex items-center hover:text-blue-400 transition-colors"
                >
                  <Globe className="w-5 h-5 mr-3" />
                  <span>Company Blog</span>
                </a>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-red-50 border-l-4 border-red-600 p-6">
              <h3 className="text-xl font-bold text-red-800 mb-4">
                Emergency Support
              </h3>
              <p className="text-red-700 mb-4">
                24/7 emergency engineering support for critical offshore
                operations.
              </p>
              <div className="font-bold text-red-800">
                Emergency Line: +44 7832 921562
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section - Placeholder */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Find Our Office
            </h2>
            <div className="w-24 h-1 bg-primary-blue"></div>
            <p className="text-lg text-gray-700 mt-6 max-w-3xl">
              With strategically located offices across major offshore energy
              hubs, Kinesis provides local expertise with global reach.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="relative overflow-hidden  shadow">
                <iframe
                  title="Kinesis Subsea - Aberdeen office"
                  src="https://www.google.com/maps?q=57.1906,-2.1287&z=14&output=embed"
                  className="w-full h-96 border-0"
                  allowFullScreen
                />
              </div>
            </div>

            <div className="bg-white p-6 shadow">
              <h3 className="text-xl font-bold mb-2">Aberdeen Office</h3>
              <div className="text-gray-700 mb-4">
                8 Laverock Braes Crescent, Grandhome
                <br />
                Aberdeen AB22 9AD, United Kingdom
              </div>

              <div className="space-y-3">
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary-blue mr-3" />
                  <span className="text-gray-700">
                    Coordinates: 57.1906, -2.1287
                  </span>
                </div>

                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary-blue mr-3" />
                  <span className="text-gray-700">+44 7832 921562</span>
                </div>

                <a
                  href="https://www.google.com/maps/dir/?api=1&destination=57.1906,-2.1287"
                  target="_blank"
                  rel="noopener"
                  className="inline-block mt-4 bg-primary-blue text-white px-4 py-2  hover:bg-primary-blue-hover"
                >
                  Get directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
