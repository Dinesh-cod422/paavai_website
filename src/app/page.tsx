"use client";

import { useState, useMemo } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import styles from "./page.module.css";
import {
  MapPin,
  Phone,
  MessageSquare,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Leaf,
  Star,
  Wheat,
  Flame,
  Milk,
  Sprout
} from "lucide-react";

// Dynamically load the Scene3D canvas component to bypass Next.js SSR WebGL conflicts
const Scene3D = dynamic(() => import("@/components/Scene3D"), {
  ssr: false,
  loading: () => (
    <div style={{
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexDirection: "column",
      gap: "12px",
      color: "var(--accent-gold)",
      fontSize: "12px",
      letterSpacing: "4px",
      textTransform: "uppercase",
      background: "var(--bg-deep-space)",
      fontFamily: "var(--font-sans)"
    }}>
      Preparing 3D Spatial Canvas...
    </div>
  )
});

interface Product {
  id: string;
  number: number;
  tamilName: string;
  englishName: string;
  slogan: string;
  description: string;
  benefits: string[];
  specs: {
    process: string;
    purity: string;
    nutrition: string;
    origin: string;
  };
}

const products: Product[] = [
  {
    id: "jaggery",
    number: 1,
    tamilName: "நாட்டு சர்க்கரை",
    englishName: "Organic Jaggery Powder",
    slogan: "Unrefined sweetness, directly from native sugarcane fields.",
    description: "Traditional chemical-free sugarcane sweetener processed from premium wooden-pressed cane. Rich in natural iron and minerals without synthetic clarifying agents.",
    benefits: [
      "Rich in natural iron to prevent fatigue",
      "100% natural substitute for white refined sugar",
      "Improves digestive enzymes & naturally detoxes"
    ],
    specs: {
      process: "Traditional Wood-Pressed Cane",
      purity: "100% Sulfite & Chemical Free",
      nutrition: "High Natural Iron & Calcium",
      origin: "Erode, Tamil Nadu"
    }
  },
  {
    id: "curry_masala",
    number: 2,
    tamilName: "கறி மசாலா",
    englishName: "Earthy Curry Masala",
    slogan: "A rich heritage blend of traditional wood-roasted spices.",
    description: "A heritage homestead recipe of dry-roasted hand-ground spices. Blends traditional organic spices in golden proportions to infuse a rich aromatic warmth into culinary curries.",
    benefits: [
      "Stone-ground for texture & flavor lock",
      "Traditional Erode homestead spice blend",
      "Free from additives, starch, or colors"
    ],
    specs: {
      process: "Slow Wood-Roast & Stone-Ground",
      purity: "Zero Added Starch or MSG",
      nutrition: "High Capsaicin & Antioxidants",
      origin: "Erode, Tamil Nadu"
    }
  },
  {
    id: "chilli_powder",
    number: 3,
    tamilName: "மிளகாய்த் தூள்",
    englishName: "Vibrant Chilli Powder",
    slogan: "Sun-dried organic heat, processed to locks in pure flavor.",
    description: "Sun-dried organic hot chillies milled at low temperatures. Provides a gorgeous natural deep red color and strong, authentic culinary heat.",
    benefits: [
      "No artificial food coloring or chemicals",
      "Sun-dried naturally to retain nutrients",
      "Boosts cellular metabolism & immunity"
    ],
    specs: {
      process: "Naturally Sun-Dried & Cold-Milled",
      purity: "100% Organic, Zero Dye Additives",
      nutrition: "Vitamin C & High Capsaicin",
      origin: "Erode, Tamil Nadu"
    }
  },
  {
    id: "sattu_maavu",
    number: 4,
    tamilName: "சத்து மாவு",
    englishName: "Nutritious Health Mix",
    slogan: "Wholesome sprouted multigrain energy mix for all age groups.",
    description: "A premium multigrain nutritional blend. Prepared by slow-roasting 14+ traditional sprouted millets, grains, dry nuts, and fresh cardamom.",
    benefits: [
      "Sprouted millets loaded with dietary fiber",
      "High natural protein source for growth",
      "Healthy sugar-free traditional breakfast drink"
    ],
    specs: {
      process: "Sprouted, Roasted & Stone-Ground",
      purity: "100% Sugar-Free & Preservative Free",
      nutrition: "Rich Protein, Calcium & Fiber",
      origin: "Erode, Tamil Nadu"
    }
  },
  {
    id: "sambar_podi",
    number: 5,
    tamilName: "சாம்பார் பொடி",
    englishName: "Traditional Sambar Powder",
    slogan: "Authentic Kongu-style spice formula, roasted slowly.",
    description: "Authentic Erode style sambar spices mix. Handpicked coriander seeds, local chillies, fenugreek, and native pulses roasted slowly to lock in aroma.",
    benefits: [
      "Time-tested traditional spice proportions",
      "Distinct aromatic flavor of native Tamil cuisine",
      "100% preservative-free and hygienically packed"
    ],
    specs: {
      process: "Erode Homestead Slow-Roast",
      purity: "Zero Fillers or Color Preservatives",
      nutrition: "Excellent Digestant & Anti-Inflammatory",
      origin: "Erode, Tamil Nadu"
    }
  },
  {
    id: "urad_podi",
    number: 6,
    tamilName: "உளுந்து பொடி",
    englishName: "Black Urad Dal Podi",
    slogan: "Stone-ground protein power, seasoned to heritage perfection.",
    description: "Stone-ground organic black urad dal roasted with fresh sesame, red chillies, and native curry leaves. High in organic dietary calcium.",
    benefits: [
      "Exceptional protein & bone health builder",
      "Stone-ground in micro batches for freshness",
      "Exquisite flavor paired with wood-pressed oil"
    ],
    specs: {
      process: "Dry-Roasted & Micro Batch Ground",
      purity: "100% Whole Black Dal Powder",
      nutrition: "High Organic Proteins & Calcium",
      origin: "Erode, Tamil Nadu"
    }
  },
  {
    id: "ghee",
    number: 7,
    tamilName: "நெய்",
    englishName: "Aromatic Pure Ghee",
    slogan: "Traditional slow-boiled cow ghee, with a granular texture.",
    description: "Traditional slow-boiled golden ghee prepared from fresh organic Erode cow milk. Noted for its granular texture and therapeutic aroma.",
    benefits: [
      "Grandmother's slow-boil granular texture (மணல் நெய்)",
      "High in fat-soluble vitamins A, D, and E",
      "Promotes superior gut health & cellular glow"
    ],
    specs: {
      process: "Slow Butter-Boiled (மணல் நெய்)",
      purity: "100% Pure Organic Milk-Fat",
      nutrition: "Fat-Soluble Vitamins A, D, E & K",
      origin: "Erode, Tamil Nadu"
    }
  },
  {
    id: "turmeric",
    number: 8,
    tamilName: "மஞ்சள் தூள்",
    englishName: "Pure Turmeric Powder",
    slogan: "Culinary gold with high-grade curcumin, antiseptic shield.",
    description: "Harvested from Erode's rich organic soils and processed to lock in maximum curcumin content. Culinary gold and natural antiseptic.",
    benefits: [
      "Very high natural Curcumin concentration",
      "Potent organic anti-inflammatory shield",
      "Powerhouse of antioxidants & skin glow"
    ],
    specs: {
      process: "High Curcumin Roots Grinding",
      purity: "100% Natural Curcumin, Zero Dyes",
      nutrition: "Anti-Inflammatory & Antioxidant Shield",
      origin: "Erode, Tamil Nadu"
    }
  }
];

