import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight, Truck, MessageCircle } from "lucide-react";

export interface MediaItem {
    type: "image" | "video";
    src: string;
}

export interface Product {
    name: string;
    price: number;
    media: MediaItem[];
    category: "bags" | "charms" | "toys";
    deliveryNote?: string;
}

interface ProductModalProps {
    product: Product | null;
    onClose: () => void;
}

const WHATSAPP_NUMBER = "393801870103";

const DEFAULT_DELIVERY_NOTE =
    "Shipped within 3–5 business days in Italy. Outside Italy delivery time may vary.";

export default function ProductModal({ product, onClose }: ProductModalProps) {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        setActiveIndex(0);
    }, [product]);

    useEffect(() => {
        if (!product) return;
        document.body.style.overflow = "hidden";
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        };
        window.addEventListener("keydown", onKeyDown);
        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [product, onClose]);

    if (!product) return null;

    const media = product.media;
    const hasMultiple = media.length > 1;

    const goPrev = () =>
        setActiveIndex((i) => (i === 0 ? media.length - 1 : i - 1));
    const goNext = () =>
        setActiveIndex((i) => (i === media.length - 1 ? 0 : i + 1));

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={(e) => {
                if (e.target === e.currentTarget) onClose();
            }}
            role="dialog"
            aria-modal="true"
            aria-label={product.name}
        >
            <div className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-xl flex flex-col md:flex-row">
                <button
                    onClick={onClose}
                    aria-label="Close"
                    className="absolute top-3 right-3 z-10 rounded-full bg-white/80 p-1.5 text-gray-600 hover:bg-white hover:text-gray-900 transition-colors shadow-sm"
                >
                    <X size={20} />
                </button>

                <div className="relative w-full md:w-1/2 aspect-square bg-gray-50 shrink-0">
                    {media[activeIndex].type === "video" ? (
                        <video
                            src={media[activeIndex].src}
                            controls={false}
                            autoPlay
                            loop
                            muted
                            playsInline
                            aria-label={`${product.name} ${activeIndex + 1}`}
                            className="w-full h-full object-cover"

                        />
                    ) : (
                        <img
                            src={media[activeIndex].src}
                            alt={`${product.name} ${activeIndex + 1}`}
                            className="w-full h-full object-cover p-5"
                        />
                    )}

                    {hasMultiple && (
                        <>
                            <button
                                onClick={goPrev}
                                aria-label="Previous image"
                                className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 text-gray-700 hover:bg-white transition-colors shadow-sm"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={goNext}
                                aria-label="Next image"
                                className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 p-1.5 text-gray-700 hover:bg-white transition-colors shadow-sm"
                            >
                                <ChevronRight size={20} />
                            </button>

                            <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
                                {media.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => setActiveIndex(i)}
                                        aria-label={`Go to slide ${i + 1}`}
                                        className={`h-1.5 rounded-full transition-all duration-300 ${i === activeIndex
                                                ? "w-5 bg-[#3B1E08]"
                                                : "w-1.5 bg-gray-400"
                                            }`}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>

                <div className="flex flex-col gap-4 p-6 md:w-1/2">
                    <div>
                        <h3 className="text-2xl md:text-3xl font-serif font-semibold text-gray-800">
                            {product.name}
                        </h3>
                        <p className="mt-1 text-lg font-semibold text-gray-900">
                            from €{product.price.toFixed(2)}
                        </p>
                    </div>

                    <div className="flex items-start gap-2.5 bg-gray-50 border border-gray-100 rounded-xl px-2 py-3 text-sm text-gray-600">
                        <Truck size={18} className="shrink-0 mt-0.5 text-gray-400" />
                        <p>{product.deliveryNote ?? DEFAULT_DELIVERY_NOTE}</p>
                    </div>

                    <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                            `Hi! I'd love to ask about the "${product.name}".`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full border-2 border-gray-200 px-5 py-2.5 text-gray-700 transition-all duration-300 hover:border-transparent hover:text-white hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500 w-fit"
                    >
                        <MessageCircle size={18} />
                        <span className="text-sm font-medium">Ask about this piece</span>
                    </a>
                </div>
            </div>
        </div>
    );
}