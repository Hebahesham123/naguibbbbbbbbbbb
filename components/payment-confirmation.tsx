"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Check, AlertCircle, MessageCircle, Copy, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PaymentConfirmation() {
  const [copied, setCopied] = useState<string | null>(null)
  const [expandedBank, setExpandedBank] = useState<string | null>("misr")
  const [scrollProgress, setScrollProgress] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = typeof window !== "undefined" ? window.innerHeight : 0
      const documentHeight = typeof document !== "undefined" ? document.documentElement.scrollHeight : 0
      const scrollTop = typeof window !== "undefined" ? window.scrollY : 0
      const totalScroll = documentHeight - windowHeight
      setScrollProgress(totalScroll > 0 ? (scrollTop / totalScroll) * 100 : 0)
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text)
    setCopied(key)
    setTimeout(() => setCopied(null), 2000)
  }

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[#f5f1eb] via-[#ede8e0] to-[#e8e0d6]">
      {/* Full Background Logo Pattern - Animated */}
      <div 
        className="fixed inset-0 opacity-[0.08] pointer-events-none z-0"
        style={{
          backgroundImage: 'url("/images/ns-logo.png")',
          backgroundRepeat: 'repeat',
          backgroundSize: '600px 600px',
          backgroundPosition: '0 0',
          animation: 'logoFloat 25s ease-in-out infinite',
        }}
      />

      {/* Animated Gradient Overlay */}
      <div className="fixed inset-0 bg-gradient-to-br from-[#8B4513]/5 via-transparent to-[#A0522D]/5 pointer-events-none z-0 animate-gradient-shift" />

      {/* Floating Decorative Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-[#8B4513]/8 animate-float"
            style={{
              width: `${Math.random() * 6 + 3}px`,
              height: `${Math.random() * 6 + 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${Math.random() * 15 + 15}s`,
            }}
          />
        ))}
      </div>

      {/* Mouse Follow Glow Effect */}
      <div
        className="fixed pointer-events-none z-0 transition-all duration-500 ease-out"
        style={{
          width: '800px',
          height: '800px',
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(139, 69, 19, 0.12) 0%, transparent 70%)`,
          left: `${mousePosition.x - 400}px`,
          top: `${mousePosition.y - 400}px`,
          transform: 'translate(-50%, -50%)',
        }}
      />

      {/* Progress indicator */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#8B4513] z-50 transition-all duration-300 shadow-lg"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 sm:px-8 py-12 sm:py-16 space-y-10 sm:space-y-12">
        {/* Success Status Section */}
        <div className="animate-fade-in space-y-8">
          <div className="flex justify-center">
            <div className="relative">
              {/* Animated rings */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#8B4513] to-[#A0522D] rounded-full blur-3xl opacity-40 animate-pulse-slow" />
              <div className="absolute inset-0 bg-gradient-to-r from-[#A0522D] to-[#8B4513] rounded-full blur-2xl opacity-30 animate-pulse-slow" style={{ animationDelay: '1s' }} />
              {/* Success icon - Logo */}
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-[#8B4513] via-[#A0522D] to-[#8B4513] rounded-full flex items-center justify-center shadow-2xl border-2 border-[#D2B48C]/40 animate-bounce-in overflow-hidden">
                <Image
                  src="/images/ns-logo.png"
                  alt="Naguib Selim"
                  width={80}
                  height={40}
                  className="object-contain w-16 h-16 sm:w-20 sm:h-20 brightness-0 invert"
                  priority
                />
              </div>
            </div>
          </div>

          <div className="text-center space-y-5">
            <h1 className="text-4xl sm:text-5xl font-bold text-[#5C4033] text-balance leading-tight animate-slide-up-delay">
              تم تجهيز طلبكم
            </h1>
            <p className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#8B4513] bg-clip-text text-transparent animate-gradient-text">
              Your Order is Ready
            </p>
            <p className="text-lg sm:text-xl text-[#6B4E3D]/90 leading-relaxed text-balance max-w-2xl mx-auto">
              نحيطكم علماً بأنه تم الانتهاء من تجهيز الأوردر الخاص بكم لتأكيد موعد التركيب النهائي
            </p>
          </div>
        </div>

        {/* Important Notice */}
        <div className="bg-white/30 backdrop-blur-xl border-l-4 border-[#8B4513] rounded-2xl p-7 sm:p-8 space-y-4 animate-slide-up shadow-2xl border border-white/20 backdrop-saturate-150">
          <div className="flex items-start gap-5">
            <div className="relative flex-shrink-0 mt-1">
              <div className="absolute inset-0 bg-[#8B4513]/30 rounded-full blur-xl animate-pulse" />
              <AlertCircle className="relative w-7 h-7 sm:w-8 sm:h-8 text-[#8B4513]" />
            </div>
            <div className="min-w-0 flex-1 space-y-3">
              <p className="font-bold text-[#5C4033] text-lg sm:text-xl">⚠️ هام - Important</p>
              <p className="text-base sm:text-lg text-[#6B4E3D] leading-relaxed">
                يرجى إتمام سداد المبلغ المتبقي المستحق عبر أحد الخيارات التالية:
              </p>
              <p className="text-base sm:text-lg text-[#6B4E3D] leading-relaxed">
                Please complete payment using one of the options below:
              </p>
            </div>
          </div>
        </div>

        {/* Bank Accounts Section */}
        <div className="space-y-6 sm:space-y-7">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#5C4033] text-center animate-fade-in-delay">
            خيارات الدفع • Payment Options
          </h2>

          {/* Bank MISR */}
          <div className="border border-white/30 rounded-2xl overflow-hidden hover:border-white/50 hover:shadow-2xl transition-all duration-500 bg-white/25 backdrop-blur-2xl shadow-xl animate-slide-up-delay-2 backdrop-saturate-150">
            <button
              onClick={() => setExpandedBank(expandedBank === "misr" ? null : "misr")}
              className="w-full px-7 sm:px-8 py-6 sm:py-7 bg-white/20 backdrop-blur-md hover:bg-white/30 flex items-center justify-between transition-all duration-300 group border-b border-white/20"
            >
              <div className="text-left min-w-0">
                <p className="font-bold text-xl sm:text-2xl text-[#5C4033] truncate">بنك مصر</p>
                <p className="text-base sm:text-lg text-[#8B4513] mt-1">Banque MISR</p>
              </div>
              <ChevronDown
                className={`w-6 h-6 sm:w-7 sm:h-7 text-[#8B4513] transition-all duration-300 flex-shrink-0 ml-4 group-hover:scale-110 group-hover:text-[#A0522D]`}
                style={{
                  transform: expandedBank === "misr" ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {expandedBank === "misr" && (
              <div className="px-7 sm:px-8 py-7 sm:py-8 space-y-6 bg-white/20 backdrop-blur-xl animate-expand backdrop-saturate-150">
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-[#8B4513] uppercase tracking-wider">
                    رقم الحساب • Account Number
                  </label>
                  <div className="flex items-center gap-3 min-w-0">
                    <code className="flex-1 bg-[#FFF8DC] border-2 border-[#D2B48C] px-5 sm:px-6 py-4 rounded-xl text-base sm:text-lg font-mono text-[#5C4033] truncate shadow-inner">
                      4620001000000980
                    </code>
                    <button
                      onClick={() => copyToClipboard("4620001000000980", "misr-account")}
                      className="p-4 hover:bg-[#F5E6D3] rounded-xl transition-all duration-200 flex-shrink-0 hover:scale-110 active:scale-95 border-2 border-[#D2B48C] hover:border-[#8B4513] relative group"
                    >
                      <Copy className="w-6 h-6 text-[#8B4513] group-hover:text-[#A0522D] transition-colors" />
                      {copied === "misr-account" && (
                        <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-sm text-white font-semibold bg-[#8B4513] px-4 py-2 rounded-lg shadow-2xl animate-fade-in whitespace-nowrap">
                          ✓ Copied!
                        </span>
                      )}
                    </button>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-semibold text-[#8B4513] uppercase tracking-wider">IBAN</label>
                  <div className="flex items-center gap-3 min-w-0">
                    <code className="flex-1 bg-[#FFF8DC] border-2 border-[#D2B48C] px-5 sm:px-6 py-4 rounded-xl text-sm sm:text-base font-mono text-[#5C4033] truncate shadow-inner">
                      EG860002046204620001000000980
                    </code>
                    <button
                      onClick={() => copyToClipboard("EG860002046204620001000000980", "misr-iban")}
                      className="p-4 hover:bg-[#F5E6D3] rounded-xl transition-all duration-200 flex-shrink-0 hover:scale-110 active:scale-95 border-2 border-[#D2B48C] hover:border-[#8B4513] relative group"
                    >
                      <Copy className="w-6 h-6 text-[#8B4513] group-hover:text-[#A0522D] transition-colors" />
                      {copied === "misr-iban" && (
                        <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-sm text-white font-semibold bg-[#8B4513] px-4 py-2 rounded-lg shadow-2xl animate-fade-in whitespace-nowrap">
                          ✓ Copied!
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Bank S.A.I.B */}
          <div className="border border-white/30 rounded-2xl overflow-hidden hover:border-white/50 hover:shadow-2xl transition-all duration-500 bg-white/25 backdrop-blur-2xl shadow-xl animate-slide-up-delay-3 backdrop-saturate-150">
            <button
              onClick={() => setExpandedBank(expandedBank === "saib" ? null : "saib")}
              className="w-full px-7 sm:px-8 py-6 sm:py-7 bg-white/20 backdrop-blur-md hover:bg-white/30 flex items-center justify-between transition-all duration-300 group border-b border-white/20"
            >
              <div className="text-left min-w-0">
                <p className="font-bold text-xl sm:text-2xl text-[#5C4033] truncate">بنك سايب</p>
                <p className="text-base sm:text-lg text-[#8B4513] mt-1">S.A.I.B Bank</p>
              </div>
              <ChevronDown
                className={`w-6 h-6 sm:w-7 sm:h-7 text-[#8B4513] transition-all duration-300 flex-shrink-0 ml-4 group-hover:scale-110 group-hover:text-[#A0522D]`}
                style={{
                  transform: expandedBank === "saib" ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {expandedBank === "saib" && (
              <div className="px-7 sm:px-8 py-7 sm:py-8 space-y-6 bg-white/20 backdrop-blur-xl animate-expand backdrop-saturate-150">
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-[#8B4513] uppercase tracking-wider">
                    رقم الحساب • Account Number
                  </label>
                  <div className="flex items-center gap-3 min-w-0">
                    <code className="flex-1 bg-[#FFF8DC] border-2 border-[#D2B48C] px-5 sm:px-6 py-4 rounded-xl text-base sm:text-lg font-mono text-[#5C4033] truncate shadow-inner">
                      0420302699610010
                    </code>
                    <button
                      onClick={() => copyToClipboard("0420302699610010", "saib-account")}
                      className="p-4 hover:bg-[#F5E6D3] rounded-xl transition-all duration-200 flex-shrink-0 hover:scale-110 active:scale-95 border-2 border-[#D2B48C] hover:border-[#8B4513] relative group"
                    >
                      <Copy className="w-6 h-6 text-[#8B4513] group-hover:text-[#A0522D] transition-colors" />
                      {copied === "saib-account" && (
                        <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-sm text-white font-semibold bg-[#8B4513] px-4 py-2 rounded-lg shadow-2xl animate-fade-in whitespace-nowrap">
                          ✓ Copied!
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Instapay Payment Option */}
          <div className="border border-white/30 rounded-2xl overflow-hidden hover:border-white/50 hover:shadow-2xl transition-all duration-500 bg-white/25 backdrop-blur-2xl shadow-xl animate-slide-up-delay-4 backdrop-saturate-150">
            <button
              onClick={() => setExpandedBank(expandedBank === "instapay" ? null : "instapay")}
              className="w-full px-7 sm:px-8 py-6 sm:py-7 bg-white/20 backdrop-blur-md hover:bg-white/30 flex items-center justify-between transition-all duration-300 group border-b border-white/20"
            >
              <div className="text-left min-w-0">
                <p className="font-bold text-xl sm:text-2xl text-[#5C4033] truncate">انستاباي</p>
                <p className="text-base sm:text-lg text-[#8B4513] mt-1">Instapay</p>
              </div>
              <ChevronDown
                className={`w-6 h-6 sm:w-7 sm:h-7 text-[#8B4513] transition-all duration-300 flex-shrink-0 ml-4 group-hover:scale-110 group-hover:text-[#A0522D]`}
                style={{
                  transform: expandedBank === "instapay" ? "rotate(180deg)" : "rotate(0deg)",
                }}
              />
            </button>

            {expandedBank === "instapay" && (
              <div className="px-7 sm:px-8 py-7 sm:py-8 space-y-6 bg-white/20 backdrop-blur-xl animate-expand backdrop-saturate-150">
                <div className="bg-white/30 backdrop-blur-2xl rounded-xl p-6 space-y-4 border border-white/30">
                  <div className="flex items-start gap-4">
                    <div className="relative flex-shrink-0 mt-1">
                      <div className="absolute inset-0 bg-[#8B4513]/30 rounded-full blur-lg" />
                      <AlertCircle className="relative w-6 h-6 sm:w-7 sm:h-7 text-[#8B4513]" />
                    </div>
                    <div className="min-w-0 flex-1 space-y-2">
                      <p className="font-bold text-[#5C4033] text-lg sm:text-xl">⚠️ هام - Important</p>
                      <p className="text-base sm:text-lg text-[#6B4E3D] leading-relaxed">
                        يرجى إتمام سداد المبلغ المتبقي المستحق عبر أحد الخيارات التالية:
                      </p>
                      <p className="text-base sm:text-lg text-[#6B4E3D] leading-relaxed">
                        Please complete payment using one of the options below:
                      </p>
                    </div>
                  </div>
                </div>

                {/* Bank MISR Account */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-[#8B4513] uppercase tracking-wider">
                    بنك مصر • Bank MISR
                  </label>
                  <div className="flex items-center gap-3 min-w-0">
                    <code className="flex-1 bg-[#FFF8DC] border-2 border-[#D2B48C] px-5 sm:px-6 py-4 rounded-xl text-base sm:text-lg font-mono text-[#5C4033] truncate shadow-inner">
                      4620001000000980
                    </code>
                    <button
                      onClick={() => copyToClipboard("4620001000000980", "instapay-misr")}
                      className="p-4 hover:bg-[#F5E6D3] rounded-xl transition-all duration-200 flex-shrink-0 hover:scale-110 active:scale-95 border-2 border-[#D2B48C] hover:border-[#8B4513] relative group"
                    >
                      <Copy className="w-6 h-6 text-[#8B4513] group-hover:text-[#A0522D] transition-colors" />
                      {copied === "instapay-misr" && (
                        <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-sm text-white font-semibold bg-[#8B4513] px-4 py-2 rounded-lg shadow-2xl animate-fade-in whitespace-nowrap">
                          ✓ Copied!
                        </span>
                      )}
                    </button>
                  </div>
                </div>

                {/* Bank S.A.I.B Account */}
                <div className="space-y-3">
                  <label className="text-sm font-semibold text-[#8B4513] uppercase tracking-wider">
                    بنك سايب • S.A.I.B Bank
                  </label>
                  <div className="flex items-center gap-3 min-w-0">
                    <code className="flex-1 bg-[#FFF8DC] border-2 border-[#D2B48C] px-5 sm:px-6 py-4 rounded-xl text-base sm:text-lg font-mono text-[#5C4033] truncate shadow-inner">
                      0420302699610010
                    </code>
                    <button
                      onClick={() => copyToClipboard("0420302699610010", "instapay-saib")}
                      className="p-4 hover:bg-[#F5E6D3] rounded-xl transition-all duration-200 flex-shrink-0 hover:scale-110 active:scale-95 border-2 border-[#D2B48C] hover:border-[#8B4513] relative group"
                    >
                      <Copy className="w-6 h-6 text-[#8B4513] group-hover:text-[#A0522D] transition-colors" />
                      {copied === "instapay-saib" && (
                        <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-sm text-white font-semibold bg-[#8B4513] px-4 py-2 rounded-lg shadow-2xl animate-fade-in whitespace-nowrap">
                          ✓ Copied!
                        </span>
                      )}
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Account Name Info */}
        <div className="bg-white/30 backdrop-blur-2xl rounded-2xl p-7 sm:p-8 shadow-2xl border border-white/30 animate-slide-up-delay-5 backdrop-saturate-150">
          <p className="text-base sm:text-lg text-[#8B4513] mb-4 text-center">اسم الحساب • Account Holder Name:</p>
          
          {/* Arabic Account Name */}
          <div className="space-y-2 mb-4">
            <label className="text-sm font-semibold text-[#8B4513] uppercase tracking-wider block text-center">
              بالعربية • Arabic
            </label>
            <div className="flex items-center gap-3 justify-center">
              <code className="bg-[#FFF8DC] border-2 border-[#D2B48C] px-5 sm:px-6 py-4 rounded-xl text-lg sm:text-xl font-bold text-[#5C4033] shadow-inner max-w-md">
                نجيب سليم وشركاه
              </code>
              <button
                onClick={() => copyToClipboard("نجيب سليم وشركاه", "account-name-arabic")}
                className="p-4 hover:bg-[#F5E6D3] rounded-xl transition-all duration-200 flex-shrink-0 hover:scale-110 active:scale-95 border-2 border-[#D2B48C] hover:border-[#8B4513] relative group"
              >
                <Copy className="w-6 h-6 text-[#8B4513] group-hover:text-[#A0522D] transition-colors" />
                {copied === "account-name-arabic" && (
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-sm text-white font-semibold bg-[#8B4513] px-4 py-2 rounded-lg shadow-2xl animate-fade-in whitespace-nowrap">
                    ✓ Copied!
                  </span>
                )}
              </button>
            </div>
          </div>

          {/* English Account Name */}
          <div className="space-y-2">
            <label className="text-sm font-semibold text-[#8B4513] uppercase tracking-wider block text-center">
              بالإنجليزية • English
            </label>
            <div className="flex items-center gap-3 justify-center">
              <code className="bg-[#FFF8DC] border-2 border-[#D2B48C] px-5 sm:px-6 py-4 rounded-xl text-lg sm:text-xl font-bold text-[#5C4033] shadow-inner max-w-md">
                Naguib Selim & Co.
              </code>
              <button
                onClick={() => copyToClipboard("Naguib Selim & Co.", "account-name-english")}
                className="p-4 hover:bg-[#F5E6D3] rounded-xl transition-all duration-200 flex-shrink-0 hover:scale-110 active:scale-95 border-2 border-[#D2B48C] hover:border-[#8B4513] relative group"
              >
                <Copy className="w-6 h-6 text-[#8B4513] group-hover:text-[#A0522D] transition-colors" />
                {copied === "account-name-english" && (
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-sm text-white font-semibold bg-[#8B4513] px-4 py-2 rounded-lg shadow-2xl animate-fade-in whitespace-nowrap">
                    ✓ Copied!
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Next Steps */}
        <div className="bg-white/30 backdrop-blur-2xl rounded-2xl p-7 sm:p-8 space-y-5 border border-white/30 animate-slide-up-delay-6 shadow-2xl backdrop-saturate-150">
          <h3 className="font-bold text-xl sm:text-2xl text-[#5C4033] text-center">الخطوة التالية • Next Step</h3>
          <div className="space-y-4 text-base sm:text-lg">
            <p className="text-[#6B4E3D] leading-relaxed">
              <span className="font-bold text-[#8B4513]">1.</span> بعد إتمام عملية السداد، يرجى إرسال صورة واضحة من
              إيصال الدفع
            </p>
            <p className="text-[#6B4E3D] leading-relaxed">
              <span className="font-bold text-[#8B4513]">2.</span> After payment, send a clear receipt screenshot
            </p>
          </div>
        </div>

        {/* WhatsApp Button */}
        <a href="http://wa.me/201225020005" target="_blank" rel="noopener noreferrer" className="block w-full animate-slide-up-delay-7">
          <Button
            size="lg"
            className="w-full bg-gradient-to-r from-[#8B4513] via-[#A0522D] to-[#8B4513] hover:from-[#A0522D] hover:via-[#B87333] hover:to-[#A0522D] text-white font-bold text-lg sm:text-xl py-8 sm:py-10 rounded-2xl flex items-center justify-center gap-4 shadow-2xl hover:shadow-[#8B4513]/60 transition-all duration-300 active:scale-[0.97] relative overflow-hidden group border-2 border-[#6B4423]/30"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            <MessageCircle className="w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 relative z-10 animate-pulse-slow" />
            <span className="text-center whitespace-normal relative z-10">
              إرسال عبر الواتساب
              <br className="sm:hidden" />
              Send via WhatsApp
            </span>
          </Button>
        </a>

        {/* Footer Info */}
        <div className="text-center space-y-4 py-8 sm:py-10 border-t-2 border-[#D2B48C]/50">
          <p className="text-base sm:text-lg text-[#8B4513]">لتأكيد حجز موعد التركيب • To confirm installation date</p>
          <p className="text-lg sm:text-xl text-[#5C4033] font-bold">Naguib Selim • Fabrics & More</p>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up-delay {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes bounce-in {
          0% {
            transform: scale(0.6);
            opacity: 0;
          }
          50% {
            transform: scale(1.15);
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes check-draw {
          0% {
            stroke-dasharray: 0 50;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            stroke-dasharray: 50 0;
            opacity: 1;
          }
        }

        @keyframes expand {
          from {
            opacity: 0;
            max-height: 0;
            transform: scaleY(0);
          }
          to {
            opacity: 1;
            max-height: 600px;
            transform: scaleY(1);
          }
        }

        @keyframes logoFloat {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
          }
          25% {
            transform: translate(30px, -30px) rotate(2deg);
          }
          50% {
            transform: translate(-20px, 20px) rotate(-2deg);
          }
          75% {
            transform: translate(15px, -15px) rotate(1deg);
          }
        }

        @keyframes logo-glow {
          0%, 100% {
            filter: brightness(1.05) contrast(1.05) drop-shadow(0 0 20px rgba(139, 69, 19, 0.3));
          }
          50% {
            filter: brightness(1.1) contrast(1.1) drop-shadow(0 0 30px rgba(139, 69, 19, 0.5));
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0) translateX(0);
            opacity: 0.08;
          }
          25% {
            transform: translateY(-30px) translateX(15px);
            opacity: 0.15;
          }
          50% {
            transform: translateY(-60px) translateX(-15px);
            opacity: 0.1;
          }
          75% {
            transform: translateY(-30px) translateX(8px);
            opacity: 0.15;
          }
        }

        @keyframes gradient-shift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes gradient-text {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.6;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.05);
          }
        }

        .animate-fade-in {
          animation: fade-in 1.2s ease-out;
        }

        .animate-fade-in-delay {
          animation: fade-in 1.2s ease-out 0.3s both;
        }

        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }

        .animate-slide-up-delay {
          animation: slide-up 1s ease-out 0.2s both;
        }

        .animate-slide-up-delay-2 {
          animation: slide-up 1s ease-out 0.4s both;
        }

        .animate-slide-up-delay-3 {
          animation: slide-up 1s ease-out 0.6s both;
        }

        .animate-slide-up-delay-4 {
          animation: slide-up 1s ease-out 0.8s both;
        }

        .animate-slide-up-delay-5 {
          animation: slide-up 1s ease-out 1s both;
        }

        .animate-slide-up-delay-6 {
          animation: slide-up 1s ease-out 1.2s both;
        }

        .animate-slide-up-delay-7 {
          animation: slide-up 1s ease-out 1.4s both;
        }

        .animate-bounce-in {
          animation: bounce-in 0.8s ease-out;
        }

        .animate-check-draw {
          animation: check-draw 1s ease-out;
        }

        .animate-expand {
          animation: expand 0.6s ease-out forwards;
        }

        .animate-float {
          animation: float linear infinite;
        }

        .animate-gradient-shift {
          animation: gradient-shift 20s ease infinite;
          background-size: 200% 200%;
        }

        .animate-gradient-text {
          animation: gradient-text 3s ease infinite;
          background-size: 200% 200%;
        }

        .animate-logo-glow {
          animation: logo-glow 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  )
}
