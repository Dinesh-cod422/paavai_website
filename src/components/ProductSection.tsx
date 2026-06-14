"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight, Sprout } from "lucide-react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import styles from "./ProductSection.module.css";
import { products } from "../data/products";

export default function ProductSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  return (
    <section className={styles.productSection}>
      <div className={`container ${styles.productContainer}`}>
        <div className={styles.headerRow}>
          <div className={styles.headerCenter}>
            <h2 className={`${styles.title} serif-font`}>Our Products</h2>
            <div className={styles.leafDecoration}>
              <Sprout size={24} color="var(--accent-green-dark)" />
            </div>
          </div>
          <Link href="/shop" className={styles.viewAllBtn}>View All</Link>
        </div>

        <div className={styles.carouselWrapper}>
          <button className={`${styles.navBtn} ${styles.prevBtn}`} aria-label="Previous" onClick={scrollLeft}>
            <ChevronLeft size={24} />
          </button>
          
          <div className={styles.productGrid} ref={scrollRef}>
            {products.map((product) => (
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

          <button className={`${styles.navBtn} ${styles.nextBtn}`} aria-label="Next" onClick={scrollRight}>
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </section>
  );
}
