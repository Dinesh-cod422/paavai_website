import { Metadata } from "next";
import { Leaf, HeartPulse, History, Sparkles } from "lucide-react";
import styles from "./About.module.css";

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about the heritage, roots, and promise behind Paavai Paarampariyam's 100% natural, traditional food products.",
};

export default function AboutPage() {
  return (
    <main className={styles.main}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroOverlay}></div>
        <div className="container">
          <div className={styles.heroContent}>
            <h1 className={`${styles.title} serif-font`}>About Us</h1>
            <p className={styles.subtitle}>Paavai Paarampariyam</p>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className={styles.contentSection}>
        <div className={`container ${styles.contentContainer}`}>
          
          <div className={styles.card}>
            <div className={styles.iconWrapper}>
              <History size={32} />
            </div>
            <h2 className="serif-font">Our Heritage & Roots</h2>
            <p>
              Founded in <strong>May 2026</strong>, <span className={styles.highlight}>Paavai Paarampariyam</span> was born out of a profound reverence for the forgotten culinary arts of our ancestors. We are not just a brand; we are a revival movement dedicated to bringing the pure, unadulterated richness of traditional Indian food back into the heart of the modern kitchen.
            </p>
            <p>
              In today's fast-paced world of artificial flavors and mass-produced shortcuts, the genuinely healthy practices of the past are fading away. Our vision is to painstakingly resurrect these time-honored traditions, safeguarding the profound benefits of natural, wholesome food for generations to come.
            </p>
          </div>

          <div className={styles.quoteBlock}>
            <HeartPulse size={48} className={styles.quoteIcon} />
            <blockquote className="serif-font">
              "Healthy Food Leads to a Traditional and Meaningful Life."
            </blockquote>
          </div>

          <div className={styles.cardGrid}>
            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <Leaf size={32} />
              </div>
              <h2 className="serif-font">The Artisanal Process</h2>
              <p>
                We believe that true flavor cannot be rushed. Our premium range—including <strong>Sun-Dried Sambar Powder, Slow-Roasted Curry Masala, Stone-Ground Turmeric & Chilli, Hand-Churned Golden Ghee, and Nutrient-Dense Healthy Mixes</strong>—is crafted using meticulous, ancestral methods. 
              </p>
              <p>
                By avoiding industrial processing, we naturally lock in the vital essential oils, vivid colors, and medicinal properties that give our food its authentic, heritage taste.
              </p>
            </div>

            <div className={styles.card}>
              <div className={styles.iconWrapper}>
                <Sparkles size={32} />
              </div>
              <h2 className="serif-font">The Paavai Promise</h2>
              <p>
                Food is far more than mere nourishment; it is the absolute foundation of a thriving, vibrant lifestyle. We pledge an unwavering commitment to purity—<strong>zero artificial colors, zero chemical preservatives, and zero compromises.</strong>
              </p>
              <p>
                Through our passionately crafted products, we strive to reconnect your family with the profound wisdom of traditional living. When you choose Paavai Paarampariyam, you are choosing trustworthy nutrition crafted exactly the way nature intended.
              </p>
            </div>
          </div>

          <div className={styles.footerQuote}>
            <h3 className="serif-font">Paavai Paarampariyam</h3>
            <p className={styles.tagline}>
              The Taste of Tradition... The Promise of Health. 🌿🌾✨
            </p>
          </div>

        </div>
      </section>
    </main>
  );
}
