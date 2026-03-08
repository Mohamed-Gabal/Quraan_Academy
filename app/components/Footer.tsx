import Image from "next/image";
import Link from "next/link";
import React from "react";
import { 
  RiFacebookCircleFill, 
  RiInstagramLine, 
  RiYoutubeFill, 
  RiTwitterXFill,
  RiMapPinLine,
  RiPhoneLine,
  RiMailLine 
} from "@remixicon/react";

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto max-w-7xl px-6">
        
        {/* Top Section: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand & Social */}
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <Image src="/logo.svg" alt="Quraan Academy" width={150} height={50} />
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Quraan Academy Quraan Academy Quraan Academy Quraan Academy 
              Quraan Academy Quraan Academy Quraan Academy.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <Link href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-black transition-all">
                <RiFacebookCircleFill size={18} />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-black transition-all">
                <RiInstagramLine size={18} />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-black transition-all">
                <RiYoutubeFill size={18} />
              </Link>
              <Link href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent hover:text-black transition-all">
                <RiTwitterXFill size={18} />
              </Link>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold border-b border-accent/30 pb-2 inline-block">Quick Links</h4>
            <ul className="space-y-4">
              {["All courses", "Our teachers", "About us", "Blogs", "FAQs"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-gray-400 hover:text-accent text-sm transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-50" />
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Courses */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold border-b border-accent/30 pb-2 inline-block">Courses</h4>
            <ul className="space-y-4">
              {["Hadith Course", "Quranic Arabic", "Search Course", "Tawheed Course"].map((course) => (
                <li key={course}>
                  <Link href="#" className="text-gray-400 hover:text-accent text-sm transition-colors flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-accent rounded-full opacity-50" />
                    {course}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Us */}
          <div className="space-y-6">
            <h4 className="text-lg font-bold border-b border-accent/30 pb-2 inline-block">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <RiMapPinLine className="text-accent flex-shrink-0" size={20} />
                <span>123 Islamic center Dr<br />New York NY 10001</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <RiPhoneLine className="text-accent" size={20} />
                <span>+1(555)123-4567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-gray-400">
                <RiMailLine className="text-accent" size={20} />
                <span>support@quraan-academy.com</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Section: Copyright & Legal */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-500">
            @ 2025 Quraan Academy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-xs text-gray-500 hover:text-white transition">Privacy Policy</Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-white transition">Terms of Service</Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-white transition">Sitemap</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};
export default Footer;