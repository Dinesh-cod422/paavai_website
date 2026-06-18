"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowRight, Leaf, ShieldCheck, Droplet, Ban } from "lucide-react";
import styles from "./Hero.module.css";

import Link from "next/link";
import { products } from "../data/products";

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(timer);
  }, []);

  const features = [
    { icon: <Leaf size={24} />, text: "100% Pure" },
    { icon: <Droplet size={24} />, text: "Traditional\nMethod" },
    { icon: <ShieldCheck size={24} />, text: "Premium\nQuality" },
    { icon: <Ban size={24} />, text: "No\nPreservatives" },
  ];

  return (
    <section className={styles.heroSection}>
      <div className={`container ${styles.heroContainer}`}>
        {/* Left Content */}
        <div className={styles.content}>
          <h1 className={`${styles.title} serif-font`}>
            Pure Tradition <br />
            <span className={styles.titleHighlight}>Pure Goodness</span>
          </h1>
          <p className={styles.description}>
            Traditional products made with love, <br />
            for a healthier you and your family.
          </p>

          <Link href={`/shop/${products[currentIndex]?.id}`} className={`btn-primary ${styles.ctaButton}`} style={{ textDecoration: 'none', display: 'inline-flex' }}>
            Shop Now <ArrowRight size={18} />
          </Link>

          <div className={styles.features}>
            {features.map((feature, index) => (
              <div key={index} className={styles.featureItem}>
                <div className={styles.iconWrapper}>
                  {feature.icon}
                </div>
                <span className={styles.featureText}>{feature.text}</span>
              </div>
            ))}
          </div>

          {/* Pagination dots */}
          <div className={styles.dots}>
            {products.map((_, idx) => (
              <span
                key={idx}
                className={`${styles.dot} ${idx === currentIndex ? styles.activeDot : ''}`}
                onClick={() => setCurrentIndex(idx)}
              ></span>
            ))}
          </div>
        </div>

        {/* Right Image Carousel */}
        <div className={styles.imageContainer}>
          <div className={styles.sticker}>
            <span className={styles.stickerText}>100%</span>
            <span className={styles.stickerSub}>Pure &<br />Homemade</span>
          </div>

          <div className={styles.imageWrapper}>
            {products.map((item, idx) => (
              <Image
                key={idx}
                src={item.image}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className={`${styles.heroImage} ${idx === currentIndex ? styles.activeImage : ''}`}
                priority={idx === 0}
              />
            ))}
            <div className={styles.nameOverlay}>
              <h3 className="serif-font">{products[currentIndex]?.title}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
