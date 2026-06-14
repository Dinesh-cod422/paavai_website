import { ShieldPlus, Activity, Sprout, Zap, HeartPulse, Sparkles } from "lucide-react";
import styles from "./Benefits.module.css";

export default function Benefits() {
  const benefitsList = [
    { icon: <ShieldPlus size={28} />, text: "Enhances\nImmunity" },
    { icon: <Activity size={28} />, text: "Good for\nDigestion" },
    { icon: <Sprout size={28} />, text: "Rich in\nNutrients" },
    { icon: <Zap size={28} />, text: "Improves\nEnergy" },
    { icon: <HeartPulse size={28} />, text: "Good for Heart\nHealth" },
    { icon: <Sparkles size={28} />, text: "Healthy Skin\n& Hair" },
  ];

  return (
    <section className={styles.benefitsSection}>
      <div className={`container ${styles.benefitsContainer}`}>
        <div className={styles.header}>
          <h2 className={`${styles.title} serif-font`}>Goodness in Every Spoon</h2>
          <div className={styles.leafDecoration}>
            <Sprout size={24} color="var(--accent-green-dark)" />
          </div>
        </div>

        <div className={styles.grid}>
          {benefitsList.map((benefit, index) => (
            <div key={index} className={styles.benefitCard}>
              <div className={styles.iconWrapper}>
                {benefit.icon}
              </div>
              <p className={styles.benefitText}>{benefit.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
