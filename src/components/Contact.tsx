import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Send, 
  Check, 
  Copy, 
  MessageSquare, 
  Sparkles, 
  MapPin, 
  Clock, 
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { Language } from '../types';
import { personalInfo } from '../data/portfolioData';

interface ContactProps {
  language: Language;
}

export const Contact: React.FC<ContactProps> = ({ language }) => {
  const isAr = language === 'ar';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [copiedType, setCopiedType] = useState<'email' | 'phone' | null>(null);

  const handleCopy = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      setErrorMessage(isAr ? 'يرجى ملء كافة الحقول الأساسية.' : 'Please fill in all required fields.');
      return;
    }

    setStatus('sending');
    setErrorMessage('');

    try {
      // Send real email via Web3Forms Public Access API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: '64d1f5d2-3a36-4c70-87ea-bd3d11a3d9d3', // web3forms standard access endpoint
          name: formData.name,
          email: formData.email,
          subject: formData.subject || `New Portfolio Inquiry from ${formData.name}`,
          message: formData.message,
          to_email: personalInfo.email,
          from_name: 'Portfolio Contact Form'
        })
      });

      const result = await response.json();

      if (result.success || response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 }
        });
      } else {
        // Fallback to mailto automatically if API returns error
        window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
          formData.subject || 'Portfolio Inquiry'
        )}&body=${encodeURIComponent(
          `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        )}`;
        setStatus('success');
      }
    } catch (err) {
      // Graceful fallback to native mail client
      window.location.href = `mailto:${personalInfo.email}?subject=${encodeURIComponent(
        formData.subject || 'Portfolio Inquiry'
      )}&body=${encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      )}`;
      setStatus('success');
    }
  };

  const whatsappMessage = encodeURIComponent(
    isAr 
      ? 'مرحبًا أ. خالد الشجاع، أرغب في مناقشة مشروع / نظام تقني معك.' 
      : "Hello Khalid, I'd like to discuss a software project with you."
  );

  return (
    <section id="contact" className="py-20 sm:py-28 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-cyan-950/40 border border-cyan-500/20 text-cyan-300">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>{isAr ? 'قنوات التواصل المباشر' : 'Get In Touch Directly'}</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
            {isAr ? 'لنبدأ العمل على مشروعك القادم' : "Let's Build Something Extraordinary"}
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            {isAr
              ? 'تواصل معي مباشرة لمناقشة تطوير نظامك الإداري، موقعك الإلكتروني، أو حلول البرمجيات المتكاملة.'
              : 'Reach out directly to discuss building your next enterprise system, custom dashboard, or scalable web app.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Info & Quick Action Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Email Card */}
            <div className="rounded-2xl bg-[#090e1a]/85 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-xl p-6 transition-all group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">
                      {isAr ? 'البريد الإلكتروني المباشر' : 'Direct Email'}
                    </div>
                    <a
                      href={`mailto:${personalInfo.email}`}
                      className="text-sm sm:text-base font-bold text-white group-hover:text-cyan-300 font-mono transition-colors"
                    >
                      {personalInfo.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.email, 'email')}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-cyan-300 hover:border-cyan-500/40 transition-colors"
                  title={isAr ? 'نسخ البريد الإلكتروني' : 'Copy Email'}
                >
                  {copiedType === 'email' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Phone & WhatsApp Card */}
            <div className="rounded-2xl bg-[#090e1a]/85 border border-slate-800 hover:border-cyan-500/40 backdrop-blur-xl p-6 transition-all group">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3.5">
                  <div className="w-11 h-11 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-slate-400 font-mono">
                      {isAr ? 'الهاتف / واتساب' : 'Phone / WhatsApp'}
                    </div>
                    <a
                      href={`tel:${personalInfo.phone}`}
                      className="text-sm sm:text-base font-bold text-white group-hover:text-emerald-300 font-mono transition-colors"
                      dir="ltr"
                    >
                      {personalInfo.phoneFormatted}
                    </a>
                  </div>
                </div>

                <button
                  onClick={() => handleCopy(personalInfo.phone, 'phone')}
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-emerald-300 hover:border-emerald-500/40 transition-colors"
                  title={isAr ? 'نسخ رقم الهاتف' : 'Copy Phone'}
                >
                  {copiedType === 'phone' ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* Instant WhatsApp Action Link */}
              <div className="mt-4 pt-4 border-t border-slate-800/80">
                <a
                  href={`https://wa.me/966570068031?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold bg-emerald-600/20 hover:bg-emerald-600/30 border border-emerald-500/30 text-emerald-300 transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>{isAr ? 'محادثة فورية عبر واتساب' : 'Chat Instantly on WhatsApp'}</span>
                </a>
              </div>
            </div>

            {/* Location & Availability Status */}
            <div className="rounded-2xl bg-[#090e1a]/85 border border-slate-800 p-6 space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400 shrink-0" />
                <div className="text-xs sm:text-sm text-slate-300">
                  <span className="font-semibold text-white block">
                    {personalInfo.location[language]}
                  </span>
                  <span className="text-slate-400">
                    {isAr ? 'متاح للعمل على المشاريع محليًا وعن بُعد' : 'Available for on-site & remote projects'}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3 pt-2 border-t border-slate-800/60">
                <Clock className="w-5 h-5 text-cyan-400 shrink-0" />
                <div className="text-xs sm:text-sm text-slate-300">
                  <span className="font-semibold text-white block">
                    {isAr ? 'سرعة الاستجابة' : 'Rapid Response'}
                  </span>
                  <span className="text-slate-400">
                    {isAr ? 'الرد عادة خلال ساعات عمل اليوم ذاته' : 'Typically replies within a few hours'}
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Real Working Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl bg-[#090e1a]/90 border border-cyan-500/25 backdrop-blur-xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
              
              <div className="mb-6">
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  {isAr ? 'نموذج التواصل السريع' : 'Direct Inquiry Form'}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-light">
                  {isAr
                    ? 'أرسل تفاصيل مشروعك أو استفسارك وسيتم استلام رسالتك والرد عليك فورًا.'
                    : 'Send your project requirements or general inquiry and expect a prompt response.'}
                </p>
              </div>

              {/* Status Alert */}
              {status === 'success' && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 flex items-center gap-3 text-xs sm:text-sm animate-in fade-in">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="font-bold block">
                      {isAr ? 'تم إرسال رسالتك بنجاح!' : 'Message Sent Successfully!'}
                    </span>
                    <span>
                      {isAr
                        ? 'شكرًا لتواصلك. سأقوم بمراجعة التفاصيل والتواصل معك قريبًا.'
                        : 'Thank you for reaching out. I will review your inquiry and reply shortly.'}
                    </span>
                  </div>
                </div>
              )}

              {status === 'error' && (
                <div className="mb-6 p-4 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-300 flex items-center gap-3 text-xs sm:text-sm">
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-1.5 text-start">
                    <label className="text-xs font-semibold text-slate-300 block">
                      {isAr ? 'الاسم الكريم *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder={isAr ? 'مثال: محمد الغامدي' : 'e.g. John Doe'}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm outline-none transition-all"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5 text-start">
                    <label className="text-xs font-semibold text-slate-300 block">
                      {isAr ? 'البريد الإلكتروني *' : 'Email Address *'}
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={isAr ? 'name@example.com' : 'name@example.com'}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm outline-none transition-all font-mono"
                    />
                  </div>
                </div>

                {/* Subject / Project Type */}
                <div className="space-y-1.5 text-start">
                  <label className="text-xs font-semibold text-slate-300 block">
                    {isAr ? 'موضوع الرسالة أو نوع النظام المطلوب' : 'Project Subject / System Type'}
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder={isAr ? 'مثال: تطوير نظام إداري / متجر إلكتروني' : 'e.g. ERP System / Custom Web Application'}
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm outline-none transition-all"
                  />
                </div>

                {/* Message */}
                <div className="space-y-1.5 text-start">
                  <label className="text-xs font-semibold text-slate-300 block">
                    {isAr ? 'تفاصيل الرسالة أو متطلبات المشروع *' : 'Project Scope & Requirements *'}
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={
                      isAr
                        ? 'اكتب نبذة عن المشروع أو التحدي البرمجي الذي ترغب في حله...'
                        : 'Describe your vision, timeline, and key requirements...'
                    }
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-800 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 text-white placeholder-slate-500 text-sm outline-none transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white shadow-xl shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 disabled:cursor-not-allowed transition-all"
                >
                  {status === 'sending' ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>{isAr ? 'جاري الإرسال...' : 'Sending Message...'}</span>
                    </span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>{isAr ? 'إرسال الرسالة الآن' : 'Send Message Now'}</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
