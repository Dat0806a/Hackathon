import { useState } from 'react';
import { Bell, User, Search, Menu, X } from 'lucide-react';

interface NavbarProps {
  activeTab: 'home' | 'ai-assistant';
  onTabChange: (tab: 'home' | 'ai-assistant') => void;
}

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleTabClick = (tab: 'home' | 'ai-assistant') => {
    onTabChange(tab);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 right-0 left-0 z-40 bg-[#0b192f]/80 backdrop-blur-md border-b border-gray-800/50 shadow-[0_0_15px_rgba(255,85,64,0.02)] transition-all duration-300">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 h-20 flex justify-between items-center">
        <div className="flex items-center gap-8 lg:gap-16">
          {/* Brand logo */}
          <div 
            onClick={() => handleTabClick('home')}
            className="font-extrabold text-2xl sm:text-3xl text-red-500 tracking-tighter cursor-pointer hover:opacity-80 transition-opacity whitespace-nowrap"
            id="navbar-logo"
          >
            ANDANAI
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex gap-6 xl:gap-8 text-sm font-semibold tracking-wide" id="navbar-links">
            <button 
              onClick={() => handleTabClick('home')}
              className={`transition-colors cursor-pointer pb-1 whitespace-nowrap ${activeTab === 'home' ? 'text-red-500 border-b-2 border-red-500 font-bold' : 'text-gray-400 hover:text-white'}`}
              id="nav-link-home"
            >
              Trang chủ
            </button>
            <button 
              onClick={() => handleTabClick('ai-assistant')}
              className={`transition-colors cursor-pointer pb-1 whitespace-nowrap ${activeTab === 'ai-assistant' ? 'text-red-500 border-b-2 border-red-500 font-bold' : 'text-gray-400 hover:text-white'}`}
              id="nav-link-ai"
            >
              Trợ lý AI
            </button>
            <a href="#" className="text-gray-400 hover:text-white transition-colors whitespace-nowrap" id="nav-link-lookup">Tra cứu thủ tục</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors whitespace-nowrap" id="nav-link-prep">Chuẩn bị hồ sơ</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors whitespace-nowrap" id="nav-link-pay">Thanh toán</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors whitespace-nowrap" id="nav-link-profile">Hồ sơ cá nhân</a>
          </div>
        </div>

        {/* Desktop Search & Status */}
        <div className="hidden lg:flex items-center gap-6">
          <div className="flex items-center bg-gray-850/50 border-b border-red-500/50 px-3 py-1.5 text-sm">
            <Search size={16} className="text-red-500 mr-2" />
            <input className="bg-transparent border-none focus:outline-none text-white text-xs placeholder:text-gray-500 w-36 xl:w-48" placeholder="Tìm kiếm hệ thống..." type="text"/>
          </div>
          <div className="flex items-center gap-4 text-red-500">
            <Bell size={20} className="cursor-pointer hover:scale-110 transition-transform" />
            <User size={20} className="cursor-pointer hover:scale-110 transition-transform" />
          </div>
        </div>

        {/* Mobile menu button */}
        <div className="flex lg:hidden items-center gap-4">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-red-500 hover:text-white p-2 transition-colors focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer / Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-[#0b192f] border-b border-gray-800 px-6 py-6 space-y-6 animate-[fadeIn_0.2s_ease-out]">
          <div className="flex flex-col gap-4 text-base font-semibold tracking-wide">
            <button 
              onClick={() => handleTabClick('home')}
              className={`text-left pb-1 ${activeTab === 'home' ? 'text-red-500 font-bold' : 'text-gray-400 hover:text-white'}`}
            >
              Trang chủ
            </button>
            <button 
              onClick={() => handleTabClick('ai-assistant')}
              className={`text-left pb-1 ${activeTab === 'ai-assistant' ? 'text-red-500 font-bold' : 'text-gray-400 hover:text-white'}`}
            >
              Trợ lý AI
            </button>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Tra cứu thủ tục</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Chuẩn bị hồ sơ</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Thanh toán</a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors" onClick={() => setIsOpen(false)}>Hồ sơ cá nhân</a>
          </div>

          <div className="pt-4 border-t border-gray-800 flex flex-col gap-4">
            <div className="flex items-center bg-gray-850/50 border-b border-red-500/50 px-3 py-2 text-sm w-full">
              <Search size={16} className="text-red-500 mr-2" />
              <input className="bg-transparent border-none focus:outline-none text-white text-xs placeholder:text-gray-500 w-full" placeholder="Tìm kiếm hệ thống..." type="text"/>
            </div>
            <div className="flex items-center gap-6 text-red-500 px-2 py-1">
              <div className="flex items-center gap-2 cursor-pointer">
                <Bell size={20} />
                <span className="text-sm text-gray-400">Thông báo</span>
              </div>
              <div className="flex items-center gap-2 cursor-pointer">
                <User size={20} />
                <span className="text-sm text-gray-400">Hồ sơ</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
