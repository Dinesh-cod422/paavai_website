"use client";

import Link from "next/link";
import { Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import ProductCard from "@/components/ProductCard";
import styles from "./Wishlist.module.css";

export default function WishlistPage() {
  const { wishlist } = useCart();

  if (wishlist.length === 0) {
    return (
      <main className={styles.emptyMain}>
        <div className="container" style={{ textAlign: "center" }}>
          <Heart size={64} color="var(--accent-gold)" style={{ opacity: 0.5, marginBottom: "2rem" }} />
          <h1 className="serif-font" style={{ fontSize: "3rem", marginBottom: "1rem" }}>Your Wishlist is Empty</h1>
          <p style={{ color: "var(--text-secondary)", marginBottom: "3rem", fontSize: "1.2rem" }}>Explore our premium collection and save your favorite products here.</p>
          <Link href="/shop" className="btn-primary" style={{ textDecoration: "none" }}>
            Explore Shop
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className={styles.main}>
      <div className="container">
        <div className={styles.header}>
          <div className={styles.titleWrapper}>
            <Heart size={32} color="var(--accent-gold)" fill="var(--accent-gold)" />
            <h1 className="serif-font">My Wishlist</h1>
          </div>
          <p>{wishlist.length} item(s) saved</p>
        </div>

        <div className={styles.productGrid}>
          {wishlist.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              title={product.title}
              size={product.size}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </main>
  );
}
