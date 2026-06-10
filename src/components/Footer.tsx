export default function Footer() {
  return (
    <footer className="relative w-full mt-auto border-t border-gray-800 bg-[#0b192f]">
      <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row justify-between items-center px-6 sm:px-12 md:px-16 lg:px-24 py-12 gap-8 text-sm text-center md:text-left">
        <div className="flex flex-col items-center md:items-start gap-2">
          <span className="text-xl font-extrabold text-red-500 uppercase tracking-tighter">ANDANAI</span>
          <p className="text-gray-500 text-xs">© 2024 Ministry of Digital Sovereignty. All rights reserved.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-8 text-gray-400">
          <a href="#" className="hover:text-red-500 transition-all">Security Policy</a>
          <a href="#" className="hover:text-red-500 transition-all">Legal Framework</a>
          <a href="#" className="hover:text-red-500 transition-all">Citizen Rights</a>
          <a href="#" className="hover:text-red-500 transition-all">Contact Command</a>
        </div>
      </div>
    </footer>
  );
}
