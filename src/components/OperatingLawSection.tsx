import { CheckCircle } from 'lucide-react';

export default function OperatingLawSection() {
  return (
    <section className="bg-[#0b192f] py-28 w-full">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 md:px-16 lg:px-24 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
        <div className="w-full lg:w-1/2 space-y-8">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">VẬN HÀNH THEO <span className="text-yellow-600">LUẬT SỐ HÓA</span></h2>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Mọi bước trong quy trình đều được ghi lại trên sổ cái kỹ thuật số, đảm bảo tính minh bạch và không thể thay đổi. Hệ thống phản hồi tự động trong 0.5 giây đối với mọi truy vấn của công dân.
          </p>
          <ul className="space-y-4">
            {['Mã hóa đầu cuối E2EE cho mọi dữ liệu cá nhân', 'Xác thực sinh trắc học tích hợp cấp độ 4', 'Liên kết trực tiếp 63 tỉnh thành thời gian thực'].map((item, i) => (
              <li key={i} className="flex items-start gap-4 text-gray-350 text-gray-200 text-sm md:text-base leading-relaxed">
                <CheckCircle className="text-red-500 mt-1 shrink-0" size={22} />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="w-full lg:w-1/2 aspect-video bg-[#112240] border border-gray-800 flex items-center justify-center relative overflow-hidden rounded-sm">
             <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-red-900/10 via-transparent to-transparent"></div>
             <div className="flex flex-col gap-2">
                 {[60, 40, 70, 30].map((h, i) => (
                     <div key={i} className="w-48 bg-red-900/20 h-8 flex items-end p-1 border border-red-900/30">
                        <div className="w-full bg-red-500" style={{ height: `${h}%` }}></div>
                     </div>
                 ))}
             </div>
        </div>
      </div>
    </section>
  );
}
