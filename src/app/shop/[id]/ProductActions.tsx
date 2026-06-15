"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Product } from "@/data/products";
import styles from "./ProductDetails.module.css";

export default function ProductActions({ product }: { product: Product }) {
  const [quantity, setQuantity] = useState(1);
  const hasVariants = product.variants && product.variants.length > 0;
  const initialVariant = hasVariants ? product.variants![0] : { size: product.size, price: product.price };
  const [selectedVariant, setSelectedVariant] = useState(initialVariant);
  
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  
  const isWishlisted = isInWishlist(product.id);

  const handleDecrease = () => {
    if (quantity > 1) setQuantity(q => q - 1);
  };

  const handleIncrease = () => {
    setQuantity(q => q + 1);
  };

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedVariant.size, selectedVariant.price);
  };

  const handleWishlist = () => {
    toggleWishlist(product);
  };

  return (
    <div className={styles.actionSectionWrapper}>
      <div className={styles.priceContainer}>
        <span className={styles.price}>₹{selectedVariant.price}</span>
        <span className={styles.size}>per {selectedVariant.size}</span>
      </div>

      {hasVariants && (
        <div className={styles.variantSelector}>
          <label htmlFor="variant-select" className={styles.variantLabel}>Select Size: </label>
          <select 
            id="variant-select"
            value={selectedVariant.size}
            onChange={(e) => {
              const variant = product.variants!.find(v => v.size === e.target.value);
              if (variant) setSelectedVariant(variant);
            }}
            className={styles.selectInput}
          >
            {product.variants!.map(v => (
              <option key={v.size} value={v.size}>{v.size} - ₹{v.price}</option>
            ))}
          </select>
        </div>
      )}

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
