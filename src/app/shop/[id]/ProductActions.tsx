"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";
import styles from "./ProductDetails.module.css";

export default function ProductActions({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  
  const isWishlisted = isInWishlist(product.id);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(q => q - 1);
  };

  const handleIncrease = () => {
    setQuantity(q => q + 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleWishlist = () => {
    toggleWishlist(product);
  };

  return (
    <div className={styles.actionSectionWrapper}>
      <div className={styles.actionSection}>
        <div className={styles.quantity}>
          <button onClick={handleDecrease}>-</button>
          <span>{quantity}</span>
          <button onClick={handleIncrease}>+</button>
        </div>
        <button className={styles.addToCartBtn} onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
      <button 
        className={styles.wishlistToggleBtn}
        onClick={handleWishlist}
      >
        <Heart 
          size={20} 
          fill={isWishlisted ? "var(--accent-gold)" : "none"} 
          color={isWishlisted ? "var(--accent-gold)" : "var(--text-secondary)"} 
        />
        {isWishlisted ? "Saved to Wishlist" : "Add to Wishlist"}
      </button>
    </div>
  );
}
