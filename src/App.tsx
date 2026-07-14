import React, { useState } from 'react';
import { ShieldCheck, Phone, Mail, MapPin, Truck, Thermometer, BriefcaseMedical, CheckCircle2, Factory, Award } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans flex flex-col text-slate-800">
      
      {/* Sticky Navbar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 h-16 flex items-center justify-between flex-shrink-0 z-50 sticky top-0">
        <div className="flex items-center gap-2">
          <div className="relative flex items-center justify-center w-10 h-10 rounded-full border-[2.5px] border-[#003B73] bg-white">
            <span className="text-[#003B73] font-black text-xl -mr-0.5">G</span>
            <span className="text-[#1B8B42] font-black text-xl">G</span>
            <span className="absolute -right-2 top-0 text-[#003B73] font-black text-sm">+</span>
          </div>
          <div className="flex flex-col ml-1">
            <h1 className="text-[15px] font-black text-[#003B73] leading-none uppercase tracking-wide">G.G. Enterprise</h1>
            <p className="text-[8.5px] text-[#003B73] font-bold italic uppercase tracking-widest mt-0.5">— The House of Vaccines —</p>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-[13px] font-semibold text-slate-600">
          <a href="#" className="text-[#003B73]">Home</a>
          <a href="#about" className="hover:text-[#003B73] transition-colors">About</a>
          <a href="#cold-chain" className="hover:text-[#003B73] transition-colors">Infrastructure</a>
          <a href="#partners" className="hover:text-[#003B73] transition-colors">Partners</a>
          <a href="#contact" className="hover:text-[#003B73] transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="tel:03323628572" className="hidden sm:block px-4 py-2 text-[12px] font-bold border border-[#003B73] text-[#003B73] rounded-full hover:bg-slate-50 transition-colors">
            Call Now
          </a>
          <a href="https://wa.me/916289803458?text=Hello%20GG%20Enterprise%2C%20I%20would%20like%20to%20enquire%20about%20vaccine%20availability." target="_blank" rel="noreferrer" className="px-4 py-2 text-[12px] font-bold bg-[#1B8B42] text-white rounded-full flex items-center gap-2 shadow-sm shadow-green-200 hover:bg-green-600 transition-colors">
            WhatsApp
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row bg-gradient-to-br from-[#EAF6FF] to-white relative overflow-hidden min-h-[600px]">
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#DFF7F5] text-[#1B8B42] text-[11px] font-bold uppercase tracking-wider mb-6 w-fit"
          >
            <span className="w-2 h-2 rounded-full bg-[#1B8B42] animate-pulse"></span>
            30+ Years of Excellence
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-[#003B73] leading-[1.1] mb-6"
          >
            Trusted Vaccine <br/>Distribution Across <br/><span className="text-[#1B8B42]">Eastern India</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg"
          >
            Over 30 years of excellence in vaccine storage, cold-chain management and doorstep delivery for hospitals, clinics and healthcare providers.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 flex-wrap"
          >
            <a href="#contact" className="px-8 py-4 bg-[#003B73] text-white rounded-2xl font-bold text-[15px] shadow-lg shadow-blue-200 hover:scale-105 transition-transform">
              Contact Us Now
            </a>
            <div className="flex flex-col gap-1 hidden sm:flex">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-300"></div>
                <div className="w-8 h-8 rounded-full border-2 border-white bg-slate-400"></div>
              </div>
              <p className="text-[11px] text-slate-500 font-medium italic">Trusted by Healthcare Centers</p>
            </div>
          </motion.div>
        </div>

        {/* Image Area with Trust Badges */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center p-8 md:p-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-[500px] bg-slate-100 rounded-[32px] overflow-hidden relative shadow-2xl border-8 border-white"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/10 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white z-20">
              <p className="text-sm italic opacity-90 font-medium text-center">"Safety and integrity in every dose we deliver."</p>
            </div>
            <img 
              src="https://i.pinimg.com/736x/76/dd/d1/76ddd1786e18964dc4adea03bdd00b14.jpg" 
              alt="Vaccines" 
              className="w-full h-auto object-contain relative z-0" 
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-[#EAF6FF] overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center px-8 mb-12"
        >
          <h2 className="text-3xl font-bold text-[#003B73] mb-4">Our Partner Companies</h2>
          <p className="text-slate-600">G.G. Enterprise proudly distributes for leading national and global pharmaceutical brands.</p>
        </motion.div>
        
        <div className="w-full relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#EAF6FF] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#EAF6FF] to-transparent z-10"></div>
          
          <div className="animate-marquee gap-6 py-4">
            {[
              { name: "Abbott", domain: "abbott.com" },
              { name: "Bharat Biotech", domain: "bharatbiotech.com" },
              { name: "Biological E.", domain: "biologicale.com" },
              { name: "Ferring", domain: "ferring.com" },
              { name: "GSK", domain: "gsk.com" },
              { name: "MSD", domain: "msd.com" },
              { name: "Panacea Biotec", domain: "panaceabiotec.com" },
              { name: "Pfizer", domain: "pfizer.com" },
              { name: "Sanofi", domain: "sanofi.com" },
              { name: "Serum Institute", domain: "seruminstitute.com" },
              { name: "Wockhardt", domain: "wockhardt.com" },
              { name: "Zuventus", domain: "zuventus.co.in" },
              { name: "Zydus", domain: "zyduslife.com" }
            ].concat([
              { name: "Abbott", domain: "abbott.com" },
              { name: "Bharat Biotech", domain: "bharatbiotech.com" },
              { name: "Biological E.", domain: "biologicale.com" },
              { name: "Ferring", domain: "ferring.com" },
              { name: "GSK", domain: "gsk.com" },
              { name: "MSD", domain: "msd.com" },
              { name: "Panacea Biotec", domain: "panaceabiotec.com" },
              { name: "Pfizer", domain: "pfizer.com" },
              { name: "Sanofi", domain: "sanofi.com" },
              { name: "Serum Institute", domain: "seruminstitute.com" },
              { name: "Wockhardt", domain: "wockhardt.com" },
              { name: "Zuventus", domain: "zuventus.co.in" },
              { name: "Zydus", domain: "zyduslife.com" }
            ]).map((partner, i) => (
              <div key={i} className="flex-shrink-0 flex items-center justify-center w-[220px] h-[100px] bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow group">
                <img 
                  src={`https://logo.clearbit.com/${partner.domain}`} 
                  alt={partner.name} 
                  className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="hidden text-lg font-black text-[#003B73] text-center leading-tight tracking-tight opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-8 bg-[#F8FAFC]">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16"
        >
          <div className="w-full md:w-1/2">
            <div className="w-full aspect-square bg-[#EAF6FF] rounded-3xl overflow-hidden relative border border-slate-100 shadow-sm flex items-center justify-center">
              <img 
                src="https://i.pinimg.com/736x/10/e7/e3/10e7e343d347440fc75283645897af5f.jpg" 
                alt="About GG Enterprise" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl font-bold text-[#003B73] mb-6">About GG Enterprise</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              G.G. Enterprise is one of Kolkata's trusted vaccine distribution houses with nearly three decades of experience in supplying vaccines safely while maintaining strict cold-chain standards.
            </p>
            <p className="text-slate-600 leading-relaxed">
              We partner with leading national and multinational vaccine manufacturers to ensure healthcare providers receive vaccines in perfect condition.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us & Cold Chain */}
      <section id="cold-chain" className="py-20 px-8 bg-white border-t border-slate-100">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-[#003B73] mb-4">Why Choose Us</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Professionally managed distribution house ensuring 100% safety.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Excellent Cold Chain", desc: "Dedicated walk-in cold rooms maintaining 2°C to 8°C strictly.", icon: <Thermometer /> },
              { title: "Freezer Storage", desc: "Specialized freezer units maintaining up to -20°C temperatures.", icon: <Thermometer /> },
              { title: "Power Backup", desc: "Heavy-duty backup generators for every single cold chain unit.", icon: <Factory /> },
              { title: "Dedicated Vehicles", desc: "Customized vehicles and two-wheelers for safe vaccine supply.", icon: <Truck /> },
              { title: "Doorstep Supply", desc: "Any quantity delivered to your doorstep maintaining hygiene.", icon: <MapPin /> },
              { title: "Experienced Team", desc: "Professional back office and highly trained supply team.", icon: <ShieldCheck /> }
            ].map((feature, i) => (
              <div key={i} className="p-8 rounded-2xl bg-[#F8FAFC] border border-slate-100 hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#003B73] shadow-sm mb-6 group-hover:bg-[#003B73] group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Trust Metrics / Achievement Card */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto -mt-12 relative z-20 mb-20 px-8 w-full"
      >
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 w-full">
          <div className="flex items-center gap-5 md:w-1/3">
            <div className="w-16 h-16 rounded-full bg-[#EAF6FF] flex items-center justify-center text-[#003B73] shadow-sm flex-shrink-0">
              <Award className="w-8 h-8" strokeWidth={1.5} />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#003B73] mb-1">Our Achievements</h3>
              <p className="text-[13px] text-slate-500 font-medium leading-relaxed">Delivering excellence in healthcare distribution.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-6 md:gap-12 w-full md:w-2/3 justify-center md:justify-end">
            <div className="text-center">
              <p className="text-3xl font-black text-[#003B73]">30+</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Years Exp</p>
            </div>
            <div className="h-12 w-[1.5px] bg-slate-100"></div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#003B73]">14+</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Partners</p>
            </div>
            <div className="h-12 w-[1.5px] bg-slate-100"></div>
            <div className="text-center">
              <p className="text-3xl font-black text-[#003B73]">2-8°C</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Storage</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Process Timeline */}
      <section className="py-20 px-8 bg-white border-b border-slate-100">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl font-bold text-[#003B73] mb-16">Our Process</h2>
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 relative mt-12">
            <div className="hidden md:block absolute top-[48px] left-10 right-10 h-0.5 bg-slate-100 -z-10"></div>
            
            {[
              { step: "Receive Order", img: "https://40rtlqterhis3blw.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-14%20at%203.14.11%20PM.jpeg" },
              { step: "Cold Storage Handling", img: "https://40rtlqterhis3blw.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-14%20at%203.03.54%20PM.jpeg" },
              { step: "Temperature Check", img: "https://40rtlqterhis3blw.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-14%20at%203.03.54%20PM%20%281%29.jpeg" },
              { step: "Safe Packaging", img: "https://40rtlqterhis3blw.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-14%20at%203.03.53%20PM.jpeg" },
              { step: "Doorstep Delivery", img: "https://40rtlqterhis3blw.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-14%20at%203.03.53%20PM%20%281%29.jpeg" }
            ].map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex flex-col items-center gap-4 bg-white px-2 z-10"
              >
                <div className="w-24 h-24 rounded-full bg-slate-100 border-4 border-white shadow-md overflow-hidden relative group">
                  <img src={item.img} alt={item.step} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded-full"></div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-[#1B8B42] text-white flex items-center justify-center -mt-8 relative z-20 border-2 border-white shadow-sm">
                    <CheckCircle2 size={12} strokeWidth={3} />
                  </div>
                  <p className="text-[13px] font-bold text-slate-700 w-28 mt-2">{item.step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-8 bg-[#F8FAFC] flex-1">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16"
        >
          
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-bold text-[#003B73] mb-8">Get In Touch</h2>
            <div className="space-y-6 text-sm text-slate-600">
              <div className="flex gap-4">
                <MapPin className="text-[#1B8B42] shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Regd. Office</h4>
                  <p>86B, Dhan Devi Khanna Road<br/>Kolkata – 700054</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="text-[#1B8B42] shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Landline</h4>
                  <p>033-23628572<br/>033-23648116<br/>033-23648400</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="text-[#1B8B42] shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Mobile & WhatsApp</h4>
                  <p>9748410204 / 9674164645 / 9831929269<br/>WhatsApp: 6289803458</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-[#1B8B42] shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Email</h4>
                  <p>ggenterprise86@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-slate-800 mb-6">Send Enquiry</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input type="text" placeholder="Hospital / Clinic Name" className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:outline-none focus:border-[#003B73] text-sm" required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Contact Person" className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:outline-none focus:border-[#003B73] text-sm" required />
                <input type="tel" placeholder="Mobile Number" className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:outline-none focus:border-[#003B73] text-sm" required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:outline-none focus:border-[#003B73] text-sm" />
                <input type="text" placeholder="City" className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:outline-none focus:border-[#003B73] text-sm" required />
              </div>
              <div>
                <textarea placeholder="Your Requirement / Message" rows={4} className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:outline-none focus:border-[#003B73] text-sm" required></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-[#003B73] text-white rounded-xl font-bold hover:bg-blue-900 transition-colors">
                Submit Enquiry
              </button>
            </form>
          </div>

        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#F8FAFC] border-t border-slate-100 h-auto md:h-16 py-4 md:py-0 flex flex-col md:flex-row items-center justify-between px-10 text-[11px] text-slate-500 flex-shrink-0 gap-4">
        <div>
          © {new Date().getFullYear()} <span className="font-bold text-slate-800">G.G. Enterprise</span> - All Rights Reserved. Regd. Office: 86B, Dhan Devi Khanna Road, Kolkata – 700054
        </div>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
          <span>Phone: 033-23628572</span>
          <span className="hidden md:block w-1 h-1 bg-slate-300 rounded-full"></span>
          <span>Email: ggenterprise86@gmail.com</span>
        </div>
      </footer>

      {/* Floating WhatsApp Action */}
      <div className="fixed bottom-8 right-8 z-[100] group">
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-white text-slate-800 px-4 py-2 rounded-xl shadow-xl text-sm font-semibold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap border border-slate-100 pointer-events-none">
          Enquire about availability
        </div>
        <a 
          href="https://wa.me/916289803458?text=Hello%20GG%20Enterprise%2C%20I%20would%20like%20to%20enquire%20about%20vaccine%20availability."
          target="_blank"
          rel="noreferrer"
          className="w-14 h-14 md:w-16 md:h-16 bg-[#1B8B42] rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer"
        >
          <svg className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>

    </div>
  );
}
