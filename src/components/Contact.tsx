import { Camera, MessageCircle } from "lucide-react";

const INSTAGRAM_HANDLE = "mistiq.handmade";
const WHATSAPP_NUMBER = "393801870103";

export default function Contact() {
  const instagramUrl = `https://instagram.com/${INSTAGRAM_HANDLE}`;
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`;

  return (
    <footer
      id="contact"
      className="scroll-mt-20 mt-8 w-full bg-white border-t border-gray-200 px-4 md:px-8 lg:px-16 py-12 mb-5 md:py-16"
    >
      <div className="max-w-2xl mx-auto flex flex-col items-center text-center gap-3">
        <h3 className="font-serif text-3xl md:text-4xl font-semibold text-gray-800">
          Let's Stay in Touch
        </h3>
        <p className="text-gray-600 max-w-md">
          Questions about an order, or something custom in mind? I'd love to
          hear from you.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-4">
          <a
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border-2 border-gray-200 px-5 py-2.5 text-gray-700 transition-all duration-300 hover:border-transparent hover:text-white hover:shadow-md hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500"
          >
            <Camera size={18} />
            <span className="text-sm font-medium">@{INSTAGRAM_HANDLE}</span>
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 rounded-full border-2 border-gray-200 px-5 py-2.5 text-gray-700 transition-all duration-300 hover:border-transparent hover:text-white hover:shadow-md hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500"
          >
            <MessageCircle size={18} />
            <span className="text-sm font-medium">WhatsApp</span>
          </a>
        </div>
      </div>
    </footer>
  );
}