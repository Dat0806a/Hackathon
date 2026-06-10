export default function Hero() {
  return (
    <section className="relative min-h-[820px] w-full flex flex-col justify-start pt-44 pb-16 overflow-hidden bg-[#0b192f]">
      <div className="absolute inset-0 z-0 cyber-grid">
        <img alt="" className="w-full h-full object-cover opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpy6W1iomsPGGX2eNI1FPnOC6L8ObREZ4SMBWTrOBSziQSiRmB9UV1E5BaCkmhvWFoVTJ6jiOmICRYzxme42xvoQCByk4jjU7EvdUrA2DvqfNrz2LQ8C71qA2QJAxlgT_DVoYX934UCP3B_8mCB-2nfoksmeC9oprAzwTJqLGtFyJgLcsk3vhK-I0QlKxbInFumdjxOcwYv-75mkChH-r7kAD0tnpFJjtyRkptTTSIIkFlCl2FTB0MrCuiMSX1jJEusVLe_UIBDwM"/>
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b192f] via-[#0b192f]/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b192f] via-transparent to-transparent"></div>
      </div>
      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24">
        <div className="max-w-5xl">
          <div className="mb-6 inline-flex items-center gap-3 bg-red-900/20 border border-red-500/30 px-4 py-1.5 rounded-sm">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-red-500 uppercase tracking-widest">Hệ thống Đang Trực Tuyến</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tight uppercase">
              KIẾN TẠO <span className="text-red-500">CHÍNH PHỦ SỐ</span> TƯƠNG LAI
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-12 max-w-3xl border-l-4 border-yellow-600 pl-6 leading-relaxed">
              Nền tảng dịch vụ công thông minh tích hợp AI, định danh điện tử và hệ sinh thái hành chính minh bạch cho mọi công dân.
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
              <button className="bg-red-500 text-white font-bold px-6 sm:px-10 py-3.5 sm:py-4 uppercase tracking-widest hover:shadow-[0_0_30px_rgba(255,85,64,0.4)] transition-all font-mono text-xs sm:text-sm">
                  TRẢI NGHIỆM NGAY
              </button>
              <button className="border-2 border-red-500 text-red-500 font-bold px-6 sm:px-10 py-3.5 sm:py-4 uppercase tracking-widest hover:bg-red-500/10 transition-all font-mono text-xs sm:text-sm">
                  XEM TÀI LIỆU
              </button>
          </div>
        </div>
        
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl">
            {[
                { label: 'Công dân số', value: '98.4M+', color: 'bg-red-500', width: 'w-4/5' },
                { label: 'Dịch vụ tích hợp', value: '3,200+', color: 'bg-yellow-600', width: 'w-2/3' },
                { label: 'Xử lý/Giây', value: '15.2K', color: 'bg-red-500', width: 'w-full' },
            ].map((stat, i) => (
                <div key={i} className="bg-[#112240]/80 backdrop-blur-sm p-6 border border-gray-800 rounded-sm hover:border-gray-700/60 transition-all">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 font-mono">{stat.label}</p>
                    <p className="text-3xl font-extrabold text-white tracking-tight">{stat.value}</p>
                    <div className="w-full bg-gray-850 h-1.5 mt-3 rounded-full overflow-hidden">
                        <div className={`${stat.color} h-full ${stat.width} rounded-full`}></div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
