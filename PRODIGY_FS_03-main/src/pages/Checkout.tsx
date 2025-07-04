import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { ShoppingCart, Check, User } from 'lucide-react';

const Checkout = () => {
  const [step, setStep] = useState<'shipping' | 'payment' | 'confirmation'>('shipping');
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: ''
  });

  const cartItems = [
    {
      id: 1,
      name: "Premium Coffee Beans",
      price: 24.99,
      quantity: 2,
    },
    {
      id: 2,
      name: "Organic Tea Collection",
      price: 19.99,
      quantity: 1,
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 5.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step === 'shipping') {
      setStep('payment');
    } else if (step === 'payment') {
      setStep('confirmation');
    }
  };

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
      <main className="flex flex-col items-center justify-center py-12 px-4">
        <div className="bg-white/90 shadow-xl rounded-2xl p-8 w-full max-w-2xl border border-primary/20">
          {/* Progress Indicator */}
          <div className="flex items-center justify-center mb-8">
            <div className="flex items-center space-x-4">
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                step === 'shipping' ? 'bg-primary text-white' : 'bg-green-500 text-white'
              }`}>
                {step === 'shipping' ? '1' : <Check className="h-4 w-4" />}
              </div>
              <div className="w-16 h-1 bg-muted"></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                step === 'payment' ? 'bg-primary text-white' : 
                step === 'confirmation' ? 'bg-green-500 text-white' : 'bg-muted text-muted-foreground'
              }`}>
                {step === 'confirmation' ? <Check className="h-4 w-4" /> : '2'}
              </div>
              <div className="w-16 h-1 bg-muted"></div>
              <div className={`flex items-center justify-center w-8 h-8 rounded-full ${
                step === 'confirmation' ? 'bg-primary text-white' : 'bg-muted text-muted-foreground'
              }`}>
                {step === 'confirmation' ? <Check className="h-4 w-4" /> : '3'}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {step === 'shipping' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Shipping Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input 
                          id="email"
                          type="email" 
                          value={formData.email}
                          onChange={(e) => handleInputChange('email', e.target.value)}
                          required 
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName">First Name</Label>
                          <Input 
                            id="firstName"
                            value={formData.firstName}
                            onChange={(e) => handleInputChange('firstName', e.target.value)}
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="lastName">Last Name</Label>
                          <Input 
                            id="lastName"
                            value={formData.lastName}
                            onChange={(e) => handleInputChange('lastName', e.target.value)}
                            required 
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="address">Street Address</Label>
                        <Input 
                          id="address"
                          value={formData.address}
                          onChange={(e) => handleInputChange('address', e.target.value)}
                          required 
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div>
                          <Label htmlFor="city">City</Label>
                          <Input 
                            id="city"
                            value={formData.city}
                            onChange={(e) => handleInputChange('city', e.target.value)}
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="state">State</Label>
                          <Input 
                            id="state"
                            value={formData.state}
                            onChange={(e) => handleInputChange('state', e.target.value)}
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="zipCode">ZIP Code</Label>
                          <Input 
                            id="zipCode"
                            value={formData.zipCode}
                            onChange={(e) => handleInputChange('zipCode', e.target.value)}
                            required 
                          />
                        </div>
                      </div>
                      <Button type="submit" className="w-full">Continue to Payment</Button>
                    </form>
                  </CardContent>
                </Card>
              )}

              {step === 'payment' && (
                <Card>
                  <CardHeader>
                    <CardTitle>Payment Information</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="cardName">Name on Card</Label>
                        <Input 
                          id="cardName"
                          value={formData.cardName}
                          onChange={(e) => handleInputChange('cardName', e.target.value)}
                          required 
                        />
                      </div>
                      <div>
                        <Label htmlFor="cardNumber">Card Number</Label>
                        <Input 
                          id="cardNumber"
                          placeholder="1234 5678 9012 3456"
                          value={formData.cardNumber}
                          onChange={(e) => handleInputChange('cardNumber', e.target.value)}
                          required 
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="expiryDate">Expiry Date</Label>
                          <Input 
                            id="expiryDate"
                            placeholder="MM/YY"
                            value={formData.expiryDate}
                            onChange={(e) => handleInputChange('expiryDate', e.target.value)}
                            required 
                          />
                        </div>
                        <div>
                          <Label htmlFor="cvv">CVV</Label>
                          <Input 
                            id="cvv"
                            placeholder="123"
                            value={formData.cvv}
                            onChange={(e) => handleInputChange('cvv', e.target.value)}
                            required 
                          />
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <Button type="button" variant="outline" onClick={() => setStep('shipping')}>
                          Back
                        </Button>
                        <Button type="submit" className="flex-1">Complete Order</Button>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              )}

              {step === 'confirmation' && (
                <Card>
                  <CardContent className="text-center py-12">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Check className="h-8 w-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">Order Confirmed!</h2>
                    <p className="text-muted-foreground mb-4">
                      Thank you for your purchase. Your order #12345 has been confirmed.
                    </p>
                    <p className="text-sm text-muted-foreground mb-6">
                      We'll send you an email confirmation shortly with tracking information.
                    </p>
                    <div className="flex gap-4 justify-center">
                      <Button asChild>
                        <Link to="/products">Continue Shopping</Link>
                      </Button>
                      <Button variant="outline" asChild>
                        <Link to="/">Return Home</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>

            {/* Order Summary */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between text-sm">
                      <span>{item.name} × {item.quantity}</span>
                      <span>${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  <div className="border-t pt-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Subtotal:</span>
                      <span>${subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping:</span>
                      <span>${shipping.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax:</span>
                      <span>${tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between font-semibold text-lg border-t pt-2">
                      <span>Total:</span>
                      <span>${total.toFixed(2)}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Checkout;
