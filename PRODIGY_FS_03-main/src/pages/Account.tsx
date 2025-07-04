import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { User, ShoppingCart } from 'lucide-react';

const Account = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    confirmPassword: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate login/signup
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setFormData({
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      confirmPassword: ''
    });
  };

  const orders = [
    {
      id: '12345',
      date: '2024-01-15',
      status: 'Delivered',
      total: 69.97,
      items: ['Premium Coffee Beans', 'Organic Tea Collection']
    },
    {
      id: '12344',
      date: '2024-01-10',
      status: 'Shipped',
      total: 32.98,
      items: ['Artisan Honey', 'Handcrafted Soap']
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
              <Button variant="ghost" size="icon">
                <User className="h-5 w-5 text-primary" />
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
        <div className="bg-white/90 shadow-xl rounded-2xl p-8 w-full max-w-lg border border-primary/20 mb-8">
          {!isLoggedIn ? (
            <div className="max-w-md mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle>{isLogin ? 'Sign In' : 'Create Account'}</CardTitle>
                  <CardDescription>
                    {isLogin 
                      ? 'Welcome back! Please sign in to your account.' 
                      : 'Create a new account to start shopping.'}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {!isLogin && (
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
                    )}
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
                    <div>
                      <Label htmlFor="password">Password</Label>
                      <Input 
                        id="password"
                        type="password" 
                        value={formData.password}
                        onChange={(e) => handleInputChange('password', e.target.value)}
                        required 
                      />
                    </div>
                    {!isLogin && (
                      <div>
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input 
                          id="confirmPassword"
                          type="password" 
                          value={formData.confirmPassword}
                          onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                          required 
                        />
                      </div>
                    )}
                    <Button type="submit" className="w-full">
                      {isLogin ? 'Sign In' : 'Create Account'}
                    </Button>
                  </form>
                  <div className="text-center mt-4">
                    <Button 
                      variant="link" 
                      onClick={() => setIsLogin(!isLogin)}
                      className="text-sm"
                    >
                      {isLogin 
                        ? "Don't have an account? Sign up" 
                        : "Already have an account? Sign in"}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          ) : (
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-between mb-8">
                <h1 className="text-3xl font-bold">My Account</h1>
                <Button onClick={handleLogout} variant="outline">
                  Sign Out
                </Button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Account Info */}
                <Card>
                  <CardHeader>
                    <CardTitle>Account Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <Label htmlFor="accountEmail">Email</Label>
                      <Input id="accountEmail" value="john@example.com" readOnly />
                    </div>
                    <div>
                      <Label htmlFor="accountName">Name</Label>
                      <Input id="accountName" value="John Doe" />
                    </div>
                    <Button className="w-full">Update Profile</Button>
                  </CardContent>
                </Card>

                {/* Order History */}
                <div className="md:col-span-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Order History</CardTitle>
                      <CardDescription>Track your recent orders</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {orders.map((order) => (
                          <div key={order.id} className="border rounded-lg p-4">
                            <div className="flex justify-between items-start mb-2">
                              <div>
                                <h3 className="font-semibold">Order #{order.id}</h3>
                                <p className="text-sm text-muted-foreground">{order.date}</p>
                              </div>
                              <div className="text-right">
                                <span className={`px-2 py-1 rounded-full text-xs ${
                                  order.status === 'Delivered' 
                                    ? 'bg-green-100 text-green-800' 
                                    : 'bg-blue-100 text-blue-800'
                                }`}>
                                  {order.status}
                                </span>
                                <p className="font-semibold mt-1">${order.total.toFixed(2)}</p>
                              </div>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              Items: {order.items.join(', ')}
                            </div>
                            <div className="flex gap-2 mt-3">
                              <Button size="sm" variant="outline">View Details</Button>
                              {order.status === 'Delivered' && (
                                <Button size="sm" variant="outline">Reorder</Button>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          )}
        </div>
        {isLoggedIn && (
          <div className="bg-white/90 shadow-xl rounded-2xl p-8 w-full max-w-2xl border border-primary/20">
            <h2 className="text-2xl font-bold text-primary mb-4 drop-shadow">Your Orders</h2>
            <div className="space-y-4">
              {orders.map((order) => (
                <div key={order.id} className="border rounded-lg p-4">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-semibold">Order #{order.id}</h3>
                      <p className="text-sm text-muted-foreground">{order.date}</p>
                    </div>
                    <div className="text-right">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        order.status === 'Delivered' 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {order.status}
                      </span>
                      <p className="font-semibold mt-1">${order.total.toFixed(2)}</p>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Items: {order.items.join(', ')}
                  </div>
                  <div className="flex gap-2 mt-3">
                    <Button size="sm" variant="outline">View Details</Button>
                    {order.status === 'Delivered' && (
                      <Button size="sm" variant="outline">Reorder</Button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Account;
