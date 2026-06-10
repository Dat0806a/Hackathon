import { BotMessageSquare, ListChecks, ScanText, QrCode, ArrowRight } from 'lucide-react';
import screenBg from './screen.png';

export default function ProcessSection() {
  const steps = [
    { number: '01', icon: BotMessageSquare, title: 'Hướng dẫn AI', desc: 'Trợ lý ảo phân tích yêu cầu công dân, tự động phân loại và hướng dẫn hồ sơ theo thời gian thực.' },
    { number: '02', icon: ListChecks, title: 'Checklist Số', desc: 'Hệ thống tự động đồng bộ hóa các danh mục cần thiết từ cơ sở dữ liệu quốc gia, loại bỏ giấy tờ thừa.' },
    { number: '03', icon: ScanText, title: 'Xác minh OCR', desc: 'Công nghệ nhận dạng ký tự quang học quét và đối soát thông tin pháp lý với độ chính xác 99.9%.' },
    { number: '04', icon: QrCode, title: 'Biên lai QR', desc: 'Hoàn tất giao dịch với mã QR định danh duy nhất, cho phép truy xuất trạng thái mọi lúc mọi nơi.' },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-[#0b192f] overflow-hidden animate-[fadeIn_0.5s_ease-out] w-full">
      {/* Background Image with High-Fidelity Glow Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          alt="Mô hình hành chính tương lai" 
          className="w-full h-full object-cover opacity-70 scale-105 transition-all duration-300" 
          src={screenBg}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b192f] via-[#0b192f]/40 to-[#0b192f]"></div>
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        {/* Section Header */}
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <span className="text-sm text-yellow-600 tracking-[0.4em] uppercase mb-4 block font-semibold font-mono">Hệ Thống Quản Trị Số</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tight shadow-sm">MÔ HÌNH HÀNH CHÍNH TƯƠNG LAI</h2>
          <div className="w-32 h-1.5 bg-red-500 mx-auto mb-8 shadow-[0_0_10px_#ff5540] rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-300 leading-relaxed text-sm sm:text-base">
            Chuyển đổi quy trình thủ tục truyền thống thành luồng dữ liệu tự động, được bảo mật tuyệt đối bởi hệ thống AI STRATCOM.
          </p>
        </div>

        {/* 4-Step Bento Grid Process */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="group bg-[#112240]/70 backdrop-blur-md p-8 border-l-2 border-red-500 hover:translate-y-[-8px] transition-all duration-300 relative flex flex-col justify-between min-h-[300px] overflow-hidden"
            >
              <div className="absolute top-4 right-4 text-3xl font-extrabold text-red-500/10 group-hover:text-red-500/30 transition-colors">
                {step.number}
              </div>
              <div>
                <div className="mb-6">
                  <step.icon className="text-red-500 group-hover:scale-110 transition-transform duration-300" size={36} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6">{step.desc}</p>
              </div>
              <div className="w-full h-[2px] bg-gray-800 relative overflow-hidden mt-auto">
                <div className="absolute inset-0 bg-red-500 shadow-[0_0_8px_#ff5540] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Connection Line (Desktop) */}
        <div className="hidden lg:flex justify-between items-center px-12 mt-16 opacity-40">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_#ff5540]"></div>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-red-500 to-transparent mx-2"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_#ff5540]"></div>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-red-500 to-transparent mx-2"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_#ff5540]"></div>
          <div className="flex-1 h-[1px] bg-gradient-to-r from-red-500 to-transparent mx-2"></div>
          <div className="w-2.5 h-2.5 rounded-full bg-red-500 shadow-[0_0_8px_#ff5540]"></div>
        </div>

        {/* Bottom CTA Button */}
        <div className="mt-16 flex justify-center">
          <button className="px-12 py-4 bg-transparent border border-red-550 border-red-500 text-red-500 font-bold tracking-[0.2em] hover:bg-red-500 hover:text-white transition-all shadow-[0_0_15px_rgba(255,85,64,0.15)] hover:shadow-[0_0_25px_rgba(255,85,64,0.35)] uppercase group flex items-center gap-2">
            Khởi tạo quy trình số
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
