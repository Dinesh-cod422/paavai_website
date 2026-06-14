import Image from "next/image";
import { Metadata } from "next";
import { CheckCircle2, HeartPulse } from "lucide-react";
import { products } from "@/data/products";
import styles from "./BenefitsPage.module.css";

export const metadata: Metadata = {
  title: "Health Benefits",
  description: "Discover the amazing health benefits of our traditional, stone-ground, and hand-churned Paavai Paarampariyam products.",
};

export default function BenefitsPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className={styles.heroContent}>
            <div className={styles.iconWrapper}>
              <HeartPulse size={40} />
            </div>
            <h1 className={`${styles.title} serif-font`}>The Benefits of Tradition</h1>
            <p className={styles.subtitle}>Discover the healing power of pure, natural ingredients</p>
          </div>
        </div>
      </section>

      {/* Benefits Content Section */}
      <section className={styles.contentSection}>
        <div className="container">
          <div className={styles.benefitsList}>
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className={`${styles.benefitRow} ${index % 2 !== 0 ? styles.reverseRow : ''}`}
              >
                {/* Image Side */}
                <div className={styles.imageColumn}>
                  <div className={styles.imageWrapper}>
                    <Image 
                      src={product.image} 
                      alt={product.title} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className={styles.productImage}
                    />
                  </div>
                </div>

                {/* Text Side */}
                <div className={styles.textColumn}>
                  <h2 className="serif-font">{product.title}</h2>
                  <p className={styles.description}>{product.longDescription}</p>
                  
                  <div className={styles.benefitsBox}>
                    <h3 className="serif-font">Health Benefits</h3>
                    <ul className={styles.benefitsItems}>
                      {product.benefits.map((benefit, bIndex) => (
                        <li key={bIndex}>
                          <CheckCircle2 size={20} className={styles.checkIcon} />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
