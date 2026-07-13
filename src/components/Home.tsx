import { Link } from "react-router-dom";
import BagShowcase from "./BagShowcase";
import bagImg from "../assets/mistiq-photos/bag-nobg.png";
import Category from "./Category";

export default function Home() {
  return (
    <div className="relative min-h-screen flex-col items-center justify-center">
      <div className="relative w-full h-[500px] overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover object-center scale-105 blur-sm"
          src="/home-video-compressed.mp4"
        ></video>
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 flex flex-col justify-start items-start pl-8 md:pl-16 pt-8 md:pt-16 gap-3">
          <h1 className="mt-10 text-white text-[2.5rem] md:text-6xl max-w-md font-semibold leading-tight font-serif text-left md:whitespace-nowrap">
            Divine Handmade Crochet
          </h1>
          <p className="mt-3 md:mt-5 text-white text-lg md:text-lg max-w-md text-justify pr-20 md:pr-0">
            Discover the perfect blend of style and craftsmanship with our
            unique collection of crochet bags.
          </p>
          <Link
            to="/products"
            className="mt-10 md:mt-8 bg-transparent border-2 border-white text-white px-5 py-3 rounded-md text-lg font-medium hover:bg-white hover:text-gray-800 transition-colors shadow-md shadow-gray-800/50"
          >
            Discover Our Products
          </Link>
        </div>
      </div>

      <div id="about" className="mt-5 relative isolate flex flex-col md:flex-row items-center justify-center gap-2 md:gap-16 px-4 md:px-8 lg:px-16 py-10 md:py-20">
        <h2 className="md:hidden text-3xl px-10 font-semibold text-gray-800 text-center">
          Experience the Art of Crochet
        </h2>
        <BagShowcase
          image={bagImg}
          alt="Handmade Crochet Bag"
          className="md:flex-1"
        />
        <p className="md:hidden text-lg text-gray-600 text-center max-w-2xl">
          Each bag is crafted with love and attention to detail, ensuring that you
          receive a one-of-a-kind accessory that reflects your style.
        </p>
        <div className="hidden md:flex flex-col items-start text-left flex-1">
          <h2 className="text-4xl font-semibold text-gray-800">
            Experience the Art of Crochet
          </h2>
          <p className="mt-8 text-xl text-gray-600 max-w-2xl">
            Each bag is crafted with love and attention to detail, ensuring that
            you receive a one-of-a-kind accessory that reflects your style.
          </p>
        </div>
      </div>

      <div
        id="products"
        className="scroll-mt-20 flex flex-col items-center justify-center gap-10 px-4 md:px-8 lg:px-16 py-10 md:py-20"
      >
        <h2 className="text-3xl md:text-4xl font-semibold text-gray-800">
          Our Products
        </h2>
        <Category />
      </div>
    </div>
  );
}