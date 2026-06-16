"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ShoppingBag, ShoppingCart, User } from "lucide-react";
import { useCart } from "@/context/CartContext";
import styles from "./BottomNav.module.css";

export default function BottomNav() {
  const pathname = usePathname();
  const { cartCount } = useCart();

  return (
    <div className={styles.bottomNavContainer}>
      <nav className={styles.bottomNav}>
        <Link href="/" className={`${styles.navItem} ${pathname === '/' ? styles.active : ''}`}>
          <Home size={24} />
          <span className={styles.label}>Home</span>
        </Link>
        <Link href="/shop" className={`${styles.navItem} ${pathname?.startsWith('/shop') ? styles.active : ''}`}>
          <ShoppingBag size={24} />
          <span className={styles.label}>Shop</span>
        </Link>
        <Link href="/cart" className={`${styles.navItem} ${pathname === '/cart' ? styles.active : ''}`}>
          <div className={styles.iconWrapper}>
            <ShoppingCart size={24} />
            {cartCount > 0 && <span className={styles.badge}>{cartCount}</span>}
          </div>
          <span className={styles.label}>Cart</span>
        </Link>
        <Link href="/login" className={`${styles.navItem} ${pathname === '/login' || pathname === '/profile' ? styles.active : ''}`}>
          <User size={24} />
          <span className={styles.label}>Profile</span>
        </Link>
      </nav>
    </div>
  );
}
