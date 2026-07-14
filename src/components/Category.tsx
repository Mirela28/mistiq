import bagPic from "../assets/bags/category.png";
import toyPic from "../assets/toys/category.png";
import charmPic from "../assets/charms/category.png";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface CategoryItem {
  category: string;
  label: string;
  href: string;
  img: string;
}

const CATEGORIES: CategoryItem[] = [
  { category: "bags", label: "Bags", href: "/bags", img: bagPic },
  { category: "charms", label: "Charms", href: "/charms", img: charmPic },
  { category: "toys", label: "Toys", href: "/toys", img: toyPic },
];

export default function Category() {
  return (
    <div className="mt-10 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 w-full max-w-6xl mx-auto md:px-5">
      {CATEGORIES.map((category) => (
        <Link
          key={category.label}
          to={`/products?category=${category.category}`}
          className="group flex flex-col items-center"
        >
          <div className="relative w-full aspect-square overflow-hidden rounded-2xl bg-white shadow-md transition-shadow duration-300 group-hover:shadow-xl">
            {category.img ? (
              <img
                src={category.img}
                alt={category.label}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-gray-100 text-gray-400 text-sm">
                Coming soon
              </div>
            )}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
          </div>
          <div className="mt-4 flex items-center gap-1.5">
            <p className="text-lg font-medium text-gray-800">{category.label}</p>
            <ArrowRight
              size={16}
              className="text-gray-800 -translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300"
            />
          </div>
          <span className="h-[2px] w-0 group-hover:w-10 transition-all duration-300 rounded-full bg-[#3B1E08] mt-1" />
        </Link>
      ))}
    </div>
  );
}