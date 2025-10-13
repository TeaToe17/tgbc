"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const services = [
  {
    title: "Business Growth & Development Consulting",
    description:
      "Strategic planning and business development solutions to drive growth, enhance performance, and strengthen market presence.",
    color: "primary",
  },
  {
    title: "Corporate Training & Event Solutions",
    description:
      "Comprehensive indoor and outdoor training, corporate event planning, and team-building programs for impactful results.",
    color: "deep-blue",
  },
  {
    title: "Human Capital & Talent Development",
    description:
      "Strategic talent management and leadership development to build high-performing teams.",
    color: "teal",
  },
  {
    title: "Financial & Investment Advisory",
    description:
      "Expert financial planning, investment guidance, and wealth management for sustainable growth.",
    color: "primary",
  },
  {
    title: "Youth & Career Development Programs",
    description:
      "Empowering young professionals through skills training, mentorship, and career advancement opportunities.",
    color: "deep-blue",
  },
  {
    title: "Public Sector & NGO Consulting",
    description:
      "Specialized consulting for government bodies and non-profits to optimize impact and efficiency.",
    color: "teal",
  },
];

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(
    new Set()
  );

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = document.querySelectorAll("[data-animate]");
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight * 0.8) {
          setVisibleSections((prev) => new Set(prev).add(section.id));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center gap-3">
              <Image
                src="/tunlogo.png"
                alt="Tun-Global Business Consult"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#services"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Services
              </a>
              <a
                href="#about"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#contact"
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </a>
              <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-lg font-medium transition-all hover:shadow-lg">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12M6 12l12-12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col gap-4">
                <a
                  href="#services"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Services
                </a>
                <a
                  href="#about"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact
                </a>
                <button className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2.5 rounded-lg font-medium w-full">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/95 via-primary/90 to-primary/95 z-10" />
          <Image
            src="/modern-corporate-office-with-business-professional.jpg"
            alt="Business professionals"
            fill
            className="object-cover"
            priority
          />
        </div>

        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-br from-secondary/30 via-orange/20 to-transparent diagonal-accent z-10" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-tr from-teal/20 to-transparent z-10" />

        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-primary-foreground space-y-8 animate-fade-in-left">
              <div className="inline-block">
                <span className="bg-gradient-to-r from-secondary via-orange to-coral text-secondary-foreground px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  Global Excellence in Consulting
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance">
                Shaping the Future of Businesses & Professionals Worldwide
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 leading-relaxed">
                Empowering organizations and individuals with strategic insights
                and innovative solutions for sustainable growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                  <a href="#services">Explore Our Services</a>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
                <button className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary text-lg px-8 py-4 rounded-lg font-semibold bg-transparent transition-all hover:shadow-xl">
                  <a href="#contact">Schedule Consultation</a>
                </button>
              </div>
            </div>

            <div className="hidden lg:block animate-fade-in-right">
              <div className="relative">
                <Image
                  src="/diverse-business-team-collaborating-on-strategy-wi.jpg"
                  alt="Business team collaboration"
                  width={500}
                  height={600}
                  className="rounded-2xl shadow-2xl animate-float"
                />
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-orange rounded-full opacity-60 blur-2xl animate-pulse" />
                <div
                  className="absolute -bottom-6 -left-6 w-32 h-32 bg-teal rounded-full opacity-60 blur-2xl animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-br from-deep-blue/10 via-teal/10 to-transparent diagonal-accent-reverse" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div
              id="about-image"
              data-animate
              data-scroll
              data-scroll-speed="1"
              className={`${
                visibleSections.has("about-image")
                  ? "animate-fade-in-left"
                  : "opacity-0"
              }`}
            >
              <div className="relative">
                <Image
                  src="/professional-business-consultant-presenting-strates.jpg"
                  // src="/professional-business-consultant-presenting-strate.jpg"
                  alt="Business consulting"
                  width={600}
                  height={600}
                  className="rounded-2xl shadow-xl"
                />
                <div className="absolute -inset-4 bg-gradient-to-r from-primary via-orange to-teal rounded-2xl opacity-20 blur-xl -z-10" />
              </div>
            </div>

            <div
              id="about-content"
              data-animate
              data-scroll
              data-scroll-speed="0.5"
              className={`space-y-6 ${
                visibleSections.has("about-content")
                  ? "animate-fade-in-right"
                  : "opacity-0"
              }`}
            >
              <div className="inline-block">
                <span className="text-primary font-semibold text-lg">
                  About Tun-Global
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-balance">
                Your Partner in Strategic Excellence
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Tun-Global Business Consult is a premier consulting firm
                dedicated to transforming businesses and empowering
                professionals across the globe. With over 3 years of
                experience, we deliver innovative solutions that drive
                sustainable growth and competitive advantage.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our team of seasoned consultants brings deep industry expertise
                and a proven track record of success across diverse sectors. We
                combine strategic thinking with practical implementation to
                deliver measurable results.
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="space-y-2 p-4 rounded-lg bg-gradient-to-br from-primary/10 to-teal/10 border border-primary/20">
                  <div className="flex items-center gap-2 text-primary">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-semibold">Strategic Focus</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Data-driven insights for informed decision-making
                  </p>
                </div>
                <div className="space-y-2 p-4 rounded-lg bg-gradient-to-br from-orange/10 to-coral/10 border border-orange/20">
                  <div className="flex items-center gap-2 text-orange">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span className="font-semibold">Global Reach</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    International expertise with local market knowledge
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 bg-gradient-to-b from-muted/30 via-background to-muted/30"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary font-semibold text-lg">
              Our Services
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Comprehensive Solutions for Every Challenge
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              From strategy to execution, we provide end-to-end consulting
              services tailored to your unique needs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                id={`service-${index}`}
                data-animate
                className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 rounded-lg p-6 space-y-4 bg-card ${
                  service.color === "primary"
                    ? "hover:border-primary"
                    : service.color === "orange"
                    ? "hover:border-orange"
                    : service.color === "deep-blue"
                    ? "hover:border-deep-blue"
                    : service.color === "teal"
                    ? "hover:border-teal"
                    : "hover:border-coral"
                } ${
                  visibleSections.has(`service-${index}`)
                    ? "animate-scale-in"
                    : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className={`w-14 h-14 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300 ${
                    service.color === "primary"
                      ? "bg-primary/10 group-hover:bg-primary"
                      : service.color === "orange"
                      ? "bg-orange/10 group-hover:bg-orange"
                      : service.color === "deep-blue"
                      ? "bg-deep-blue/10 group-hover:bg-deep-blue"
                      : service.color === "teal"
                      ? "bg-teal/10 group-hover:bg-teal"
                      : "bg-coral/10 group-hover:bg-coral"
                  }`}
                >
                  <svg
                    className={`w-7 h-7 transition-colors ${
                      service.color === "primary"
                        ? "text-primary group-hover:text-white"
                        : service.color === "orange"
                        ? "text-orange group-hover:text-white"
                        : service.color === "deep-blue"
                        ? "text-deep-blue group-hover:text-white"
                        : service.color === "teal"
                        ? "text-teal group-hover:text-white"
                        : "text-coral group-hover:text-white"
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                    />
                  </svg>
                </div>
                <h3
                  className={`text-xl font-bold transition-colors ${
                    service.color === "primary"
                      ? "group-hover:text-primary"
                      : service.color === "orange"
                      ? "group-hover:text-orange"
                      : service.color === "deep-blue"
                      ? "group-hover:text-deep-blue"
                      : service.color === "teal"
                      ? "group-hover:text-teal"
                      : "group-hover:text-coral"
                  }`}
                >
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <button
                  className={`font-semibold flex items-center gap-2 group-hover:gap-3 transition-all ${
                    service.color === "primary"
                      ? "text-primary"
                      : service.color === "orange"
                      ? "text-orange"
                      : service.color === "deep-blue"
                      ? "text-deep-blue"
                      : service.color === "teal"
                      ? "text-teal"
                      : "text-coral"
                  }`}
                >
                  Learn More
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-deep-blue/90 to-teal/95 z-10" />
          <Image
            src="/modern-office-space-with-business-professionals-wo.jpg"
            alt="Modern workspace"
            fill
            className="object-cover"
          />
        </div>

        <div className="container mx-auto px-4 lg:px-8 relative z-20">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">
              Why Choose Tun-Global?
            </h2>
            <p className="text-xl leading-relaxed text-primary-foreground/90">
              We don not just provide advice—we partner with you to implement
              solutions that deliver real, measurable impact. Our commitment to
              excellence and client success sets us apart.
            </p>

            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="space-y-3 p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all hover:-translate-y-2">
                <div className="w-16 h-16 rounded-full bg-secondary mx-auto flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-secondary-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Innovation</h3>
                <p className="text-primary-foreground/80">
                  Cutting-edge strategies that keep you ahead of the curve
                </p>
              </div>
              <div className="space-y-3 p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all hover:-translate-y-2">
                <div className="w-16 h-16 rounded-full bg-orange mx-auto flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Partnership</h3>
                <p className="text-primary-foreground/80">
                  Collaborative approach focused on your long-term success
                </p>
              </div>
              <div className="space-y-3 p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all hover:-translate-y-2">
                <div className="w-16 h-16 rounded-full bg-teal mx-auto flex items-center justify-center">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Results</h3>
                <p className="text-primary-foreground/80">
                  Proven track record of delivering measurable outcomes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team/Expertise Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="text-primary font-semibold text-lg">
              Our Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              World-Class Consultants
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our team comprises industry veterans with diverse backgrounds and
              deep expertise across multiple sectors.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image:
                  "/professional-african-business-consultant-in-suit-s.jpg",
                name: "Strategic Leadership",
                role: "C-Suite executives with 20+ years experience",
                color: "primary",
              },
              {
                image:
                  "/diverse-team-of-business-consultants-collaborating.jpg",
                name: "Industry Specialists",
                role: "Experts across finance, tech, and operations",
                color: "orange",
              },
              {
                image:
                  "/professional-business-trainer-conducting-corporate.jpg",
                name: "Certified Trainers",
                role: "Accredited professionals in talent development",
                color: "teal",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group cursor-pointer"
                id={`team-${index}`}
                data-animate
                data-scroll
                data-scroll-speed="1"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={400}
                    height={400}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${
                      item.color === "primary"
                        ? "from-primary/80"
                        : item.color === "orange"
                        ? "from-orange/80"
                        : "from-teal/80"
                    } to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.name}</h3>
                <p className="text-muted-foreground">{item.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-primary to-yellow-300 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange/20 to-transparent diagonal-accent" />
        <div className="absolute top-10 left-10 w-32 h-32 bg-secondary rounded-full opacity-20 blur-3xl animate-pulse" />

        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">
              Ready to Transform Your Business?
            </h2> 
            <p className="text-xl leading-relaxed text-primary-foreground/90">
              Let us discuss how we can help you achieve your strategic
              objectives and unlock new opportunities for growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <button className="bg-secondary hover:bg-secondary/90 text-secondary-foreground text-lg px-8 py-4 rounded-lg font-semibold transition-all hover:shadow-xl hover:-translate-y-1 flex items-center justify-center gap-2">
                Reach out to us
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M7 13l5 5m0 0l5-5m-5 5V6"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-b from-muted/30 to-background"
      >
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div className="space-y-8">
              <div className="space-y-4">
                <span className="text-primary font-semibold text-lg">
                  Get In Touch
                </span>
                <h2 className="text-4xl md:text-5xl font-bold">
                  Start a Conversation
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Reach out to us today and discover how Tun-Global can help
                  your organization achieve its full potential.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-primary/10 to-teal/10 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-primary"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Address</h3>
                    <p className="text-muted-foreground">
                      10b, Ishashi Road by Alapara Junction
                      <br />
                      Ishashi Road, Ogun, Nigeria
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-orange/10 to-coral/10 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-orange/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-orange"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Phone</h3>
                    <p className="text-muted-foreground">+234 904 503 3752</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 rounded-lg bg-gradient-to-r from-deep-blue/10 to-accent/10 hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-deep-blue/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-deep-blue"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">Email</h3>
                    <p className="text-muted-foreground">
                      tunglobalbusinessconsulting@gmail.com
                      <br />
                      tgbc829022@gmail.com
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <Image
                  src="/tunlogo.png"
                  alt="Tun-Global Business Consult"
                  width={200}
                  height={80}
                  className="h-16 w-auto"
                />
              </div>
            </div>

            <div className="shadow-xl rounded-2xl bg-card border-2 border-border">
              <Image
                src="/modern-office-space-with-business-professionals-wo.jpg"
                width={2000}
                height={2500}
                alt="services Image"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary via-deep-blue to-teal text-primary-foreground py-12">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div className="space-y-4">
              <Image
                src="/tunlogo.png"
                alt="Tun-Global"
                width={150}
                height={50}
                className="h-10 w-auto brightness-0 invert"
              />
              <p className="text-primary-foreground/80 text-sm">
                Shaping the Future of Businesses & Professionals Worldwide
              </p>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors"
                  >
                    Business Strategy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors"
                  >
                    Start-up Advisory
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors"
                  >
                    Corporate Training
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors"
                  >
                    Digital Transformation
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors"
                  >
                    Case Studies
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-secondary transition-colors"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* <div>
              <h3 className="font-bold text-lg mb-4">Connect</h3>
              <ul className="space-y-2 text-sm text-primary-foreground/80">
                <li>LinkedIn</li>
                <li>Twitter</li>
                <li>Facebook</li>
                <li>Instagram</li>
              </ul>
            </div> */}
          </div>

          <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
            <p>
              © {new Date().getFullYear()} Tun-Global Business Consult. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
