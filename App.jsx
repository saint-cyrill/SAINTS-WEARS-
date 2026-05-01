import React, { useState } from 'react';
import { ShoppingBag, Menu, X } from 'lucide-react';

export default function StreetWearSite() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Black Tees',
      price: '$5',
      image: '/images/products/black-tees.jpg',
      category: 'tops',
      color: 'Black',
    },
    {
      id: 2,
      name: 'Black Jorts',
      price: '$15',
      image: '/images/products/black-jorts.jpg',
      category: 'bottoms',
      color: 'Black',
    },
    {
      id: 3,
      name: 'White Top',
      price: '$7',
      image: '/images/products/white-top.jpg',
      category: 'tops',
      color: 'White',
    },
    {
      id: 4,
      name: 'White Pants',
      price: '$12',
      image: '/images/products/white-pants.jpg',
      category: 'bottoms',
      color: 'White',
    },
  ];

  return (
    <div className="min-h-screen bg-white text-black font-sans">
      {/* Navigation */}
      <nav className="fixed w-full bg-white border-b border-black z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-tight">SAINTS WEARS</h1>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <a href="#home" className="text-sm hover:opacity-60 transition">Home</a>
            <a href="#shop" className="text-sm hover:opacity-60 transition">Shop</a>
            <a href="#about" className="text-sm hover:opacity-60 transition">About</a>
            <button className="p-2 hover:bg-black hover:text-white transition">
              <ShoppingBag size={20} />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-black bg-white p-6 space-y-4">
            <a href="#home" className="block text-sm hover:opacity-60">Home</a>
            <a href="#shop" className="block text-sm hover:opacity-60">Shop</a>
            <a href="#about" className="block text-sm hover:opacity-60">About</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight mb-6 tracking-tight">
              Premium Quality. Affordable Prices.
            </h2>
            <p className="text-lg text-gray-700 mb-8 leading-relaxed">
              SAINTS WEARS delivers premium streetwear without the premium price tag. Quality tees, jorts, and basics for everyone.
            </p>
            <button className="px-8 py-3 bg-black text-white text-sm font-medium hover:opacity-80 transition">
              Shop Now
            </button>
          </div>
          <div className="bg-gray-100 h-96 rounded-lg flex items-center justify-center text-6xl">
            👕
          </div>
        </div>
      </section>

      {/* Product Gallery */}
      <section id="shop" className="py-20 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-4xl font-bold mb-12 tracking-tight">Featured Collection</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((product) => (
              <div 
                key={product.id}
                className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition cursor-pointer"
                onClick={() => setSelectedProduct(product)}
              >
              <div className="bg-gray-200 h-64 flex items-center justify-center rounded-t-lg overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
                <div className="p-6">
                  <h4 className="text-lg font-semibold mb-2">{product.name}</h4>
                  <p className="text-sm text-gray-600 mb-4">{product.color}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold">{product.price}</span>
                    <button className="p-2 bg-black text-white rounded hover:opacity-80 transition">
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-4xl font-bold mb-6 tracking-tight">About SAINTS WEARS</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-4">
            We believe everyone deserves quality streetwear at prices that make sense. No markup. No overpricing. Just clean basics at fair prices.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            From our saints to your closet—affordable quality, always.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8 px-6">
        <div className="max-w-7xl mx-auto text-center text-sm">
          <p>© 2024 SAINTS WEARS. All rights reserved.</p>
          <p className="mt-2 text-gray-400">Premium Quality. Affordable Prices.</p>
        </div>
      </footer>

      {/* Product Modal */}
      {selectedProduct && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedProduct(null)}
        >
          <div 
            className="bg-white rounded-lg p-8 max-w-sm w-full"
            onClick={(e) => e.stopPropagation()}
          >
          <div className="bg-gray-100 h-64 flex items-center justify-center rounded-lg overflow-hidden mb-6">
            <img 
              src={selectedProduct.image} 
              alt={selectedProduct.name}
              className="w-full h-full object-cover"
            />
          </div>
            <h4 className="text-2xl font-bold mb-2">{selectedProduct.name}</h4>
            <p className="text-gray-600 mb-4">{selectedProduct.color}</p>
            <p className="text-3xl font-bold mb-6">{selectedProduct.price}</p>
            <button className="w-full bg-black text-white py-3 font-semibold hover:opacity-80 transition mb-3">
              Add to Cart
            </button>
            <button 
              className="w-full border border-black py-3 font-semibold hover:bg-black hover:text-white transition"
              onClick={() => setSelectedProduct(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}