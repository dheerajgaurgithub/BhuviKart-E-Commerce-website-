import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { categories, products } from '@/data/products';
import { ArrowRight, Package } from 'lucide-react';

const Categories: React.FC = () => {
  const getCategoryStats = (categoryId: string) => {
    const categoryProducts = products.filter(p => p.category === categoryId);
    const avgPrice = categoryProducts.length > 0 
      ? categoryProducts.reduce((sum, p) => sum + p.price, 0) / categoryProducts.length 
      : 0;
    const minPrice = categoryProducts.length > 0 
      ? Math.min(...categoryProducts.map(p => p.price)) 
      : 0;
    const maxPrice = categoryProducts.length > 0 
      ? Math.max(...categoryProducts.map(p => p.price)) 
      : 0;
    
    return {
      count: categoryProducts.length,
      avgPrice,
      minPrice,
      maxPrice
    };
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Shop by Category</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our wide range of products organized by categories. 
            Find exactly what you're looking for with ease.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {categories.map(category => {
            const stats = getCategoryStats(category.id);
            
            return (
              <Card key={category.id} className="group hover:shadow-elevated transition-all duration-300 hover:scale-105 overflow-hidden">
                <div className="relative">
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={category.image} 
                      alt={category.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-sm opacity-90 mb-3">{category.description}</p>
                    <div className="flex items-center justify-between">
                      <Badge variant="secondary" className="bg-white/20 text-white">
                        {stats.count} Products
                      </Badge>
                      <span className="text-sm">
                        From ${stats.minPrice.toFixed(0)}
                      </span>
                    </div>
                  </div>
                </div>
                
                <CardContent className="p-6">
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Price Range:</span>
                      <span className="font-medium">
                        ${stats.minPrice.toFixed(0)} - ${stats.maxPrice.toFixed(0)}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-muted-foreground">Average Price:</span>
                      <span className="font-medium">${stats.avgPrice.toFixed(0)}</span>
                    </div>
                  </div>
                  
                  <Button asChild className="w-full group">
                    <Link to={`/products?category=${category.id}`}>
                      Browse {category.name}
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Featured Products by Category */}
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">Featured Products by Category</h2>
            <p className="text-muted-foreground">
              Handpicked items from each category
            </p>
          </div>

          {categories.slice(0, 3).map(category => {
            const categoryProducts = products.filter(p => p.category === category.id).slice(0, 4);
            
            if (categoryProducts.length === 0) return null;
            
            return (
              <div key={category.id} className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-2xl font-semibold">{category.name}</h3>
                  <Button asChild variant="outline">
                    <Link to={`/products?category=${category.id}`}>
                      View All
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {categoryProducts.map(product => (
                    <Card key={product.id} className="group hover:shadow-elevated transition-all duration-300 hover:scale-105">
                      <div className="relative overflow-hidden rounded-t-lg">
                        <Link to={`/product/${product.id}`}>
                          <img 
                            src={product.image} 
                            alt={product.title}
                            className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer"
                          />
                        </Link>
                        {product.discount && (
                          <Badge variant="destructive" className="absolute top-2 right-2">
                            -{product.discount}%
                          </Badge>
                        )}
                      </div>
                      
                      <CardContent className="p-4">
                        <Link to={`/product/${product.id}`}>
                          <h4 className="font-semibold mb-2 line-clamp-2 hover:text-primary cursor-pointer">
                            {product.title}
                          </h4>
                        </Link>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-bold text-primary">
                            ${product.price.toFixed(2)}
                          </span>
                          <Button size="sm" variant="outline" asChild>
                            <Link to={`/product/${product.id}`}>
                              View
                            </Link>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 py-12 bg-gradient-primary rounded-2xl text-white">
          <Package className="h-16 w-16 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl mb-8 text-white/90">
            Browse our complete collection of products across all categories
          </p>
          <Button asChild variant="secondary" size="lg">
            <Link to="/products">
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Categories;