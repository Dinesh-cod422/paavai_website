"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
  id: number;
  image: string;
  title: string;
  size: string;
  price: number;
}

export default function ProductCard({ id, image, title, size, price }: ProductCardProps) {
  const { addToCart, toggleWishlist, isInWishlist } = useCart();
  
  const product = products.find(p => p.id === id);
  const isWishlisted = isInWishlist(id);
  const hasVariants = product?.variants && product.variants.length > 0;

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // prevent navigating to product details
    if (product) addToCart(product);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    if (product) toggleWishlist(product);
  };

  return (
    <Link href={`/shop/${id}`} className={styles.card}>
      <button 
        className={styles.wishlistBtn} 
        onClick={handleWishlist}
        aria-label="Toggle Wishlist"
      >
        <Heart 
          size={20} 
          fill={isWishlisted ? "var(--accent-gold)" : "none"} 
          color={isWishlisted ? "var(--accent-gold)" : "var(--text-secondary)"} 
        />
      </button>
      <div className={styles.imageContainer}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, 280px"
          className={styles.productImage}
        />
      </div>
      <div className={styles.details}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.size}>{size}</p>
        <p className={styles.price}>{hasVariants ? `From ₹${price}` : `₹${price}`}</p>
        <button className={styles.addToCartBtn} onClick={handleAddToCart}>
          {hasVariants ? "Select Options" : "Add to Cart"}
        </button>
      </div>
    </Link>
  );
}
