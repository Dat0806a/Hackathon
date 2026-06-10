import React, { useState, useEffect, useRef } from 'react';
import { 
  Radar, 
  Eye, 
  Shield, 
  Database, 
  ScanLine, 
  Activity, 
  HelpCircle, 
  LogOut, 
  Bot, 
  History, 
  MoreVertical, 
  User, 
  Paperclip, 
  Send, 
  ShieldAlert, 
  Bell, 
  Settings, 
  Lock, 
  Upload, 
  Check, 
  CircleAlert, 
  ArrowRight,
  RefreshCw,
  Cpu,
  FileCheck
} from 'lucide-react';

interface Message {
  id: string;
  sender: 'user' | 'ai';
  text: string;
  time: string;
  isLoading?: boolean;
  uploads?: {
    id: string;
    label: string;
    sub: string;
    status: 'pending' | 'success' | 'scanning';
  }[];
}

export default function AiAssistant() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'msg-1',
      sender: 'user',
      text: 'Chào buổi sáng. Tôi cần tư vấn về quy trình đăng ký doanh nghiệp mới tại Khu vực 7G Alpha. Tôi nên bắt đầu từ đâu?',
      time: '09:41 AM'
    },
    {
      id: 'msg-2',
      sender: 'ai',
      text: 'Xin chào. Tôi là Trợ lý AI VINAGOV. Rất hân hạnh được hỗ trợ bạn đăng ký doanh nghiệp tại Khu vực 7G Alpha.\n\nĐể bắt đầu quy trình xác thực tự động, vui lòng tải lên các tài liệu cần thiết sau đây:',
      time: '09:42 AM',
      uploads: [
        { id: 'cccd', label: 'Upload CCCD', sub: 'Identity Card (L3)', status: 'pending' },
        { id: 'license', label: 'Business License', sub: 'Draft or Registration', status: 'pending' }
      ]
    }
  ]);

  const [inputText, setInputText] = useState('');
  const [activeSidebarTab, setActiveSidebarTab] = useState<'intelligence' | 'operations' | 'surveillance' | 'security' | 'ocr' | 'status'>('intelligence');
  
  // OCR Scan states
  const [isScanning, setIsScanning] = useState(false);
  const [scanningDocumentLabel, setScanningDocumentLabel] = useState('');
  const [scanProgress, setScanProgress] = useState(0);
  const [scanningDocId, setScanningDocId] = useState<string | null>(null);

  // Animated latency heights for high-fidelity interactive dashboard
  const [latencies, setLatencies] = useState<number[]>([30, 20, 50, 15, 40]);
  const [neuralLoad, setNeuralLoad] = useState(14.2);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Fluctuate stats and latency graph over time for highly responsive live dashboard feel
  useEffect(() => {
    const interval = setInterval(() => {
      setLatencies(prev => {
        const next = [...prev.slice(1)];
        next.push(Math.floor(Math.random() * 45) + 15);
        return next;
      });
      setNeuralLoad(prev => {
        const delta = (Math.random() * 2 - 1) * 0.4;
        const bounded = Math.max(12.1, Math.min(18.5, prev + delta));
        return parseFloat(bounded.toFixed(1));
      });
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  // Scroll to bottom of chat helper
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isScanning]);

  // Handle document upload trigger
  const triggerDocumentScan = (docId: string, docLabel: string) => {
    setIsScanning(true);
    setScanningDocId(docId);
    setScanningDocumentLabel(docLabel);
    setScanProgress(0);

    // Simulate progress counting up
    const interval = setInterval(() => {
      setScanProgress(p => {
        if (p >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            // Mark the document as successfully scan authenticated inside messages
            setMessages(prev => 
              prev.map(msg => {
                if (msg.uploads) {
                  return {
                    ...msg,
                    uploads: msg.uploads.map(u => 
                      u.id === docId ? { ...u, status: 'success' } : u
                    )
                  };
                }
                return msg;
              })
            );

            // Append OCR verification confirmation in chat log
            const timestamp = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
            setMessages(prev => [
              ...prev,
              {
                id: `ocr-notif-${docId}`,
                sender: 'ai',
                text: `[HỆ THỐNG OCR] Đã tiếp nhận tài liệu: "${docLabel}" thành công.\n\nThông tin chiết xuất:\n- Trạng thái xác thực: HỢP CHÚNG QUỐC GIA (Mức độ an ninh sinh trắc học L3).\n- Mã tham chiếu sổ cái blockchain: #K7G-${Math.floor(Math.random()*89999 + 10000)}.\n\nQuy trình xử lý hồ sơ tự động đang chạy.`,
                time: timestamp
              }
            ]);

            setIsScanning(false);
            setScanningDocId(null);
          }, 600);
          return 100;
        }
        return p + 20;
      });
    }, 150);
  };

  // Chat message send handler
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputText.trim()) return;

    const userMsg = inputText.trim();
    const timestamp = new Date().toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
    const userMsgId = `user-${Date.now()}`;

    // Add user message to log
    setMessages(prev => [
      ...prev,
      {
        id: userMsgId,
        sender: 'user',
        text: userMsg,
        time: timestamp
      }
    ]);

    setInputText('');

    // Pre-program complex, immersive assistant replies which emulate high-tier defense agency AI
    setTimeout(() => {
      // Append temporary loading bubble
      const aiReplyId = `ai-${Date.now()}`;
      setMessages(prev => [
        ...prev,
        {
          id: aiReplyId,
          sender: 'ai',
          text: '',
          time: timestamp,
          isLoading: true
        }
      ]);

      setTimeout(() => {
        let aiText = `Đã nhận được thông tin truy xuất. Hệ thống máy chủ phân tán Sector 7G đang tiến hành rà soát các cơ sở dữ liệu quốc gia liên quan.\n\nYêu cầu của bạn về "${userMsg}" đang được chuyển tới phòng ban chức năng. Vui lòng giữ kết nối an toàn để nhận báo cáo hành chính tức thời từ sổ cái số hóa.`;
        
        const vnMsg = userMsg.toLowerCase();
        if (vnMsg.includes('chào') || vnMsg.includes('hello')) {
          aiText = 'Xin chào! Trợ lý AI VINAGOV hân hạnh được chào đón chỉ huy số. Tôi có thể hỗ trợ gì về định danh, tra cứu cơ sở dữ liệu doanh nghiệp hay các quy trình xác thuật điện tử hôm nay?';
        } else if (vnMsg.includes('cccd') || vnMsg.includes('căn cước') || vnMsg.includes('định danh')) {
          aiText = 'Xác thực căn cước công dân trực tuyến được xử lý tức thì qua thuật toán mã hóa AES-256 nội sinh. Bạn chỉ cần nhấn vào nút "Upload CCCD" trên biểu mẫu để hệ thống trích xuất thông tin tự động bằng OCR chỉ trong vòng 0.8 giây.';
        } else if (vnMsg.includes('doanh nghiệp') || vnMsg.includes('đăng ký')) {
          aiText = 'Để hoàn tất thủ tục đăng ký doanh nghiệp tại phân khu 7G Alpha:\n\n1. Chuẩn bị hồ sơ pháp lý đại diện (Xác thực L3 CCCD).\n2. Gửi bản nháp Giấy phép kinh doanh lên cổng an ninh.\n3. Lệ phí sẽ được ký số tự động qua Ví Định Danh Quốc Gia.\n\nHãy nhấn trực tiếp nút upload bên trên hoặc tải tệp trực tiếp vào khung chat này.';
        } else if (vnMsg.includes('an ninh') || vnMsg.includes('bảo mật')) {
          aiText = 'Nền tảng VINAGOV được vận hành dưới quy chuẩn quốc phòng cấp độ L3. Mỗi hành vi tương tác pháp lý đều được băm dữ liệu thông qua hàm chuỗi khối SHA-512 và ghi vào sổ cái bất di biến.';
        }

        // Apply typewriter style typing or direct load
        setMessages(prev => 
          prev.map(msg => 
            msg.id === aiReplyId 
              ? { ...msg, text: aiText, isLoading: false }
              : msg
          )
        );
      }, 1500);

    }, 300);
  };

  return (
    <div 
      className="flex w-full bg-[#0b192f] text-[#d6e3ff] min-h-[900px] border-t border-gray-800 relative z-10 font-[Montserrat,sans-serif]"
      id="ai-assistant-container"
    >
      {/* Background cyber ambiance overlays matching high-fidelity dark concept */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[140px] opacity-60"></div>
        <div className="absolute bottom-0 left-[200px] w-[600px] h-[600px] bg-red-800/5 rounded-full blur-[160px] opacity-45"></div>
      </div>

      {/* CORE WEB CANVAS AREA */}
      <main className="flex-1 min-h-[900px] flex flex-col relative z-10 bg-[#0b192f]/95 w-full" id="intelligence-dashboard">
        {/* Content Panel Area */}
        <div className="max-w-[1440px] w-full mx-auto px-6 sm:px-12 md:px-16 lg:px-24 py-16 flex-1 flex flex-col lg:flex-row gap-8">
          {/* LEFT CHAT LAYOUT */}
          <section className="flex-1 flex flex-col min-w-0" id="chat-section">
            <div className="mb-8">
              <div className="flex items-center gap-3 bg-[#112036]/60 border-2 border-red-500/50 px-6 py-3.5 inline-flex shadow-[0_0_15px_rgba(255,0,0,0.15)] rounded-sm" id="ai-title-badge">
                <span className="text-white font-bold uppercase tracking-widest text-lg leading-none">Trợ lý AI</span>
                <span className="text-red-500/45 font-light text-lg leading-none">|</span>
                <span 
                  className="text-red-500 font-extrabold uppercase tracking-wider text-lg drop-shadow-[0_0_8px_rgba(255,0,0,0.6)] leading-none transform translate-y-[3px] select-none"
                >
                  Tương tác thông minh
                </span>
              </div>
              <div className="flex items-center gap-3 mt-4">
                <div className="h-[1px] bg-red-500/35 flex-1"></div>
                <span className="text-[10px] font-mono text-red-500 uppercase tracking-[0.3em] font-semibold">Trung tâm Điều hành Số</span>
                <div className="h-[1px] bg-red-500/35 flex-1"></div>
              </div>
            </div>

            {/* Chatbox mainframe styled after high contrast dark mockup */}
            <div className="flex-1 flex flex-col bg-[#112036]/70 backdrop-blur-xl border border-red-500/30 shadow-2xl relative overflow-hidden" id="chat-block">
              {/* Chat Header */}
              <div className="px-6 py-4 bg-[#112036] border-b border-red-500/20 flex justify-between items-center">
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Bot className="text-red-500 drop-shadow-[0_0_6px_red]" size={26} />
                    <div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-red-500 rounded-full border border-[#112036] animate-pulse shadow-[0_0_8px_#ff0000]"></div>
                  </div>
                  <div>
                    <h3 className="text-white font-bold uppercase text-xs tracking-widest font-headline">AI Assistant v4.0</h3>
                    <p className="text-[9px] text-red-500 uppercase font-mono font-medium">Secure connection active</p>
                  </div>
                </div>
                <div className="flex gap-3 text-gray-400">
                  <History className="hover:text-red-500 cursor-pointer transition-colors" size={16} />
                  <MoreVertical className="hover:text-red-500 cursor-pointer transition-colors" size={16} />
                </div>
              </div>

              {/* Chat Message Scroll Window */}
              <div className="flex-1 p-8 space-y-8 overflow-y-auto max-h-[500px] scrollbar-thin" id="message-container">
                {messages.map((msg) => (
                  <div 
                    key={msg.id} 
                    className={`flex gap-4 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} items-start`}
                  >
                    {msg.sender === 'ai' && (
                      <div className="w-10 h-10 bg-red-500/10 border border-red-500/50 flex items-center justify-center">
                        <Bot className="text-red-500" size={18} />
                      </div>
                    )}

                    <div className={`max-w-[80%] ${msg.sender === 'user' ? 'bg-[#1c2a41]/60 border border-red-500/10' : 'bg-red-505/5 border-l-4 border-red-500 bg-red-650/5'} p-5 relative`} style={{ backgroundColor: msg.sender === 'ai' ? 'rgba(255, 0, 0, 0.03)' : undefined }}>
                      {msg.sender === 'ai' && (
                        <div className="absolute top-0 right-0 w-8 h-8 opacity-5 pointer-events-none">
                          <svg className="text-red-500" fill="currentColor" viewBox="0 0 100 100">
                            <path d="M0 0h100v100H0z" />
                          </svg>
                        </div>
                      )}

                      <p className="text-sm text-gray-200 leading-relaxed whitespace-pre-line font-medium">
                        {msg.text}
                      </p>

                      {msg.isLoading && (
                        <div className="flex items-center gap-2 text-red-500 text-xs uppercase tracking-wider font-mono">
                          <RefreshCw className="animate-spin text-red-500" size={12} />
                          Analyzing data load...
                        </div>
                      )}

                      {/* Display action cards/upload buttons if provided with message */}
                      {msg.uploads && msg.uploads.length > 0 && (
                        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {msg.uploads.map((u) => (
                            <button
                              key={u.id}
                              disabled={u.status === 'success' || isScanning}
                              onClick={() => triggerDocumentScan(u.id, u.label)}
                              className={`flex items-center justify-between gap-4 p-4 border transition-all duration-200 group text-left ${
                                u.status === 'success'
                                  ? 'bg-emerald-950/20 border-emerald-500/60 text-emerald-400 cursor-not-allowed'
                                  : 'bg-[#112036] border-red-500/30 hover:border-red-500 hover:bg-red-500/5 cursor-pointer'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                {u.status === 'success' ? (
                                  <FileCheck className="text-emerald-400" size={18} />
                                ) : (
                                  <Database className="text-red-500" size={18} />
                                )}
                                <div>
                                  <span className={`text-[10px] font-bold uppercase tracking-wider block ${u.status === 'success' ? 'text-emerald-400' : 'text-gray-300'}`}>
                                    {u.status === 'success' ? `${u.label} OK` : u.label}
                                  </span>
                                  <span className="text-[9px] text-gray-500 uppercase font-mono block">
                                    {u.status === 'success' ? 'Authenticated Ledger' : u.sub}
                                  </span>
                                </div>
                              </div>
                              {u.status === 'success' ? (
                                <Check size={14} className="text-emerald-400" />
                              ) : (
                                <Upload size={14} className="text-red-500 group-hover:translate-x-1 transition-transform" />
                              )}
                            </button>
                          ))}
                        </div>
                      )}

                      <span className={`text-[9px] uppercase mt-3 block ${msg.sender === 'user' ? 'text-right text-gray-500' : 'text-red-500 font-mono tracking-wider'}`}>
                        {msg.sender === 'user' ? `User • ${msg.time}` : 'AI Assistant • Processing Protocol Active'}
                      </span>
                    </div>

                    {msg.sender === 'user' && (
                      <div className="w-10 h-10 bg-[#27354d] border border-gray-600 flex items-center justify-center">
                        <User className="text-gray-300" size={18} />
                      </div>
                    )}
                  </div>
                ))}

                {/* Simulated Document scanner animating in chat block */}
                {isScanning && (
                  <div className="p-4 bg-red-950/20 border border-red-500/40 rounded shadow-md relative overflow-hidden animate-pulse">
                    <div className="flex items-center gap-3 mb-2">
                      <Cpu className="text-red-500 animate-spin" size={16} />
                      <span className="text-xs uppercase tracking-widest font-mono text-red-500">
                        Scanning & OCR Extracting: <strong className="text-white">{scanningDocumentLabel}</strong>
                      </span>
                    </div>
                    {/* Live Progress Bar indicator */}
                    <div className="w-full bg-slate-800 h-2 overflow-hidden flex relative">
                      <div 
                        className="bg-red-500 h-full transition-all duration-150"
                        style={{ width: `${scanProgress}%` }}
                      ></div>
                    </div>
                    <div className="flex justify-between items-center mt-2 text-[9px] font-mono text-red-400/80">
                      <span>Ref-ID: BC_{Math.floor(Math.random()*100000)}</span>
                      <span>SECURE DECRYPTION PROGRESS: {scanProgress}%</span>
                    </div>
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Bottom Message Prompt Input area */}
              <form 
                onSubmit={handleSendMessage}
                className="p-6 bg-[#0d1c32]/90 border-t border-red-500/20"
                id="prompt-form"
              >
                <div className="relative flex items-center gap-4">
                  <button 
                    type="button"
                    className="text-gray-400 hover:text-red-500 transition-colors p-2"
                    title="Attach file"
                  >
                    <Paperclip size={18} />
                  </button>
                  <input 
                    type="text"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    placeholder="Nhập tin nhắn của bạn..."
                    className="flex-1 bg-[#1c2a41]/40 border-none border-b-2 border-red-500/40 focus:border-red-500 focus:ring-0 text-white placeholder-gray-500 py-3 px-3 outline-none text-sm transition-all"
                    id="prompt-input"
                  />
                  <button 
                    type="submit"
                    className="w-12 h-12 bg-red-600 hover:bg-red-700 text-white flex items-center justify-center transition-all shadow-[0_0_12px_rgba(255,0,0,0.5)] active:scale-95 cursor-pointer"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </form>
            </div>
          </section>

          {/* RIGHT UTILITY & CORE SECURITY PANEL */}
          <section className="w-full lg:w-[330px] flex flex-col gap-6" id="right-panel">
            {/* User credentials / Security clearance panel */}
            <div className="bg-[#112036]/50 backdrop-blur-md border border-red-500/20 p-6 relative overflow-hidden" id="clearance-card">
              <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <Shield className="text-red-500" size={70} />
              </div>
              <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.2em] mb-4">XÁC THỰC NGƯỜI DÙNG</h4>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 border-2 border-red-500 flex items-center justify-center bg-red-500/5 shadow-[0_0_15px_rgba(255,0,0,0.3)]">
                  <Lock className="text-red-500" size={24} />
                </div>
                <div>
                  <p className="text-xl font-extrabold text-red-500 leading-none uppercase font-headline">CÔNG DÂN SỐ</p>
                  <p className="text-[10px] font-bold text-gray-300 uppercase mt-1 tracking-widest">Đã xác thực hồ sơ</p>
                </div>
              </div>
            </div>

            {/* Security Cryptographic protocol indicators */}
            <div className="bg-[#0d1c32] p-6 border border-red-500/20" id="crypto-card">
              <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.2em] mb-4">BẢO MẬT HỒ SƠ</h4>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">Trạng thái dữ liệu</span>
                  <span className="text-xs font-bold text-red-500 tracking-wider font-medium">Được mã hóa an toàn</span>
                </div>
                <div className="w-full h-[3px] bg-slate-800">
                  <div className="h-full bg-red-600 animate-pulse w-full"></div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-400">Quyền truy cập</span>
                  <span className="text-xs font-medium text-red-500/70">Chỉ người dùng được xác thực</span>
                </div>
              </div>
            </div>

            {/* Neural systems & hardware telemetry dashboard */}
            <div className="bg-[#010e24] p-6 border-l-2 border-red-500 flex-1 flex flex-col justify-between" id="telemetry-card">
              <div>
                <h4 className="text-[10px] font-semibold text-gray-400 uppercase tracking-[0.2em] mb-6 block">TIẾN TRÌNH XỬ LÝ AI</h4>
                <div className="space-y-8">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs text-gray-300 font-bold uppercase tracking-widest">HỒ SƠ ĐÃ KIỂM TRA</span>
                      <span className="text-xs text-red-500 font-bold font-mono">24</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-850 flex overflow-hidden">
                      <div 
                        className="h-full bg-red-505 bg-red-500 transition-all duration-300" 
                        style={{ width: '75%' }}
                      ></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-xs text-gray-300 font-bold uppercase tracking-widest">TỶ LỆ HỢP LỆ</span>
                      <span className="text-xs text-red-500 font-bold font-mono">86%</span>
                    </div>
                    {/* Pulsing micro-amplitude delay diagram */}
                    <div className="flex gap-1 items-end h-12 pt-2 px-1 bg-slate-900/40 border border-slate-800">
                      {latencies.map((height, idx) => (
                        <div 
                          key={idx} 
                          className="w-full bg-red-500/35 transition-all duration-200" 
                          style={{ height: `${height}%` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-red-500/10">
                <p className="text-xs text-gray-400 leading-relaxed font-semibold">
                  AI đang kiểm tra giấy tờ, đối chiếu yêu cầu thủ tục và gợi ý bước tiếp theo cho người dùng.
                </p>
              </div>
            </div>

            {/* Genuine Blockchain stamp */}
            <div className="flex justify-end" id="blockchain-badge">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-[#112036] border border-red-500/20 shadow-[0_0_12px_rgba(255,0,0,0.1)]">
                <Check className="text-red-500" size={12} />
                <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest font-mono">Blockchain Verified</span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
