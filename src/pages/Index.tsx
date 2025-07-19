import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, ShoppingBag, Truck, Shield, Headphones, Package } from 'lucide-react';
import heroImage from '@/assets/hero-banner.jpg';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-24 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="text-center lg:text-left animate-fade-in">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3">
                  <Package className="h-8 w-8 text-white" />
                </div>
                <span className="ml-3 text-2xl font-bold text-white">BhuviKart</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Welcome to <span className="text-secondary">BhuviKart</span>
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Your ultimate online shopping destination. Discover amazing products, 
                unbeatable prices, and exceptional service - all in one place.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild variant="hero" size="lg" className="text-lg px-8 py-6">
                  <Link to="/home">
                    Shop Now <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg px-8 py-6 border-white text-white hover:bg-white hover:text-primary">
                  <Link to="/products">
                    Browse Products
                  </Link>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="animate-slide-up">
              <img 
                src={heroImage} 
                alt="BhuviKart - Online Shopping Experience" 
                className="w-full h-auto rounded-2xl shadow-hero"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose BhuviKart?</h2>
            <p className="text-xl text-muted-foreground">Experience the best in online shopping</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="bg-gradient-card border-0 shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <ShoppingBag className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Wide Selection</h3>
                <p className="text-sm text-muted-foreground">
                  Thousands of products across multiple categories
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-secondary/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <Truck className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-semibold mb-2">Fast Delivery</h3>
                <p className="text-sm text-muted-foreground">
                  Quick and reliable shipping to your doorstep
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-success/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <Shield className="h-8 w-8 text-success" />
                </div>
                <h3 className="font-semibold mb-2">Secure Shopping</h3>
                <p className="text-sm text-muted-foreground">
                  Your data and payments are always protected
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gradient-card border-0 shadow-card hover:shadow-elevated transition-all duration-300 hover:scale-105">
              <CardContent className="p-6 text-center">
                <div className="bg-info/10 rounded-full p-4 w-16 h-16 mx-auto mb-4">
                  <Headphones className="h-8 w-8 text-info" />
                </div>
                <h3 className="font-semibold mb-2">24/7 Support</h3>
                <p className="text-sm text-muted-foreground">
                  Always here to help with any questions
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">About This Project</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              BhuviKart is a modern, fully responsive e-commerce web application built with React, 
              TypeScript, and Tailwind CSS. This project demonstrates advanced frontend development 
              skills including state management, routing, authentication, and responsive design.
            </p>
            
            <div className="bg-gradient-card rounded-2xl p-8 shadow-card">
              <h3 className="text-xl font-semibold mb-4">Developed by Dheeraj Gaur</h3>
              <p className="text-muted-foreground mb-6">
                A passionate full-stack developer committed to creating exceptional user experiences 
                through clean code and modern web technologies.
              </p>
              
              <Button asChild variant="secondary" size="lg">
                <Link to="https://dheerajgaurofficial.netlify.app/" target="_blank">
                  Visit Developer Portfolio <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
