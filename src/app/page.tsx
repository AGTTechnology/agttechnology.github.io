'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  Code, 
  Cloud, 
  Brain, 
  ShieldCheck, 
  Cpu, 
  ArrowUpRight,
  Send
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import Footer from '@/components/Footer';

const fadeUp = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } as any
};

const services = [
  {
    title: 'Digital Consulting',
    description: 'Strategic engineering roadmap for high-scale enterprise infrastructure.',
    icon: <Briefcase size={18} strokeWidth={1.5} />,
    size: 'col-span-1 md:col-span-2',
    color: 'border-primary/20'
  },
  {
    title: 'Custom Dev',
    description: 'High-performance applications.',
    icon: <Code size={18} strokeWidth={1.5} />,
    size: 'col-span-1',
    color: 'border-slate-900/5'
  },
  {
    title: 'Cloud & DevOps',
    description: 'Auto-scaling architectures and zero-trust security.',
    icon: <Cloud size={18} strokeWidth={1.5} />,
    size: 'col-span-1',
    color: 'border-slate-900/5'
  },
  {
    title: 'AI/ML Systems',
    description: 'Advanced data intelligence and predictive modeling for decision-making.',
    icon: <Brain size={18} strokeWidth={1.5} />,
    size: 'col-span-1 md:col-span-2',
    color: 'border-slate-900/5'
  },
  {
    title: 'Cybersecurity',
    description: 'Penetration testing and threat detection.',
    icon: <ShieldCheck size={18} strokeWidth={1.5} />,
    size: 'col-span-1',
    color: 'border-slate-900/5'
  },
  {
    title: 'IoT Engineering',
    description: 'Connected hardware ecosystems.',
    icon: <Cpu size={18} strokeWidth={1.5} />,
    size: 'col-span-1',
    color: 'border-slate-900/5'
  },
];

const logbookEntries = [
  {
    id: "LOG_01",
    quote: "Expertise in cloud migration transformed our operations. Delivered beyond expectations with unmatched technical depth.",
    client: "Universal Insurance Plc",
    status: "COMPLETED / 2025"
  },
  {
    id: "LOG_02",
    quote: "The cybersecurity audit provided the peace of mind needed. A truly reliable partner in today's digital age.",
    client: "Early Sunrise Guide",
    status: "ACTIVE / SUPPORT"
  }
];

