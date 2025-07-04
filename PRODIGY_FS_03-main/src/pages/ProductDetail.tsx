import React, { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, User, ArrowLeft } from 'lucide-react';
import { useCart } from '@/hooks/CartContext';

const ProductDetail = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Mock product data - in a real app, this would come from an API
  const product = {
    id: parseInt(id || '1'),
    name: "Premium Coffee Beans",
    price: 24.99,
    originalPrice: 29.99,
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    description: "Our premium coffee beans are carefully sourced from the finest coffee farms around the world. Each batch is expertly roasted to bring out the unique flavor profiles that make our coffee exceptional.",
    features: [
      "100% Arabica beans",
      "Single-origin from Colombia",
      "Medium roast profile",
      "Freshly roasted to order",
      "Fair trade certified"
    ],
    specifications: {
      "Roast Level": "Medium",
      "Origin": "Colombia",
      "Processing": "Washed",
      "Tasting Notes": "Chocolate, Caramel, Citrus",
      "Weight": "12 oz (340g)"
    },
    rating: 4.8,
    reviews: 127,
    inStock: true,
    category: "beverages"
  };

  const reviews = [
    {
      id: 1,
      author: "Sarah M.",
      rating: 5,
      date: "2024-01-10",
      comment: "Absolutely amazing coffee! The flavor is rich and smooth. Will definitely order again."
    },
    {
      id: 2,
      author: "Mike D.",
      rating: 4,
      date: "2024-01-08",
      comment: "Great quality beans. The aroma is fantastic and it brews beautifully."
    },
    {
      id: 3,
      author: "Lisa K.",
      rating: 5,
      date: "2024-01-05",
      comment: "Best coffee I've had in years! Fresh roasted and delivered quickly."
    }
  ];

  const relatedProducts = [
    { id: 2, name: "Organic Tea Collection", price: 19.99, image: "/placeholder.svg" },
    { id: 3, name: "Artisan Honey", price: 12.99, image: "/placeholder.svg" },
    { id: 4, name: "French Press", price: 34.99, image: "/placeholder.svg" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-white to-secondary/10 flex items-center justify-center py-12 px-4">
      <div className="bg-white/90 shadow-xl rounded-2xl p-8 w-full max-w-3xl border border-primary/20 flex flex-col md:flex-row gap-8 items-center">
        {/* Header */}
        <header className="bg-white shadow-sm border-b">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link to="/" className="text-2xl font-bold text-primary">
                LocalShop
              </Link>
              <nav className="hidden md:flex items-center space-x-6">
                <Link to="/products" className="text-foreground hover:text-primary transition-colors">
                  Products
                </Link>
                <Link to="/about" className="text-foreground hover:text-primary transition-colors">
                  About
                </Link>
                <Link to="/contact" className="text-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </nav>
              <div className="flex items-center space-x-4">
                <Button variant="ghost" size="icon" asChild>
                  <Link to="/account">
                    <User className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <Link to="/cart">
                    <ShoppingCart className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link to="/products" className="hover:text-primary">Products</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </div>

          <Button variant="ghost" className="mb-6" asChild>
            <Link to="/products">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </Link>
          </Button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <div>
              <div className="mb-4">
                <img 
                  src={product.images[selectedImage]} 
                  alt={product.name}
                  className="w-full h-96 object-cover rounded-lg"
                />
              </div>
              <div className="flex space-x-2">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded border-2 overflow-hidden ${
                      selectedImage === index ? 'border-primary' : 'border-muted'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
              
              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? "★" : "☆"}>
                      ★
                    </span>
                  ))}
                </div>
                <span className="ml-2 text-sm text-muted-foreground">
                  ({product.rating}) • {product.reviews} reviews
                </span>
              </div>

              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center space-x-3">
                  <span className="text-3xl font-bold text-primary">${product.price}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-lg text-muted-foreground line-through">
                      ${product.originalPrice}
                    </span>
                  )}
                </div>
                {product.originalPrice > product.price && (
                  <p className="text-green-600 font-medium">
                    Save ${(product.originalPrice - product.price).toFixed(2)}
                  </p>
                )}
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6">{product.description}</p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Key Features:</h3>
                <ul className="space-y-1">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Quantity and Add to Cart */}
              <div className="mb-8">
                <div className="flex items-center space-x-4 mb-4">
                  <label className="font-medium">Quantity:</label>
                  <div className="flex items-center border rounded">
                    <button 
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 hover:bg-muted"
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-x">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 hover:bg-muted"
                    >
                      +
                    </button>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="flex-1"
                    disabled={!product.inStock}
                    onClick={() => {
                      addToCart({ id: product.id, name: product.name, price: product.price, image: product.images[0] });
                      navigate('/cart');
                    }}
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                  </Button>
                  <Button size="lg" variant="outline">
                    Buy Now
                  </Button>
                </div>
              </div>

              {/* Stock Status */}
              <div className="text-sm">
                {product.inStock ? (
                  <span className="text-green-600">✓ In Stock - Ships within 1-2 business days</span>
                ) : (
                  <span className="text-red-600">✗ Currently out of stock</span>
                )}
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="mt-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Specifications */}
              <Card>
                <CardHeader>
                  <CardTitle>Product Specifications</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <div key={key} className="flex justify-between py-2 border-b last:border-b-0">
                        <span className="font-medium">{key}:</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Customer Reviews */}
              <Card>
                <CardHeader>
                  <CardTitle>Customer Reviews ({reviews.length})</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {reviews.slice(0, 3).map((review) => (
                      <div key={review.id} className="border-b last:border-b-0 pb-4 last:pb-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-medium">{review.author}</span>
                            <div className="flex text-yellow-400 text-sm">
                              {[...Array(5)].map((_, i) => (
                                <span key={i} className={i < review.rating ? "★" : "☆"}>
                                  ★
                                </span>
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-muted-foreground">{review.date}</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{review.comment}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Related Products</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((product) => (
                <Card key={product.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader className="p-0">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                  </CardHeader>
                  <CardContent className="p-4">
                    <CardTitle className="text-lg mb-2">{product.name}</CardTitle>
                    <div className="flex items-center justify-between">
                      <span className="text-xl font-bold text-primary">${product.price}</span>
                      <Button size="sm" asChild>
                        <Link to={`/product/${product.id}`}>View</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
