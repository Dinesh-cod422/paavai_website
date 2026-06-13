"use client";

import Image from "next/image";
import styles from "./page.module.css";
import {
  Search,
  User,
  Heart,
  ShoppingCart,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export default function Home() {
  const products = [
    { id: "turmeric", name: "Turmeric Powder", size: "250g", price: "120", image: "/products/turmeric_powder.png" },
    { id: "sarkkarai", name: "Nattu Sarkkarai", size: "500g", price: "150", image: "/products/nattu_sarkkarai.png" },
    { id: "kari-masala", name: "Kari Masala", size: "250g", price: "180", image: "/products/kari_masala.png" },
    { id: "milagai", name: "Milagai Podi", size: "250g", price: "140", image: "/products/milagai_thool.png" },
    { id: "sathu", name: "Sathu Maavu", size: "500g", price: "250", image: "/products/sathu_maavu.png" },
  ];

  return (
    <div className={styles.pageContainer}>
      {/* Header */}
      <header className={styles.header}>
        <a href="#" className={styles.logoArea}>
          <Image src="/hero_ghee.png" alt="Logo" width={50} height={50} className={styles.logoImage} />
        </a>

        <nav className={styles.navLinks}>
          <a href="#" className={`${styles.navLink} ${styles.activeLink}`}>Home</a>
          <a href="#" className={styles.navLink}>Shop</a>
          <a href="#" className={styles.navLink}>About Us</a>
          <a href="#" className={styles.navLink}>Benefits</a>
          <a href="#" className={styles.navLink}>Recipes</a>
          <a href="#" className={styles.navLink}>Contact</a>
        </nav>

        <div className={styles.navRight}>
          <div className={styles.searchBox}>
            <input type="text" placeholder="Search for products..." className={styles.searchInput} />
            <Search size={16} color="var(--text-primary)" />
          </div>
          <div className={styles.iconGroup}>
            <button className={styles.iconBtn}><User size={20} /></button>
            <button className={styles.iconBtn}><Heart size={20} /></button>
            <button className={styles.iconBtn}><ShoppingCart size={20} /></button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <h1 className={styles.heroTitle}>
            <span className={styles.titleDark}>Pure Tradition</span><br />
            <span className={styles.titleBrown}>Pure Goodness</span>
          </h1>
          <p className={styles.heroSubtitle}>
            Traditional Ghee made with love, <br />for a healthier you and your family.
          </p>
          <button className={styles.shopNowBtn}>
            Shop Now <div className={styles.btnIconWrap}><ArrowRight size={14} color="var(--accent-green-dark)" /></div>
          </button>

          <div className={styles.heroFeaturesRow}>
            <div className={styles.heroFeature}>
              <div className={styles.featureIconCircle}>
                <Image src="/products/turmeric_powder.png" alt="icon" width={24} height={24} style={{opacity: 0.8}} />
              </div>
              <span className={styles.featureText}>100% Pure</span>
            </div>
            <div className={styles.heroFeature}>
              <div className={styles.featureIconCircle}>
                 <Image src="/products/nattu_sarkkarai.png" alt="icon" width={24} height={24} style={{opacity: 0.8}} />
              </div>
              <span className={styles.featureText}>Traditional<br />Method</span>
            </div>
            <div className={styles.heroFeature}>
              <div className={styles.featureIconCircle}>
                 <Image src="/products/kari_masala.png" alt="icon" width={24} height={24} style={{opacity: 0.8}} />
              </div>
              <span className={styles.featureText}>Premium<br />Quality</span>
            </div>
            <div className={styles.heroFeature}>
              <div className={styles.featureIconCircle}>
                 <Image src="/products/sathu_maavu.png" alt="icon" width={24} height={24} style={{opacity: 0.8}} />
              </div>
              <span className={styles.featureText}>No<br />Preservatives</span>
            </div>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.heroImageWrap}>
            <Image 
              src="/hero_ghee.png" 
              alt="Traditional Ghee and Bowls" 
              fill 
              className={styles.heroImage}
              priority
            />
          </div>
          <div className={styles.pureBadge}>
            <span className={styles.pureBadgeBig}>100%</span>
            <span className={styles.pureBadgeSmall}>Pure &<br/>Natural</span>
          </div>
          <div className={styles.heroDots}>
            <div className={`${styles.dot} ${styles.dotActive}`}></div>
            <div className={styles.dot}></div>
            <div className={styles.dot}></div>
          </div>
        </div>
      </section>

      {/* Goodness Section */}
      <section className={styles.goodnessSection}>
        <div className={styles.sectionTitleWrapper}>
          <h2 className={styles.sectionTitle}>Goodness in Every Spoon</h2>
          <div className={styles.titleDivider}>
             <Image src="/products/turmeric_powder.png" alt="leaf" width={24} height={24} />
          </div>
        </div>

        <div className={styles.goodnessGrid}>
          <div className={styles.goodnessItem}>
            <div className={styles.goodnessIconCircle}></div>
            <span className={styles.goodnessText}>Enhances<br/>Immunity</span>
          </div>
          <div className={styles.goodnessItem}>
            <div className={styles.goodnessIconCircle}></div>
            <span className={styles.goodnessText}>Good for<br/>Digestion</span>
          </div>
          <div className={styles.goodnessItem}>
            <div className={styles.goodnessIconCircle}></div>
            <span className={styles.goodnessText}>Rich in<br/>Nutrients</span>
          </div>
          <div className={styles.goodnessItem}>
            <div className={styles.goodnessIconCircle}></div>
            <span className={styles.goodnessText}>Improves<br/>Energy</span>
          </div>
          <div className={styles.goodnessItem}>
            <div className={styles.goodnessIconCircle}></div>
            <span className={styles.goodnessText}>Good for Heart<br/>Health</span>
          </div>
          <div className={styles.goodnessItem}>
            <div className={styles.goodnessIconCircle}></div>
            <span className={styles.goodnessText}>Healthy Skin<br/>& Hair</span>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className={styles.productsSection}>
        <div className={styles.sectionTitleWrapper}>
          <h2 className={styles.sectionTitle}>Our Products</h2>
          <div className={styles.titleDivider}>
             <Image src="/products/turmeric_powder.png" alt="leaf" width={24} height={24} />
          </div>
          
          <div className={styles.viewAllWrap}>
            <button className={styles.viewAllBtn}>View All</button>
          </div>
        </div>

        <div className={styles.productsCarousel}>
          <button className={styles.carouselBtn}><ChevronLeft size={20} /></button>
          
          <div className={styles.productsGrid}>
            {products.map((product) => (
              <div key={product.id} className={styles.productCard}>
                <div className={styles.productImageSection}>
                  <div className={styles.productImageWrap}>
                    <Image 
                      src={product.image} 
                      alt={product.name} 
                      fill 
                      className={styles.productImage} 
                    />
                  </div>
                </div>
                <div className={styles.productInfoSection}>
                  <h3 className={styles.productTitle}>{product.name}</h3>
                  <span className={styles.productSize}>{product.size}</span>
                  <span className={styles.productPrice}>₹{product.price}</span>
                  <button className={styles.addToCartBtn}>Add to Cart</button>
                </div>
              </div>
            ))}
          </div>

          <button className={styles.carouselBtn}><ChevronRight size={20} /></button>
        </div>
      </section>
    </div>
  );
}

