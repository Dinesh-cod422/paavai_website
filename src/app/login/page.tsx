import Link from "next/link";
import { HeartHandshake, ArrowLeft } from "lucide-react";
import styles from "../ComingSoon.module.css";

export default function LoginPage() {
  return (
    <main className={styles.pageWrapper}>
      <div className={styles.contentCard}>
        <div className={styles.iconWrapper}>
          <HeartHandshake size={36} />
        </div>
        
        <h1 className={`${styles.title} serif-font`}>Welcome to Our Family</h1>
        
        <p className={styles.message}>
          We are currently crafting a beautifully personalized experience just for you. 
          <br /><br />
          The <span className={styles.highlight}>Member Login</span> area is being built with love so you can track your orders and save your favorite healthy traditions. We'll open the doors very soon!
        </p>

        <Link href="/" className={styles.backBtn}>
          <ArrowLeft size={18} /> Return Home
        </Link>
      </div>
    </main>
  );
}
