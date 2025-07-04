import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, Search, User } from 'lucide-react';
import { useCart } from '@/hooks/CartContext';

const Home = () => {
  const { addToCart } = useCart();
  const [showSearch, setShowSearch] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const featuredProducts = [
    {
      id: 1,
      name: "Premium Coffee Beans",
      price: 24.99,
      image: "/placeholder.svg",
      description: "Freshly roasted premium arabica beans"
    },
    {
      id: 2,
      name: "Organic Tea Collection",
      price: 19.99,
      image: "/placeholder.svg",
      description: "Handpicked organic tea varieties"
    },
    {
      id: 3,
      name: "Artisan Honey",
      price: 12.99,
      image: "/placeholder.svg",
      description: "Pure local wildflower honey"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-secondary/10">
      {/* Header */}
      <header className="bg-white/90 shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="text-2xl font-bold text-primary drop-shadow">LocalShop</Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/products" className="text-foreground hover:text-primary transition-colors">Products</Link>
              <Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link>
              <Link to="/contact" className="text-foreground hover:text-primary transition-colors">Contact</Link>
            </nav>
            <div className="flex items-center space-x-4">
              {showSearch ? (
                <input
                  type="text"
                  className="border rounded px-2 py-1 mr-2 transition-all duration-200 w-48 focus:w-64 border-primary/30 focus:border-primary focus:ring-2 focus:ring-primary/20"
                  placeholder="Search..."
                  value={searchValue}
                  onChange={e => setSearchValue(e.target.value)}
                  onBlur={() => setShowSearch(false)}
                  autoFocus
                />
              ) : null}
              <Button variant="ghost" size="icon" onClick={() => setShowSearch(v => !v)}>
                <Search className="h-5 w-5 text-primary" />
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link to="/account">
                  <User className="h-5 w-5 text-primary" />
                </Link>
              </Button>
              <Button variant="ghost" size="icon" asChild>
                <Link to="/cart">
                  <ShoppingCart className="h-5 w-5 text-primary" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/20 to-secondary/20 py-20 rounded-2xl shadow-lg mx-4 mt-8 mb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-extrabold text-primary mb-6 drop-shadow">Welcome to LocalShop</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">Discover premium local products delivered to your door. Quality you can trust, convenience you'll love.</p>
          <Button size="lg" asChild className="bg-primary text-white hover:bg-primary/90 font-semibold shadow-md">
            <Link to="/products">Shop Now</Link>
          </Button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-white/80 rounded-2xl shadow-md mx-4 mb-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-secondary drop-shadow">Featured Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-48 object-cover rounded-t-lg"
                  />
                </CardHeader>
                <CardContent className="p-6">
                  <CardTitle className="mb-2">{product.name}</CardTitle>
                  <CardDescription className="mb-4">{product.description}</CardDescription>
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-2xl font-bold text-primary">${product.price}</span>
                    <Button asChild>
                      <Link to={`/product/${product.id}`}>View Details</Link>
                    </Button>
                    <Button variant="secondary" onClick={() => addToCart({ id: product.id, name: product.name, price: product.price, image: product.image })}>
                      <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-gradient-soft py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Why Choose LocalShop?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ShoppingCart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Easy Shopping</h3>
                <p className="text-muted-foreground">Simple and intuitive shopping experience with secure checkout</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Quality Products</h3>
                <p className="text-muted-foreground">Carefully curated selection of premium local products</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Personal Service</h3>
                <p className="text-muted-foreground">Dedicated customer support from our local team</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">LocalShop</h3>
              <p className="text-muted">Your trusted local retailer, now online.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><Link to="/products" className="text-muted hover:text-background">Products</Link></li>
                <li><Link to="/about" className="text-muted hover:text-background">About Us</Link></li>
                <li><Link to="/contact" className="text-muted hover:text-background">Contact</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Customer Service</h4>
              <ul className="space-y-2">
                <li><Link to="/help" className="text-muted hover:text-background">Help Center</Link></li>
                <li><Link to="/returns" className="text-muted hover:text-background">Returns</Link></li>
                <li><Link to="/shipping" className="text-muted hover:text-background">Shipping Info</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <p className="text-muted">123 Main Street</p>
              <p className="text-muted">Your City, State 12345</p>
              <p className="text-muted">Phone: (555) 123-4567</p>
            </div>
          </div>
          <div className="border-t border-muted mt-8 pt-8 text-center">
            <p className="text-muted">&copy; 2024 LocalShop. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
