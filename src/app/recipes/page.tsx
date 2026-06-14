import Link from "next/link";
import { Sparkles, ArrowLeft } from "lucide-react";
import styles from "../ComingSoon.module.css";

export default function RecipesPage() {
  return (
    <main className={styles.pageWrapper}>
      <div className={styles.contentCard}>
        <div className={styles.iconWrapper}>
          <Sparkles size={36} />
        </div>
        
        <h1 className={`${styles.title} serif-font`}>Something Delicious is Cooking</h1>
        
        <p className={styles.message}>
          We are in the kitchen preparing our favorite traditional recipes to share with you. 
          <br /><br />
          Our heritage collection of authentic <span className={styles.highlight}>Paavai Parampariyam</span> recipes is currently simmering with love and care. We can't wait to serve it to you very soon!
        </p>

        <Link href="/" className={styles.backBtn}>
          <ArrowLeft size={18} /> Return Home
        </Link>
      </div>
    </main>
  );
}
