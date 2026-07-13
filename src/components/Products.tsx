import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { AlertTriangle } from "lucide-react";
import ProductModal, { type Product } from "./Productsmodal";

// Products images & videos
// Bags
import rightRound1 from "../assets/bags/right-round/right-round1.png";
import rightRound2 from "../assets/bags/right-round/right-round2.png";
import rightRound3 from "../assets/bags/right-round/right-round3.png";

import ladyBelle1 from "../assets/bags/lady-belle/lady-belle1.png";
import ladyBelle2 from "../assets/bags/lady-belle/lady-belle2.png";
import ladyBelle3 from "../assets/bags/lady-belle/lady-belle3.png";

import mistiqFusion1 from "../assets/bags/mistiq-fusion/mistiq-fusion1.png";
import mistiqFusion2 from "../assets/bags/mistiq-fusion/mistiq-fusion2.png";
import mistiqFusion3 from "../assets/bags/mistiq-fusion/mistiq-fusion3.png";

import oceanMistiq1 from "../assets/bags/ocean-mistiq/ocean-mistiq1.png";
import oceanMistiq2 from "../assets/bags/ocean-mistiq/ocean-mistiq2.png";
import oceanMistiqVideo from "../assets/bags/ocean-mistiq/ocean-mistiq3.mov";

import missFlorence1 from "../assets/bags/miss-florence/miss-florence1.png";
import missFlorence2 from "../assets/bags/miss-florence/miss-florence2.png";
import missFlorence3 from "../assets/bags/miss-florence/miss-florence3.png";
import missFlorence4 from "../assets/bags/miss-florence/miss-florence4.png";
import missFlorence5 from "../assets/bags/miss-florence/miss-florence5.png";
import missFlorenceVideo from "../assets/bags/miss-florence/miss-florence6.mov";

import classicMistiqBow1 from "../assets/bags/classic-mistiq-bow/classic-mistiq-bow1.png";
import classicMistiqBow2 from "../assets/bags/classic-mistiq-bow/classic-mistiq-bow2.mov";

import classicMistiq1 from "../assets/bags/classic-mistiq/classic-mistiq1.png";
import classicMistiq2 from "../assets/bags/classic-mistiq/classic-mistiq2.png";
import classicMistiq3 from "../assets/bags/classic-mistiq/classic-mistiq3.png";
import classicMistiq4 from "../assets/bags/classic-mistiq/classic-mistiq4.png";

import mistiqWaves1 from "../assets/bags/mistiq-waves/mistiq-waves1.png";
import mistiqWaves2 from "../assets/bags/mistiq-waves/mistiq-waves2.png";
import mistiqWaves3 from "../assets/bags/mistiq-waves/mistiq-waves3.png";

import ladyShell1 from "../assets/bags/lady-shell/lady-shell1.png";
import ladyShell2 from "../assets/bags/lady-shell/lady-shell2.png";

import ladyShellPink1 from "../assets/bags/lady-shell-pink/lady-shell-pink1.png";
import ladyShellPink2 from "../assets/bags/lady-shell-pink/lady-shell-pink2.png";
import ladyShellPink3 from "../assets/bags/lady-shell-pink/lady-shell-pink3.png";

//Charms
import roseCharm1 from "../assets/charms/rose-charm/rose-charm1.png";
import roseCharm2 from "../assets/charms/rose-charm/rose-charm2.png";
import roseCharm3 from "../assets/charms/rose-charm/rose-charm3.png";

// Toys
import babyBunny1 from "../assets/toys/baby-bunny/baby-bunny1.png";
import babyBunny2 from "../assets/toys/baby-bunny/baby-bunny2.png";
import babyBunny3 from "../assets/toys/baby-bunny/baby-bunny3.png";

