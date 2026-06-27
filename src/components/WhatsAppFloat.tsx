import { MessageCircle, X } from 'lucide-react';
import { useState } from 'react';

const WHATSAPP_LINK = 'https://wa.link/hlvpe5';

export default function WhatsAppFloat() {
  const [tooltip, setTooltip] = useState(true);

  return (
    <div className="whatsapp-float flex items-end gap-3">
      {tooltip && (
        <div
          className="relative mb-1 px-4 py-2.5 rounded-xl text-sm font-medium text-white shadow-xl animate-fade-in"
          style={{ background: '#1a2e1a', border: '1px solid rgba(37,211,102,0.3)', maxWidth: '180px' }}
        >
          Chat with Mr Lee!
          <button
            onClick={() => setTooltip(false)}
            className="ml-2 opacity-50 hover:opacity-100 transition-opacity"
            aria-label="Dismiss"
          >
            <X size={12} />
          </button>
          {/* Tail */}
          <div
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1.5 w-3 h-3 rotate-45"
            style={{ background: '#1a2e1a', borderRight: '1px solid rgba(37,211,102,0.3)', borderTop: '1px solid rgba(37,211,102,0.3)' }}
          />
        </div>
      )}

      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-transform duration-300 hover:scale-110"
        style={{ background: 'linear-gradient(135deg, #25d366, #128c7e)' }}
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={26} fill="white" color="white" />
      </a>
    </div>
  );
}
