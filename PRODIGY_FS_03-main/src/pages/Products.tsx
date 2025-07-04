import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Search, ShoppingCart } from 'lucide-react';

const Products = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: "Premium Coffee Beans",
      price: 24.99,
      category: "beverages",
      image: "/placeholder.svg",
      description: "Freshly roasted premium arabica beans",
      rating: 4.8,
      inStock: true
    },
    {
      id: 2,
      name: "Organic Tea Collection",
      price: 19.99,
      category: "beverages",
      image: "/placeholder.svg",
      description: "Handpicked organic tea varieties",
      rating: 4.6,
      inStock: true
    },
    {
      id: 3,
      name: "Artisan Honey",
      price: 12.99,
      category: "food",
      image: "/placeholder.svg",
      description: "Pure local wildflower honey",
      rating: 4.9,
      inStock: true
    },
    {
      id: 4,
      name: "Handcrafted Soap",
      price: 8.99,
      category: "personal-care",
      image: "/placeholder.svg",
      description: "Natural ingredients, gentle on skin",
      rating: 4.7,
      inStock: true
    },
    {
      id: 5,
      name: "Organic Olive Oil",
      price: 16.99,
      category: "food",
      image: "/placeholder.svg",
      description: "Extra virgin cold-pressed olive oil",
      rating: 4.8,
      inStock: false
    },
    {
      id: 6,
      name: "Herbal Candles",
      price: 14.99,
      category: "home",
      image: "/placeholder.svg",
      description: "Aromatherapy candles with essential oils",
      rating: 4.5,
      inStock: true
    }
  ];

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'beverages', label: 'Beverages' },
    { value: 'food', label: 'Food' },
    { value: 'personal-care', label: 'Personal Care' },
    { value: 'home', label: 'Home & Living' }
  ];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-secondary/10">
      {/* Header */}
      <header className="bg-white/90 shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary">
              LocalShop
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/products" className="text-primary font-medium">
                Products
              </Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
            <Button variant="ghost" size="icon" asChild>
              <Link to="/cart">
                <ShoppingCart className="h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </header>
      {/* Category Filter */}
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap gap-3 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat.value}
              className={`px-4 py-2 rounded-full border transition-colors font-medium text-sm shadow-sm
                ${selectedCategory === cat.value ? 'bg-primary text-white border-primary' : 'bg-white text-primary border-primary/30 hover:bg-primary/10'}`}
              onClick={() => setSelectedCategory(cat.value)}
            >
              {cat.label}
            </button>
          ))}
        </div>
        {/* Search Bar */}
        <div className="flex justify-center mb-8">
          <input
            type="text"
            className="border border-primary/30 rounded-lg px-4 py-2 w-full max-w-md focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {filteredProducts.length === 0 ? (
            <div className="col-span-full text-center text-lg text-muted-foreground py-12">
              No products found.
            </div>
          ) : (
            filteredProducts.map(product => (
              <div key={product.id} className="bg-white/90 rounded-2xl shadow-lg border border-primary/10 p-6 flex flex-col items-center hover:shadow-2xl transition-shadow duration-300 group" style={{ boxShadow: '0 8px 32px 0 rgba(255, 94, 98, 0.15), 0 1.5px 8px 0 rgba(255, 175, 123, 0.10)' }}>
                <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded-lg mb-4 border-2 border-transparent group-hover:border-primary transition" />
                <h3 className="text-xl font-extrabold mb-2 bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 bg-clip-text text-transparent drop-shadow">{product.name}</h3>
                <p className="text-muted-foreground text-sm mb-2 text-center">{product.description}</p>
                <div className="font-bold text-lg mb-2 bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 bg-clip-text text-transparent">${product.price.toFixed(2)}</div>
                <Button className="mt-auto w-full py-2 rounded-lg font-semibold text-white bg-gradient-to-r from-orange-500 via-pink-500 to-yellow-400 shadow-lg hover:from-pink-500 hover:to-orange-500 transition-all duration-200 border-none outline-none focus:ring-2 focus:ring-pink-300 focus:ring-offset-2">
                  Add to Cart
                </Button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