const PRODUCTS: Product[] = [
//Bags
  {
    name: "Lady Belle",
    price: 64.99,
    media: [{ type: "image", src: ladyBelle1 }, { type: "image", src: ladyBelle2 }, { type: "image", src: ladyBelle3 }],
    category: "bags",
  },
  {
    name: "Mistiq Fusion",
    price: 29.99,
    media: [{ type: "image", src: mistiqFusion1 }, { type: "image", src: mistiqFusion2 }, { type: "image", src: mistiqFusion3 }],
    category: "bags",
  },
  {
    name: "Ocean Mistiq",
    price: 54.99,
    media: [{ type: "image", src: oceanMistiq2 }, { type: "image", src: oceanMistiq1 }, { type: "video", src: oceanMistiqVideo }],
    category: "bags",
  },
  {
    name: "Miss Florence",
    price: 69.99,
    media: [
      { type: "image", src: missFlorence1 },
      { type: "image", src: missFlorence2 },
      { type: "image", src: missFlorence3 },
      { type: "image", src: missFlorence4 },
      { type: "image", src: missFlorence5 },
      { type: "video", src: missFlorenceVideo },
    ],
    category: "bags",
  },
  {
    name: "Right Round",
    price: 49.99,
    media: [{ type: "image", src: rightRound1 }, { type: "image", src: rightRound2 }, { type: "image", src: rightRound3 }],
    category: "bags",
  },
  {
    name: "Classic Mistiq",
    price: 49.99,
    media: [{ type: "image", src: classicMistiq1 }, { type: "image", src: classicMistiq2 }, { type: "image", src: classicMistiq3 }, { type: "image", src: classicMistiq4 }],
    category: "bags",
  },
  {
    name: "Classic Mistiq Bow",
    price: 49.99,
    media: [{ type: "image", src: classicMistiqBow1 }, { type: "video", src: classicMistiqBow2 }],
    category: "bags",
  },
  {
    name: "Mistiq Waves",
    price: 44.99,
    media: [{ type: "image", src: mistiqWaves1 }, { type: "image", src: mistiqWaves2 }, { type: "image", src: mistiqWaves3 }],
    category: "bags",
  },
  {
    name: "Lady Shell",
    price: 66.99,
    media: [{ type: "image", src: ladyShell1 }, { type: "image", src: ladyShell2 }],
    category: "bags",
  },
  {
    name: "Lady Shell Pink",
    price: 66.99,
    media: [{ type: "image", src: ladyShellPink1 }, { type: "image", src: ladyShellPink2 }, { type: "image", src: ladyShellPink3 }],
    category: "bags",
  },
  //Charms
  {
    name: "Rose Charm",
    price: 6.99,
    media: [{ type: "image", src: roseCharm1 }, { type: "image", src: roseCharm2 }, { type: "image", src: roseCharm3 }],
    category: "charms",
  },
  //Toys
  {
    name: "Baby Bunny",
    price: 39.99,
    media: [{ type: "image", src: babyBunny2 }, { type: "image", src: babyBunny1 }, { type: "image", src: babyBunny3 }],
    category: "toys",
  },
];

const CATEGORY_TABS: { label: string; value: Product["category"] | null }[] = [
  { label: "All", value: null },
  { label: "Bags", value: "bags" },
  { label: "Charms", value: "charms" },
  { label: "Toys", value: "toys" },
];

type SortOrder = "default" | "asc" | "desc";

export default function Products() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeCategory = searchParams.get("category");
  const [sortOrder, setSortOrder] = useState<SortOrder>("default");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = activeCategory
    ? PRODUCTS.filter((p) => p.category === activeCategory)
    : PRODUCTS;

  const sorted = [...filtered].sort((a, b) => {
    if (sortOrder === "asc") return a.price - b.price;
    if (sortOrder === "desc") return b.price - a.price;
    return 0;
  });

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-5 px-4 mb-20">
      <h1 className="self-start text-2xl md:text-5xl font-semibold text-gray-800">
        Our Handmade Creations
      </h1>

      <div className="flex flex-col md:flex-row items-center md:justify-between gap-5 w-full max-w-4xl">
        <div className="flex items-center gap-6 md:gap-10">
          {CATEGORY_TABS.map((tab) => {
            const isActive = activeCategory === tab.value;
            return (
              <button
                key={tab.label}
                onClick={() =>
                  tab.value
                    ? setSearchParams({ category: tab.value })
                    : setSearchParams({})
                }
                className={`relative pb-1 text-base md:text-lg font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-gray-900"
                    : "text-gray-400 hover:text-gray-600"
                }`}
              >
                {tab.label}
                <span
                  className={`absolute left-0 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0"
                  }`}
                />
              </button>
            );
          })}
        </div>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as SortOrder)}
          className="self-end rounded-full border border-gray-200 px-4 py-1 text-sm text-gray-600 bg-white focus:outline-none focus:ring-2 focus:ring-purple-200 cursor-pointer"
        >
          <option value="default">Sort by</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      <div className="flex items-center gap-3 bg-gradient-to-r from-pink-50 to-purple-50 border border-pink-100 rounded-xl px-5 py-3 max-w-2xl text-sm text-gray-600 text-center md:text-left">
        <AlertTriangle size={24} className="shrink-0 text-[#3B1E08]" />
        <p>
          All products are handmade — you can customize size, color, style, and more
        </p>
      </div>

      {sorted.length === 0 ? (
        <p className="text-gray-500 text-center">
          No products in this category yet — check back soon!
        </p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:gap-5 gap-3 w-full max-w-8xl">
          {sorted.map((product, index) => (
            <button
              key={index}
              onClick={() => setSelectedProduct(product)}
              className="flex flex-col items-center border border-gray-200 rounded-lg p-1 transition-shadow duration-300 hover:shadow-lg text-left"
            >
              <img
                src={product.media[0].src}
                alt={product.name}
                className="h-48 w-full md:h-80 object-cover rounded-lg border border-gray-200"
              />
              <h3 className="text-lg font-medium font-serif text-gray-700">
                {product.name}
              </h3>
              <p className="mt-[-0.1rem] text-sm font-semibold text-gray-900">
                from €{product.price.toFixed(2)}
              </p>
            </button>
          ))}
        </div>
      )}

      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
}