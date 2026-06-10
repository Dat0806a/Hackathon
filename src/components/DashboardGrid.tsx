import { useEffect, useRef } from 'react';
import { Brain, BadgeCheck, ShieldAlert, Database } from 'lucide-react';
import dragonVideo from './Golden_energy_dragon_flying_across_202606110257.mp4';

export default function DashboardGrid() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasEndedRef = useRef<boolean>(false);
  const hasPlayedRef = useRef<boolean>(false);

  const cards = [
    { title: 'AI-Driven Governance', icon: Brain, color: 'text-red-500', desc: 'Hệ thống phân tích dữ liệu thời gian thực giúp đưa ra các quyết định hành chính chính xác và tối ưu hóa nguồn lực quốc gia.', col: 'col-span-12 md:col-span-8' },
    { title: 'Định Danh Quốc Gia', icon: BadgeCheck, color: 'text-yellow-600', desc: 'Một chạm cho mọi dịch vụ công. Hệ thống e-ID bảo mật bằng công nghệ sinh trắc học tiên tiến.', col: 'col-span-12 md:col-span-4' },
    { title: 'An Ninh Mạng Độc Lập', icon: ShieldAlert, color: 'text-red-500', desc: 'Chủ quyền số được bảo vệ bởi các thuật toán mã hóa nội sinh cấp độ quân sự.', col: 'col-span-12 md:col-span-4' },
    { title: 'Dữ Liệu Mở Minh Bạch', icon: Database, color: 'text-yellow-600', desc: 'Cổng dữ liệu quốc gia cho phép công dân và doanh nghiệp khai thác, kiến tạo giá trị mới trên nền tảng dùng chung.', col: 'col-span-12 md:col-span-8' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Play video when 5% (0.05) visual intersection threshold is reached
          if (entry.isIntersecting && entry.intersectionRatio >= 0.05) {
            if (!hasPlayedRef.current && !hasEndedRef.current) {
              if (videoRef.current) {
                videoRef.current.play().catch((err) => {
                  console.warn("Video failed to play:", err);
                });
                hasPlayedRef.current = true;
              }
            }
          } else if (!entry.isIntersecting) {
            // Reset when element goes out of view entirely, so it will play again on next enter
            hasPlayedRef.current = false;
            hasEndedRef.current = false;
            if (videoRef.current) {
              videoRef.current.pause();
              videoRef.current.currentTime = 0;
            }
          }
        });
      },
      {
        threshold: [0, 0.05], // Observe both exiting completely and 5% threshold
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
      // If user scrolls back near the top of the page, reset video state
      if (currentScroll <= 30) {
        if (hasEndedRef.current || hasPlayedRef.current) {
          hasEndedRef.current = false;
          hasPlayedRef.current = false;
          if (videoRef.current) {
            videoRef.current.currentTime = 0;
            videoRef.current.pause();
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section ref={sectionRef} className="lg:min-h-[calc(100vh-80px)] py-16 lg:py-20 bg-[#0b192f] relative overflow-hidden w-full flex lg:items-center">
      {/* Background Video - Scaled up further to hide bottom-right watermark/symbol and cover entire viewport */}
      <video
        ref={videoRef}
        src={dragonVideo}
        className="absolute inset-0 w-full h-full object-cover opacity-70 brightness-150 contrast-125 pointer-events-none mix-blend-screen z-0 scale-[1.25] origin-top-left"
        muted
        playsInline
        onEnded={() => {
          hasEndedRef.current = true;
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 md:mb-14 lg:mb-16 gap-6">
          <div>
             <p className="text-sm text-yellow-600 uppercase tracking-[0.3em] mb-4 font-mono font-bold">Hệ Sinh Thái Số</p>
             <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white uppercase tracking-tight">TRỤ CỘT CỦA SỰ THỊNH VƯỢNG</h2>
          </div>
          <p className="text-gray-400 max-w-md border-l-2 border-red-500 pl-4 text-sm leading-relaxed">Kiến trúc bảo mật đa lớp kết hợp sức mạnh điện toán đám mây quốc gia.</p>
        </div>
        <div className="grid grid-cols-12 gap-8 h-auto">
          {cards.map((card, i) => (
              <div key={i} className={`${card.col} bg-[#112240]/80 border border-gray-800 p-8 hover:border-red-900/50 transition-all flex flex-col justify-between`}>
                  <card.icon className={`${card.color} mb-6`} size={40} />
                  <h3 className="text-2xl font-bold text-white mb-4">{card.title}</h3>
                  <p className="text-gray-450 text-gray-400 text-sm">{card.desc}</p>
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}
