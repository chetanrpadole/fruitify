import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Home / About Section */}
        <Home />

        {/* Products Section */}
        <Products />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