export default function Home() {
  const [textIndex, setTextRotator] = useState(0);
  
  const rotatingTexts = [
    `Currently scheduling infrastructure audits for Q${(Math.floor(new Date().getMonth() / 3) + 1) % 4 + 1} ${Math.floor(new Date().getMonth() / 3) + 1 === 4 ? new Date().getFullYear() + 1 : new Date().getFullYear()}.`,
    "Engineering the digital infrastructure that powers West Africa's leading organizations.",
    "Partnering with ambitious teams to solve complex technical challenges at scale.",
    "Transforming complex requirements into resilient, high-performance digital ecosystems.",
    "Delivering zero-trust security and scalable cloud infrastructure for the modern enterprise."
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTextRotator((prev) => (prev + 1) % rotatingTexts.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen technical-grid pt-14">
      {/* Hero Section */}
      <section className="relative py-24 md:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <motion.div {...fadeUp} transition={{ ...fadeUp.transition, delay: 0.1 }}>
              <span className="inline-block text-[11px] font-mono tracking-widest text-primary mb-4 bg-primary/5 px-3 py-1 rounded-full border border-primary/10 uppercase">
                Enterprise Engineering Firm
              </span>
            </motion.div>
            
            <motion.h1 
              {...fadeUp} 
              transition={{ ...fadeUp.transition, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.05] text-slate-900"
            >
              Engineering the <br /> 
              Digital Future of <br />
              <span className="text-primary opacity-90">West Africa.</span>
            </motion.h1>

            <motion.p 
              {...fadeUp} 
              transition={{ ...fadeUp.transition, delay: 0.3 }}
              className="text-lg text-slate-600 mb-12 leading-relaxed max-w-xl"
            >
              Building resilient infrastructure, sophisticated software, and intelligent systems for the continent's most ambitious organizations.
            </motion.p>

            <motion.div 
              {...fadeUp} 
              transition={{ ...fadeUp.transition, delay: 0.4 }}
              className="flex flex-wrap gap-6"
            >
              <Link 
                href="#contact" 
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg text-sm font-bold flex items-center gap-2 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
              >
                Start a Project
                <ArrowUpRight size={16} />
              </Link>
              <Link 
                href="#services" 
                className="border border-slate-200 bg-white px-8 py-3 rounded-lg text-sm font-bold text-slate-700 hover:bg-slate-50 transition-all"
              >
                View Services
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <section id="services" className="py-24 border-t border-slate-200 bg-white/40 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16">
            <h2 className="text-[12px] font-mono tracking-widest text-slate-400 uppercase mb-4">Core Capabilities</h2>
            <p className="text-3xl font-bold tracking-tight text-slate-900">Full-stack technical excellence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, scale: 0.98 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={`bento-card p-8 group ${s.size} flex flex-col justify-between`}
              >
                <div>
                  <div className="text-primary mb-6 p-3 bg-primary/5 rounded-xl inline-block group-hover:bg-primary/10 transition-colors">
                    {s.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2 tracking-tight text-slate-900">{s.title}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                    {s.description}
                  </p>
                </div>
                <div className="mt-8 flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={16} className="text-primary" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Logbook / Testimonials */}
      <section id="testimonials" className="py-24 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 flex justify-between items-end">
            <div>
              <h2 className="text-[12px] font-mono tracking-widest text-slate-400 uppercase mb-4">Project Logbook</h2>
              <p className="text-3xl font-bold tracking-tight text-slate-900">Verified Delivery.</p>
            </div>
            <div className="text-[10px] font-mono text-slate-300 hidden md:block">
              REVISION_v2.0.26
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-slate-200 border border-slate-200 rounded-2xl overflow-hidden shadow-xl shadow-slate-200/50">
            {logbookEntries.map((e) => (
              <div key={e.id} className="bg-white p-12 flex flex-col justify-between group hover:bg-slate-50 transition-colors">
                <div>
                  <div className="text-[10px] font-mono text-primary mb-8 font-bold tracking-widest">{e.id}</div>
                  <p className="text-xl text-slate-700 mb-12 leading-relaxed font-medium italic">
                    "{e.quote}"
                  </p>
                </div>
                <div className="flex justify-between items-center border-t border-slate-100 pt-8">
                  <span className="text-sm font-bold tracking-tight text-slate-900">{e.client}</span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase">{e.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Intuitive & Clean */}
      <section id="contact" className="py-24 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-8 leading-tight text-slate-900">
                Secure your <br />
                technical partner.
              </h2>
              <div className="h-24 mb-12 overflow-hidden relative">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={textIndex}
                    className="text-slate-500 max-w-sm leading-relaxed text-lg absolute flex flex-wrap gap-x-1.5"
                  >
                    {rotatingTexts[textIndex].split(" ").map((word, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, x: 10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ 
                          duration: 0.8, 
                          delay: i * 0.05,
                          ease: [0.22, 1, 0.36, 1] 
                        }}
                        className="inline-block"
                      >
                        {word}
                      </motion.span>
                    ))}
                  </motion.p>
                </AnimatePresence>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-sm text-slate-600 group cursor-pointer hover:text-primary transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center">
                    <span className="text-[10px] font-mono text-primary font-bold">01</span>
                  </div>
                  <span className="font-medium">agttechnology@outlook.com</span>
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-600 group cursor-pointer hover:text-primary transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center">
                    <span className="text-[10px] font-mono text-primary font-bold">02</span>
                  </div>
                  <span className="font-medium">Lagos, Nigeria HQ</span>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="bg-slate-50 p-10 rounded-3xl border border-slate-200 shadow-sm"
            >
              <form 
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  const formData = new FormData(e.currentTarget);
                  const data = Object.fromEntries(formData.entries());
                  
                  if (!data.name || !data.email || !data.objective || !data.message) {
                    alert("Please fill in all fields before sending your inquiry.");
                    return;
                  }
                  
                  if (!/^\S+@\S+\.\S+$/.test(data.email as string)) {
                    alert("Please enter a valid email address.");
                    return;
                  }

                  const subject = encodeURIComponent(`Project Inquiry: ${data.objective}`);
                  const body = encodeURIComponent(
                    `Inquiry Details:\n` +
                    `------------------\n` +
                    `Name: ${data.name}\n` +
                    `Email: ${data.email}\n` +
                    `Objective: ${data.objective}\n\n` +
                    `Message:\n${data.message}`
                  );
                  
                  window.location.href = `mailto:agttechnology@outlook.com?subject=${subject}&body=${body}`;
                  
                  // Optional: Clear form after redirecting to mail client
                  (e.target as HTMLFormElement).reset();
                }}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="text-[11px] font-bold text-slate-500 uppercase block mb-2 tracking-wider">Your Name</label>
                    <input id="name" name="name" type="text" className="intuitive-input" placeholder="Enter your full name" required />
                  </div>
                  <div>
                    <label htmlFor="email" className="text-[11px] font-bold text-slate-500 uppercase block mb-2 tracking-wider">Work Email</label>
                    <input id="email" name="email" type="email" className="intuitive-input" placeholder="address@company.com" required />
                  </div>
                </div>
                <div>
                  <label htmlFor="objective" className="text-[11px] font-bold text-slate-500 uppercase block mb-2 tracking-wider">Project Objective</label>
                  <input id="objective" name="objective" type="text" className="intuitive-input" placeholder="e.g., Cloud Infrastructure Rebuild" required />
                </div>
                <div>
                  <label htmlFor="message" className="text-[11px] font-bold text-slate-500 uppercase block mb-2 tracking-wider">Message Details</label>
                  <textarea id="message" name="message" rows={4} className="intuitive-input resize-none" placeholder="Briefly describe your requirements..." required></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full bg-slate-900 text-white py-4 rounded-xl font-bold text-sm tracking-widest uppercase hover:bg-primary transition-all flex items-center justify-center gap-3"
                >
                  Send Inquiry
                  <Send size={16} strokeWidth={2} />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
