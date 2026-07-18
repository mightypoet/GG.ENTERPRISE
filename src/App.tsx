import React, { useState } from 'react';
import { ShieldCheck, Phone, Mail, MapPin, Truck, Thermometer, BriefcaseMedical, CheckCircle2, Factory, Award } from 'lucide-react';
import { motion } from 'motion/react';

const PARTNERS = [
  { name: "Abbott", domain: "abbott.com", img: "https://logoeps.com/wp-content/uploads/2016/06/Abbott-logo-1.png" },
  { name: "Bharat Biotech", domain: "bharatbiotech.com", img: "https://www.bharatbiotech.com/images/bharat-biotech-logo.jpg" },
  { name: "Biological E.", domain: "biologicale.com", img: "https://curetechgroup.in/wp-content/uploads/2023/09/22.png" },
  { name: "Ferring", domain: "ferring.com", img: "https://d2gohj824v350l.cloudfront.net/wp-content/uploads/sites/16/2024/01/12104451/Ferring-logo-7.png" },
  { name: "GSK", domain: "gsk.com", img: "https://qtxasset.com/quartz/qcloud5/media/image/fiercebiotech/1611322346/gsk-logo.jpg?VersionId=guTF1Vor.dddCrF7Gx.sRb_Uw1g4ERRV" },
  { name: "MSD", domain: "msd.com", img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Merck_Sharp_%26_Dohme_%28MSD%29.svg/960px-Merck_Sharp_%26_Dohme_%28MSD%29.svg.png?_=20220211113800" },
  { name: "Panacea Biotec", domain: "panaceabiotec.com", img: "https://upload.wikimedia.org/wikipedia/en/thumb/2/23/Panacea_Biotec_Logo.svg/1280px-Panacea_Biotec_Logo.svg.png" },
  { name: "Pfizer", domain: "pfizer.com", img: "https://team.design/wp-content/uploads/2022/08/03_Pfizer_Logo.png" },
  { name: "Sanofi", domain: "sanofi.com", img: "https://images.seeklogo.com/logo-png/24/1/sanofi-logo-png_seeklogo-241329.png" },
  { name: "Serum Institute", domain: "seruminstitute.com", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRTak-eHS-EktsXzyTFp9guShP8ZrKvAKja3kzz7TQ5sjQL0yy-9yi4ow&s=10" },
  { name: "Wockhardt", domain: "wockhardt.com", img: "https://static.wixstatic.com/media/1b134f_082f6de6917e431ab3915ee6a724fbd1~mv2.png" },
  { name: "Zuventus", domain: "zuventus.co.in", img: "https://www.zuventus.com/sites/default/files/2023-02/logo.png" },
  { name: "Zydus", domain: "zyduslife.com", img: "https://zyduslife.com/public/images/corporate-logo.jpg" }
];

export default function App() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbwYsmni-Z7FAo7GPFGKx1N2B1WmsHXCliFtQqUQgwA14m-mzeagqweZXwnhHKiiTaRo/exec', {
        method: 'POST',
        body: formData,
      });
      
      if (response.ok) {
        alert('Enquiry submitted successfully!');
        form.reset();
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      alert('An error occurred. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col text-slate-800">
      
      {/* Sticky Navbar */}
      <nav className="bg-white/80 backdrop-blur-md border-b border-slate-100 px-8 h-16 flex items-center justify-between flex-shrink-0 z-50 sticky top-0">
        <div className="flex items-center gap-3">
          <img 
            src="https://40rtlqterhis3blw.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-18%20at%2010.27.34%20AM.jpeg" 
            alt="G.G. Enterprise Logo" 
            className="h-14 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
          <div className="flex flex-col">
            <h1 className="font-serif text-[18px] font-black text-[#002855] leading-none uppercase tracking-wide">G.G. Enterprise</h1>
          </div>
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-[13px] font-semibold text-slate-600">
          <a href="#" className="text-[#002855]">Home</a>
          <a href="#about" className="hover:text-[#002855] transition-colors">About</a>
          <a href="#cold-chain" className="hover:text-[#002855] transition-colors">Infrastructure</a>
          <a href="#partners" className="hover:text-[#002855] transition-colors">Partners</a>
          <a href="#contact" className="hover:text-[#002855] transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="tel:03323628572" className="hidden sm:block px-4 py-2 text-[12px] font-bold border border-[#002855] text-[#002855] rounded-full hover:bg-slate-50 transition-colors">
            Call Now
          </a>
          <a href="#contact" className="px-4 py-2 text-[12px] font-bold bg-[#002855] text-white rounded-full flex items-center justify-center shadow-sm hover:bg-[#002855] transition-colors">
            Enquiry
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row bg-gradient-to-br from-[#FFFDF0] to-white relative overflow-hidden min-h-[600px]">
        <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="font-serif text-4xl md:text-5xl font-bold text-[#002855] leading-[1.1] mb-6"
          >
            Trusted Vaccine <br/>Distribution Across <br/><span className="text-[#FDB813]">Eastern India</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg text-slate-600 mb-8 leading-relaxed max-w-lg"
          >
            Team over 30 years of excellence in vaccine storage, cold-chain management and doorstep delivery for hospitals, clinics and healthcare providers.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 flex-wrap"
          >
            <a href="#contact" className="px-8 py-4 bg-[#002855] text-white rounded-2xl font-bold text-[15px] shadow-lg shadow-blue-200 hover:scale-105 transition-transform">
              Contact Us Now
            </a>
          </motion.div>
        </div>

        {/* Image Area with Trust Badges */}
        <div className="w-full md:w-1/2 relative flex items-center justify-center p-8 md:p-12">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-[440px] h-[400px] md:h-[480px] mx-auto bg-slate-100 rounded-[32px] overflow-hidden relative shadow-2xl border-8 border-white"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-[#002855]/10 to-transparent z-10 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 via-black/40 to-transparent text-white z-20">
              <p className="text-sm italic opacity-90 font-medium text-center">"Safety and integrity in every dose we deliver."</p>
            </div>
            <img 
              src="https://40rtlqterhis3blw.public.blob.vercel-storage.com/ChatGPT%20Image%20Jul%2018%2C%202026%2C%2001_45_39%20PM.png" 
              alt="Vaccines" 
              className="w-full h-full object-cover object-top relative z-0" 
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section id="partners" className="py-20 bg-[#FFFDF0] overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto text-center px-8 mb-12"
        >
          <h2 className="font-serif text-3xl font-bold text-[#002855] mb-4">Our Partner Companies</h2>
          <p className="text-slate-600">G.G. Enterprise proudly distributes for leading national and global pharmaceutical brands.</p>
        </motion.div>
        
        <div className="w-full relative">
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FFFDF0] to-transparent z-10"></div>
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FFFDF0] to-transparent z-10"></div>
          
          <div className="animate-marquee gap-6 py-4">
            {PARTNERS.concat(PARTNERS).map((partner, i) => (
              <div key={i} className="flex-shrink-0 flex items-center justify-center w-[220px] h-[100px] bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow group">
                <img 
                  src={partner.img || `https://icon.horse/icon/${partner.domain}`} 
                  alt={partner.name}
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-full object-contain opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                    e.currentTarget.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <span className="hidden text-lg font-black text-[#002855] text-center leading-tight tracking-tight opacity-70 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0">{partner.name}</span>
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
            <div className="w-full aspect-square bg-[#FFFDF0] rounded-3xl overflow-hidden relative border border-slate-100 shadow-sm flex items-center justify-center">
              <img 
                src="https://40rtlqterhis3blw.public.blob.vercel-storage.com/ChatGPT%20Image%20Jul%2018%2C%202026%2C%2004_38_09%20PM.png" 
                alt="About GG Enterprise" 
                className="w-full h-full object-cover" 
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="font-serif text-3xl font-bold text-[#002855] mb-6">About GG Enterprise</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              G.G. Enterprise is one of West Bengal's trusted vaccine distribution companies, with nearly three decades of experience in the safe and reliable supply of vaccines. Committed to maintaining stringent cold-chain standards throughout the distribution process, the company ensures the quality, efficacy, and integrity of every vaccine it delivers.
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
            <h2 className="font-serif text-3xl font-bold text-[#002855] mb-4">Why Choose Us</h2>
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
                <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-[#002855] shadow-sm mb-6 group-hover:bg-[#002855] group-hover:text-white transition-colors">
                  {feature.icon}
                </div>
                <h3 className="font-serif text-lg font-bold text-slate-800 mb-2">{feature.title}</h3>
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
        className="max-w-5xl mx-auto -mt-12 relative z-20 mb-20 px-4 sm:px-8 w-full"
      >
        <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-6 md:p-10 flex w-full">
          <div className="grid grid-cols-3 gap-2 md:gap-10 w-full divide-x divide-slate-100 items-center justify-center">
            <div className="text-center">
              <p className="text-xl sm:text-3xl font-black text-[#002855]">30+</p>
              <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 leading-tight">Years Exp</p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-3xl font-black text-[#002855]">14+</p>
              <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 leading-tight">Partners</p>
            </div>
            <div className="text-center">
              <p className="text-xl sm:text-3xl font-black text-[#002855]">2-8°C</p>
              <p className="text-[9px] sm:text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1 leading-tight">Storage</p>
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
          <h2 className="font-serif text-3xl font-bold text-[#002855] mb-16">Our Process</h2>
          
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
                  <div className="w-6 h-6 rounded-full bg-[#FDB813] text-white flex items-center justify-center -mt-8 relative z-20 border-2 border-white shadow-sm">
                    <CheckCircle2 size={12} strokeWidth={3} />
                  </div>
                  <p className="text-[13px] font-bold text-slate-700 w-28 mt-2">{item.step}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 px-8 bg-white border-t border-slate-100">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto text-center"
        >
          <h2 className="font-serif text-3xl font-bold text-[#002855] mb-6">Our Team</h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            A dedicated group of professionals working together to ensure the safest and most reliable vaccine distribution.
          </p>
          <div className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-lg border border-slate-100">
            <img 
              src="https://40rtlqterhis3blw.public.blob.vercel-storage.com/WhatsApp%20Image%202026-07-15%20at%209.17.16%20PM.jpeg" 
              alt="G.G. Enterprise Team" 
              className="w-full h-auto object-cover"
              referrerPolicy="no-referrer"
            />
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
            <h2 className="font-serif text-3xl font-bold text-[#002855] mb-8">Get In Touch</h2>
            <div className="space-y-6 text-sm text-slate-600">
              <div className="flex gap-4">
                <MapPin className="text-[#FDB813] shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Regd. Office</h4>
                  <a href="https://maps.google.com/?q=86B,+Dhan+Devi+Khanna+Road,+Kolkata+-+700054" target="_blank" rel="noopener noreferrer" className="hover:text-[#002855] hover:underline transition-colors block">
                    86B, Dhan Devi Khanna Road<br/>Kolkata – 700054
                  </a>
                </div>
              </div>
              <div className="flex gap-4">
                <Phone className="text-[#FDB813] shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Landline</h4>
                  <p>033-23628572<br/>033-23648116<br/>033-23648400</p>
                </div>
              </div>
              <div className="flex gap-4">
                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="text-[#FDB813] shrink-0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Mobile & WhatsApp</h4>
                  <p>9748410204 / 9674164645 / 9831929269<br/>WhatsApp: 6289803458</p>
                </div>
              </div>
              <div className="flex gap-4">
                <Mail className="text-[#FDB813] shrink-0" />
                <div>
                  <h4 className="font-bold text-slate-800 mb-1">Email</h4>
                  <p>ggenterprise86@gmail.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Enquiry Form */}
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100">
            <h3 className="font-serif text-xl font-bold text-slate-800 mb-6">Send Enquiry</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input type="text" name="hospitalName" placeholder="Hospital / Clinic Name" className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:outline-none focus:border-[#002855] text-sm" required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" name="contactPerson" placeholder="Contact Person" className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:outline-none focus:border-[#002855] text-sm" required />
                <input type="tel" name="mobile" placeholder="Mobile Number" className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:outline-none focus:border-[#002855] text-sm" required />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="email" name="email" placeholder="Email Address" className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:outline-none focus:border-[#002855] text-sm" />
                <input type="text" name="city" placeholder="City" className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:outline-none focus:border-[#002855] text-sm" required />
              </div>
              <div>
                <textarea name="message" placeholder="Your Requirement / Message" rows={4} className="w-full px-4 py-3 rounded-xl bg-[#F8FAFC] border border-slate-200 focus:outline-none focus:border-[#002855] text-sm" required></textarea>
              </div>
              <button type="submit" disabled={isSubmitting} className="w-full py-4 bg-[#002855] text-white rounded-xl font-bold hover:bg-[#002855] transition-colors disabled:opacity-70 disabled:cursor-not-allowed">
                {isSubmitting ? 'Submitting...' : 'Submit Enquiry'}
              </button>
            </form>
          </div>

        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002855] text-white/80 h-auto md:h-16 py-4 md:py-0 flex flex-col md:flex-row items-center justify-between px-10 text-[11px] flex-shrink-0 gap-4">
        <div>
          © {new Date().getFullYear()} <span className="font-bold text-white">G.G. Enterprise</span> - All Rights Reserved. Regd. Office: 86B, Dhan Devi Khanna Road, Kolkata – 700054
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
          className="w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer"
        >
          <svg className="w-7 h-7 md:w-8 md:h-8" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </a>
      </div>

    </div>
  );
}
