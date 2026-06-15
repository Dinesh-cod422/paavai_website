"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { CheckCircle2 } from "lucide-react";
import { Product } from "../data/products";
import styles from "../components/Toast.module.css";

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
  selectedPrice: number;
  cartItemId: string;
}

interface CartContextType {
  cart: CartItem[];
  wishlist: Product[];
  addToCart: (product: Product, quantity?: number, selectedSize?: string, selectedPrice?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, quantity: number) => void;
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: number) => boolean;
  cartTotal: number;
  cartCount: number;
  showToast: (message: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<Product[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [isToastFading, setIsToastFading] = useState(false);

  const showToast = useCallback((message: string) => {
    setToastMessage(message);
    setIsToastFading(false);
    
    // Clear previous timeouts if triggering multiple rapidly
    setTimeout(() => {
      setIsToastFading(true);
      setTimeout(() => {
        setToastMessage(null);
        setIsToastFading(false);
      }, 300); // Wait for fade out animation
    }, 3000); // Display duration
  }, []);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("paavai_cart");
      const savedWishlist = localStorage.getItem("paavai_wishlist");
      if (savedCart) setCart(JSON.parse(savedCart));
      if (savedWishlist) setWishlist(JSON.parse(savedWishlist));
    } catch (error) {
      console.error("Failed to load state from localStorage", error);
    }
    setIsInitialized(true);
  }, []);

  // Save to localStorage when state changes
  useEffect(() => {
    if (isInitialized) {
      localStorage.setItem("paavai_cart", JSON.stringify(cart));
      localStorage.setItem("paavai_wishlist", JSON.stringify(wishlist));
    }
  }, [cart, wishlist, isInitialized]);

  const addToCart = (product: Product, quantity: number = 1, selectedSize?: string, selectedPrice?: number) => {
    const size = selectedSize || product.size;
    const price = selectedPrice || product.price;
    const cartItemId = `${product.id}_${size}`;

    setCart((prev) => {
      const existing = prev.find((item) => item.cartItemId === cartItemId);
      if (existing) {
        return prev.map((item) =>
          item.cartItemId === cartItemId ? { ...item, quantity: item.quantity + quantity } : item
        );
      }
      return [...prev, { ...product, quantity, selectedSize: size, selectedPrice: price, cartItemId }];
    });
    showToast(`Added ${product.title} to Cart`);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.cartItemId === cartItemId ? { ...item, quantity } : item))
    );
  };

  const toggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.find((item) => item.id === product.id);
      if (exists) {
        showToast(`Removed ${product.title} from Wishlist`);
        return prev.filter((item) => item.id !== product.id);
      }
      showToast(`Saved ${product.title} to Wishlist`);
      return [...prev, product];
    });
  };

  const isInWishlist = (productId: number) => {
    return wishlist.some((item) => item.id === productId);
  };

  const cartTotal = cart.reduce((total, item) => total + item.selectedPrice * item.quantity, 0);
  const cartCount = cart.length;

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        removeFromCart,
        updateQuantity,
        toggleWishlist,
        isInWishlist,
        cartTotal,
        cartCount,
        showToast,
      }}
    >
      {children}
      {/* Toast Notification Portal */}
      {toastMessage && (
        <div className={styles.toastWrapper}>
          <div className={`${styles.toast} ${isToastFading ? styles.fadeout : ''}`}>
            <CheckCircle2 size={24} className={styles.toastIcon} />
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
