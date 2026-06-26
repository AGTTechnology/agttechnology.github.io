import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="inline-block mb-8 opacity-80 hover:opacity-100 transition-opacity">
              <Image
                src="/logo.png"
                alt="AGT Logo"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
            <p className="text-sm text-foreground/40 max-w-sm leading-relaxed mb-8">
              Advanced technology systems for the next generation of enterprise infrastructure. Engineering resilience and intelligence into every build.
            </p>
            <div className="flex space-x-6">
              <Link href="#" className="opacity-30 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <Image src="/facebook-logo.png" alt="Facebook" width={18} height={18} />
              </Link>
              <Link href="#" className="opacity-30 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <Image src="/twitter.png" alt="Twitter" width={18} height={18} />
              </Link>
              <Link href="#" className="opacity-30 hover:opacity-100 transition-opacity grayscale hover:grayscale-0">
                <Image src="/linkedin_icon.png" alt="LinkedIn" width={18} height={18} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/30 mb-8">Index</h4>
            <ul className="space-y-4">
              <li><Link href="#services" className="text-[13px] text-foreground/60 hover:text-primary transition-colors">Capabilities</Link></li>
              <li><Link href="#testimonials" className="text-[13px] text-foreground/60 hover:text-primary transition-colors">Logbook</Link></li>
              <li><Link href="#contact" className="text-[13px] text-foreground/60 hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-foreground/30 mb-8">Base</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-[13px] text-foreground/50">
                <MapPin className="text-primary/40 mt-0.5 flex-shrink-0" size={14} strokeWidth={1.5} />
                <span>16 Fasanya Street, Fadeyi, Lagos</span>
              </li>
              <li className="flex items-center space-x-3 text-[13px] text-foreground/50">
                <Mail className="text-primary/40 flex-shrink-0" size={14} strokeWidth={1.5} />
                <span>agttechnology@outlook.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 pt-8 gap-4">
          <div className="text-[10px] font-mono text-foreground/20 uppercase tracking-widest">
            &copy; {currentYear} AGT Technology Ltd / SYSTEM_A.01
          </div>
          <div className="flex gap-8">
            <Link href="#" className="text-[10px] font-mono text-foreground/20 hover:text-foreground/40 transition-colors uppercase">Privacy</Link>
            <Link href="#" className="text-[10px] font-mono text-foreground/20 hover:text-foreground/40 transition-colors uppercase">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
