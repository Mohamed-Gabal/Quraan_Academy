import React from "react";
import Link from "next/link";
import Image from "next/image";

const SOCIAL_LINKS = [
  { name: "Instagram", icon: "/insta_icon.svg", href: "#" },
  { name: "YouTube", icon: "/youtube_icon.svg", href: "#" },
  { name: "TikTok", icon: "/tiktok_icon.svg", href: "#" },
];

const TopHeader = () => {
  return (
    <header className="w-full border-b border-border/40">
      {/* Top Header */}
      <div className="bg-secondary text-white py-2">
        <div className="mx-auto px-4 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-3 text-[10px] sm:text-xs md:text-sm">
          {/* Contact Info */}
          <div className="flex items-center gap-4 sm:gap-6">
            <Link
              href="tel:+15551234567"
              className="flex items-center gap-2 hover:text-accent transition-all duration-300 group"
            >
              <Image
                src="/contacat_icon.svg"
                alt=""
                width={14}
                height={14}
                className="group-hover:rotate-12 transition-transform"
              />
              <span className="font-medium whitespace-nowrap">
                +1 (555) 123-4567
              </span>
            </Link>
            <div className="flex items-center gap-2 text-white/80">
              <Image
                src="/language_support.svg"
                alt=""
                width={15}
                height={15}
              />
              <span className="">Multi-language Support</span>
            </div>
          </div>

          {/* Social & Auth */}
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Social Icons */}
            <div className="flex items-center gap-3 border-r border-white/20 pr-4 sm:pr-5">
              {SOCIAL_LINKS.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="transition-all duration-300 hover:scale-125"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={18}
                    height={18}
                    className="brightness-0 invert opacity-80 hover:opacity-100 hover:drop-shadow-[0_0_5px_rgba(244,180,0,0.8)] transition-all"
                  />
                </Link>
              ))}
            </div>

            {/* Auth Actions */}
            <div className="flex items-center gap-3 sm:gap-4 font-bold">
              <Link
                href="/login"
                className="hover:text-accent transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-accent text-primary px-3 py-1 rounded-md hover:scale-105 transition-all shadow-md text-[10px] sm:text-xs"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default TopHeader;
