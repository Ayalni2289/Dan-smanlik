import Navbar from "@/app/components/Navbar";
import Hero from "@/app/components/Hero";
import ProductsSection from "@/app/components/ProductsSection";
import DistributorSection from "@/app/components/DistributorSection";
import ReviewsSection from "@/app/components/ReviewsSection";
import ContactSection from "@/app/components/ContactSection";
import Footer from "@/app/components/Footer";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductsSection />
      <DistributorSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
      <Analytics />
    </main>
  );
}
