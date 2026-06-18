"use client";

import { useState, useEffect, Suspense } from "react";
import { Metadata } from "next";
import { Sprout, Search } from "lucide-react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/ProductCard";
import styles from "./Shop.module.css";
import { products } from "../../data/products";

function ShopContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get("q") || "";
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  // If the user searches from the header while already on the shop page, update the local state
  useEffect(() => {
    if (searchParams.get("q")) {
      setSearchQuery(searchParams.get("q") || "");
    }
  }, [searchParams]);

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main>
      <section className={styles.shopSection}>
        <div className="container">
          <div className={styles.shopHeader}>
            <h1 className={`${styles.title} serif-font`}>Premium Collection</h1>
            <p className={styles.subtitle}>
              Discover our full range of chemical-free, traditionally crafted homemade products. Sourced with care, prepared with love without artificial mixing.
            </p>
            <div className={styles.leafDecoration}>
              <Sprout size={28} color="var(--accent-green-dark)" />
            </div>
          </div>

          <div className={styles.searchContainer}>
            <Search className={styles.searchIcon} size={20} />
            <input
              type="text"
              placeholder="Search premium products..."
              className={styles.searchInput}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className={styles.productGrid}>
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  size={product.size}
                  price={product.price}
                />
              ))
            ) : (
              <p className={styles.noResults}>No products found matching "{searchQuery}".</p>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default function Shop() {
  return (
    <Suspense fallback={<div style={{ padding: "10rem", textAlign: "center" }}>Loading premium products...</div>}>
      <ShopContent />
    </Suspense>
  );
}