// Custom SVG component to represent Instagram to bypass dependency version discrepancies
const InstagramIcon = ({ size = 24, ...props }: React.SVGProps<SVGSVGElement> & { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

export default function Home() {
  const [activeProductId, setActiveProductId] = useState<string>("ghee"); // Default to Ghee
  const [imageError, setImageError] = useState<Record<string, boolean>>({});

  // Retrieve current active product
  const activeProduct = useMemo(() => {
    return products.find((p) => p.id === activeProductId) || products[6];
  }, [activeProductId]);

  const whatsappMessage = encodeURIComponent(
    `Hello Paavai Paarambariyam, I would like to order ${activeProduct.englishName} (${activeProduct.tamilName}). Please share the price, available pack sizes, and delivery details.`
  );

  return (
    <div className={styles.pageContainer}>
      <div className={styles.backdropTexture} />

      {/* 3D WebGL Star Canvas in background */}
      <div className={styles.canvasContainer}>
        <Scene3D activeMesh={activeProductId} speedMultiplier={1.2} />
      </div>

      {/* Apple Frosted Glass Top Nav Bar */}
      <nav className={styles.topNav}>
        <a href="#" className={styles.logo}>
          <span className={styles.logoTamil}>பாவை பாரம்பரியம்</span>
          <div className={styles.logoDivider}></div>
          <span className={styles.logoEnglish}>Paavai</span>
        </a>

        <div className={styles.navLinks}>
          <a href="#" className={styles.navLink}>Purity</a>
          <a href="#" className={styles.navLink}>Homestead</a>
          <a href="#" className={styles.navLink}>Spices</a>
          <a href="#" className={styles.navLink}>Health</a>
        </div>

        <div className={styles.navRight}>
          <div className={styles.locationText}>
            <MapPin size={10} color="var(--accent-gold)" />
            <span>Erode, TN</span>
          </div>
          <a href="tel:+917200189461" className={styles.navCallButton}>
            Call Homestead
          </a>
        </div>
      </nav>

      {/* Immersive Front Layout Overlay */}
      <div className={styles.overlay}>

        {/* Main Grid Split Content */}
        <main className={styles.mainContent}>

          {/* Left Column: Giant Hardware Image Frame + Reflection */}
          <div className={styles.heroShowcaseContainer}>
            {/* Immersive MacBook-style hardware card */}
            <div key={`frame-${activeProduct.id}`} className={`${styles.hardwareImageCard} ${styles.interactive} ${styles.animateFade}`}>
              <div className={styles.productHalo} />
              <div className={styles.productCardTopline}>
                <span>Small batch</span>
                <span>0{activeProduct.number}</span>
              </div>
              {!imageError[activeProduct.id] ? (
                <Image
                  src={`/products/${activeProduct.id}.png`}
                  alt={activeProduct.englishName}
                  fill
                  sizes="(max-width: 768px) 82vw, 420px"
                  className={styles.hardwareImage}
                  onError={() => {
                    setImageError(prev => ({ ...prev, [activeProduct.id]: true }));
                  }}
                />
              ) : (
                <div className={styles.fallbackContainer}>
                  <Sparkles className={styles.fallbackIcon} size={24} />
                  <span>Upload product image to <strong>public/products/{activeProduct.id}.png</strong> to show it here!</span>
                </div>
              )}
              <div className={styles.productCardCaption}>
                <span>{activeProduct.englishName}</span>
                <strong>{activeProduct.specs.origin}</strong>
              </div>
            </div>
            <div className={styles.heroTrustBar}>
              <span><Star size={14} /> Homemade freshness</span>
              <span><ShieldCheck size={14} /> No fillers</span>
            </div>
          </div>

          {/* Right Column: Sleek Apple-Style Spec Panel */}
          <div className={`${styles.specPanel} ${styles.interactive}`}>

            <div className={styles.productMeta}>
              <span className={styles.productNumberBadge}>Product 0{activeProduct.number} / 08</span>
              <div className={styles.purityBadge}>
                <Leaf size={12} />
                <span>100% இயற்கை (Natural)</span>
              </div>
            </div>

            <div key={`title-${activeProduct.id}`} className={`${styles.productHeadline} ${styles.animateFade}`}>
              <h1 className={styles.tamilTitle}>{activeProduct.tamilName}</h1>
              <p className={styles.englishTitle}>{activeProduct.englishName}</p>
              <p className={styles.sloganItalic}>&ldquo;{activeProduct.slogan}&rdquo;</p>
            </div>

            <div className={styles.heroHighlights}>
              <span><Wheat size={15} /> Native ingredients</span>
              <span><Flame size={15} /> Slow roasted</span>
              <span><Sprout size={15} /> Clean pantry</span>
            </div>

            <p key={`desc-${activeProduct.id}`} className={`${styles.descriptionText} ${styles.animateFade}`}>
              {activeProduct.description}
            </p>

            <div key={`benefits-${activeProduct.id}`} className={`${styles.benefitGrid} ${styles.animateFade}`}>
              {activeProduct.benefits.map((benefit) => (
                <span key={benefit} className={styles.benefitPill}>
                  <Leaf size={13} />
                  {benefit}
                </span>
              ))}
            </div>

            {/* Apple Specifications Grid */}
            <div key={`specs-${activeProduct.id}`} className={`${styles.specsGrid} ${styles.animateFade}`}>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>CRAFT PROCESS</span>
                <span className={styles.specValue}>{activeProduct.specs.process}</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>PURITY RATING</span>
                <span className={styles.specValue}>{activeProduct.specs.purity}</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>NUTRITION STAT</span>
                <span className={styles.specValue}>{activeProduct.specs.nutrition}</span>
              </div>
              <div className={styles.specRow}>
                <span className={styles.specLabel}>GEOGRAPHY</span>
                <span className={styles.specValue}>{activeProduct.specs.origin}</span>
              </div>
            </div>

            {/* Premium CTA Buttons */}
            <div className={styles.buttonGroup}>
              <a
                href={`https://wa.me/917200189461?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.applePrimaryBtn}
              >
                <MessageSquare size={14} />
                <span>Order on WhatsApp</span>
                <ArrowRight size={12} />
              </a>
              <a
                href="tel:+917200189461"
                className={styles.appleSecondaryBtn}
              >
                <Phone size={13} />
                <span>Call Homestead</span>
              </a>
            </div>

          </div>

        </main>

        {/* Premium Bottom Product Rail */}
        <div className={`${styles.dockContainer} ${styles.interactive}`}>
          <div className={styles.macDock}>
            {products.map((product) => (
              <button
                type="button"
                key={product.id}
                className={`${styles.dockItem} ${activeProductId === product.id ? styles.dockItemActive : ""}`}
                onClick={() => setActiveProductId(product.id)}
                title={product.englishName}
              >
                <span className={styles.dockImageWrap}>
                  {!imageError[product.id] ? (
                    <Image
                      src={`/products/${product.id}.png`}
                      alt=""
                      fill
                      sizes="72px"
                      className={styles.dockImage}
                      onError={() => {
                        setImageError(prev => ({ ...prev, [product.id]: true }));
                      }}
                    />
                  ) : (
                    <Milk size={18} />
                  )}
                </span>
                <span className={styles.dockCopy}>
                  <span className={styles.dockNumber}>0{product.number}</span>
                  <span className={styles.dockLabel}>{product.tamilName}</span>
                </span>
                {activeProductId === product.id && (
                  <div className={styles.dockActiveDot}></div>
                )}
              </button>
            ))}
          </div>
        </div>

        <section className={`${styles.storyBand} ${styles.interactive}`}>
          <div>
            <span className={styles.storyEyebrow}>Erode homestead kitchen</span>
            <h2>Traditional taste, finished with a modern premium standard.</h2>
          </div>
          <div className={styles.storyStats}>
            <span><strong>8</strong> signature staples</span>
            <span><strong>0</strong> artificial colors</span>
            <span><strong>100%</strong> homemade care</span>
          </div>
        </section>

        {/* Footer */}
        <footer className={styles.footer}>
          <div className={styles.copyright}>
            &copy; 2026 பாாவை பாரம்பரியம் (Paavai Paarambariyam). Purity in Heritage.
          </div>
          <div className={`${styles.footerRight} ${styles.interactive}`}>
            <a
              href="https://www.instagram.com/paavai_paarambariyam"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.instaLink}
            >
              <InstagramIcon size={12} />
              <span>@paavai_paarambariyam</span>
            </a>
            <div className={styles.certifiedText}>
              <ShieldCheck size={12} color="var(--accent-green)" />
              <span>100% Purity Certified</span>
            </div>
          </div>
        </footer>

      </div>
    </div>
  );
}
